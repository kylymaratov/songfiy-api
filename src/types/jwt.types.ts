export interface JwtPayload {
  email: string;
  userAgent?: string;
  ipAddress?: string;
  provider?: string;
}
