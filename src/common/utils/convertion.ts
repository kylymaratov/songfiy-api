import { Injectable } from '@nestjs/common';
//
import { CYRILIC_TO_LATIN_MAP } from '../constants/dictionary';
import { regeXP } from '../constants/regexp';

@Injectable()
export class Convertion {
  public convertDate(textDate: string) {
    const date = new Date();
    const match = textDate.match(regeXP.TEXT_DATE);
    if (match) {
      const value = parseInt(match[1], 10);
      const unit = match[2];

      switch (unit) {
        case 'year':
        case 'years':
          date.setFullYear(date.getFullYear() - value);
          break;
        case 'month':
        case 'months':
          date.setMonth(date.getMonth() - value);
          break;
        case 'day':
        case 'days':
          date.setDate(date.getDate() - value);
          break;
        case 'hour':
        case 'hours':
          date.setHours(date.getHours() - value);
          break;
        case 'minute':
        case 'minutes':
          date.setMinutes(date.getMinutes() - value);
          break;
      }
    }
    return date;
  }

  public convertCyrilicLatin(text: string): string {
    return text
      .split('')
      .map((char) => CYRILIC_TO_LATIN_MAP[char] || char)
      .join('')
      .replace(/[^a-zA-Z0-9]/g, '');
  }
}
