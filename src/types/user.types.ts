export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  verified: boolean;
  songLikes: any[];
  createdAt: Date;
  updatedAt: Date;
  UserInfo: any[];
}

export interface GoogleUser {
  id: string;
  displayName: string;
  emails: { value: string }[];
}
