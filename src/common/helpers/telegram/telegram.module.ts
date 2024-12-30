import { Inject, Injectable } from '@nestjs/common';

//
import { Convertion } from 'src/common/utils/convertion';

@Injectable()
export class TelegramHelper {
  constructor(@Inject(Convertion) private convertion: Convertion) {}
}
