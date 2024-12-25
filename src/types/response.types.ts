import { UserSession } from '@prisma/client';

export interface LoginResponse {
  session: UserSession;
}

export interface GetUserSessionsResponse {
  sessions: UserSession[];
}
