import {
  ConsoleLogger,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { rainbow, red } from 'colors/safe';
@Injectable()
export class AppService
  implements OnApplicationShutdown, OnApplicationBootstrap
{
  private readonly logger = new ConsoleLogger(AppService.name);

  onApplicationBootstrap() {
    this.logger.log(
      rainbow(`Backend open on port ${process.env['PORT'] || 3000}`),
    );
  }

  onApplicationShutdown(signal: string) {
    this.logger.log(`${red(`[${signal}]`)} Backend Stop`);
  }
}
