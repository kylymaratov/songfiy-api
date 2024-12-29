import { Module } from '@nestjs/common';
//
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { SearchHelper } from 'src/common/helpers/youtube-parser/search.helper';
import { Convertion } from 'src/common/utils/convertion';
import { DownloadHelper } from 'src/common/helpers/youtube-parser/download.helper';

@Module({
  imports: [],
  controllers: [SongController],
  providers: [SongService, SearchHelper, Convertion, DownloadHelper],
})
export class SongModule {}
