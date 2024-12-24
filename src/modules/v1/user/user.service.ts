import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: any): Promise<User> {
    const candidate = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (candidate) return candidate;

    const createdUser = await this.prisma.user.create({ data: user });

    await this.prisma.userInfo.create({ data: { userSubId: createdUser.id } });

    return createdUser;
  }
}
