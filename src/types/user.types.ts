export interface GoogleUser {
  googleId: string;
  displayName: string;
  emails: { value: string; verified: boolean }[];
}
