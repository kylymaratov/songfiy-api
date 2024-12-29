import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { SearchSongsDto } from './dto/search.songs.dto';
import { SongService } from './song.service';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post('search')
  @HttpCode(200)
  public searchSongs(@Body() body: SearchSongsDto) {
    return this.songService.searchSongs(body);
  }
}
