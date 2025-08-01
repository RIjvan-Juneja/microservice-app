import { Controller, Get, Inject, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth/auth.guard';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    @Inject('USER-SERVICE') private readonly userClient: ClientProxy
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  async getUserProfile(@Req() req: any) {
    const userId = req.user.userId;
    const user = this.userClient.send('get-user-profile', userId);
    return await firstValueFrom(user);
  }
}
