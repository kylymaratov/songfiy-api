import { Injectable } from '@nestjs/common';
//
import { spawn } from 'node:child_process';

@Injectable()
export class DownloadHelper {
  async getBufferById() {
    try {
      const buffer = await this.download();

      return buffer;
    } catch (error) {}
  }

  private download() {
    return new Promise((resolve, reject) => {});
  }
}
