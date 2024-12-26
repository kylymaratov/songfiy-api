import { Injectable } from '@nestjs/common';
import { User, UserInfo, UserSession } from '@prisma/client';
import { apiEnv } from 'src/common/api-options/api.env.option';
import { PrismaService } from 'src/database/database.service';
import { GetUserSessionsResponse } from 'src/types/response.types';
import { CreateUser } from 'src/types/user.types';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findUserByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async deleteUserSessionById(sessionId: string) {
    await this.prisma.userSession.delete({ where: { sessionId } });
  }

  async getUserSessionByToken(userId: number, accessToken: string) {
    return await this.prisma.userSession.findFirst({
      where: { userId, accessToken },
    });
  }

  async getUserSessions(user: User): Promise<GetUserSessionsResponse> {
    const sessions = await this.prisma.userSession.findMany({
      where: { userId: user.id },
    });

    return {
      sessions,
    };
  }

  async createSession(
    user: User,
    accessToken: string,
    userAgent: string,
  ): Promise<UserSession> {
    const exSession = await this.prisma.userSession.findFirst({
      where: { userAgent, userId: user.id },
    });

    if (exSession) {
      const updatedSession = await this.prisma.userSession.update({
        where: { sessionId: exSession.sessionId },
        data: { accessToken, expire: parseInt(apiEnv.env.JWT_EXPIRE_MS) },
      });

      return updatedSession;
    }

    const session = await this.prisma.userSession.create({
      data: {
        userAgent,
        userId: user.id,
        accessToken,
        expire: parseInt(apiEnv.env.JWT_EXPIRE_MS),
      },
    });

    return session;
  }

  async createUser(user: CreateUser): Promise<User> {
    const candidate = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (candidate) return candidate;

    const createdUser = await this.prisma.user.create({
      data: {
        email: user.email,
        password: '',
        verified: user.verified,
      },
    });

    await this.prisma.userInfo.create({
      data: { userSubId: createdUser.id, avatar: user.avatar },
    });

    return createdUser;
  }

  async getUser(user: User): Promise<User & UserInfo> {
    const userInfo = await this.prisma.userInfo.findUnique({
      where: { userSubId: user.id },
    });

    return {
      ...user,
      ...userInfo,
    };
  }
}
