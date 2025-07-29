import { Controller } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async getUserProfile() {
    // Call the auth service to get the user profile
  }
}
