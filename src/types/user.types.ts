import { User, UserSession } from '@prisma/client';

export interface GoogleUser {
  googleId: string;
  displayName: string;
  emails: { value: string; verified: boolean }[];
  photos: { value: string }[];
  provider: 'google';
}

export interface CreateUser {
  email: string;
  password: string;
  verified: boolean;
  avatar: string;
  provider: string;
}

export interface UserWithRel extends User {
  sessions?: UserSession[];
}
