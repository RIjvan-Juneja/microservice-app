import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {
  constructor(private jwtService: JwtService) {}

  login(credentials: { username: string; password: string }) {
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      // return { message: 'Login successful' };
      const payload = {
        sub: '123',
        username: credentials.username,
        role: 'admin',
      };

      const token = this.jwtService.sign(payload);
      return { token };
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async validateToken(token: string) {
    try {
      const decoded = this.jwtService.verify(token);
      return { valid : true, userId : decoded.sub, username: decoded.username, role: decoded.role };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
