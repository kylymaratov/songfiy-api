import { Injectable } from '@nestjs/common';
//
import { spawn } from 'child_process';
import { URLS } from 'src/common/constants/urls';

@Injectable()
export class DownloadHelper {
  public async downloadSong(
    songId: string,
    quality: number = 1,
  ): Promise<Buffer> {
    const buffer = await this.downloadingProcess(songId, quality);

    return buffer;
  }

  private downloadingProcess(songId: string, quality: number): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const chunks: Buffer[] = [];

      const process = spawn('yt-dlp', [
        URLS.WATCH + songId,
        '--output',
        '-',
        '--format',
        'bestaudio',
        '--no-check-certificate',
        '--extract-audio',
        '--audio-format',
        'mp3',
        '--audio-quality',
        quality.toString(),
      ]);

      process.stdout.on('data', (chunk: Buffer) => {
        chunks.push(chunk);
      });

      process.stdout.on('end', () => {
        const buffer = Buffer.concat(chunks);
        resolve(buffer);
      });

      process.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Download process exited with code ${code}`));
        }
      });

      process.on('error', (error) => {
        reject(new Error(`Failed to download: ${error.message}`));
      });
    });
  }
}
