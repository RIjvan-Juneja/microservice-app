import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { userId: '1', role: 'admin', username: 'admin_user' },
    { userId: '2', role: 'user', username: 'john_doe' },
  ];

  getUserProfile(userId: string) {
    return this.users.find((u) => u.userId === userId) || null;
  }
}
