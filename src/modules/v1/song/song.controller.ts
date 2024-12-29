import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
//
import { SearchSongsDto } from './dto/search.songs.dto';
import { SongService } from './song.service';
import { DownloadSongDto } from './dto/download.song.dto';
import { ListenSongDto } from './dto/listen.song.dto';

@Controller('song')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get('download')
  @HttpCode(200)
  public downloadSong(@Query() query: DownloadSongDto, @Res() res: Response) {
    return this.songService.downloadSong(query, res);
  }

  @Get('listen')
  @HttpCode(206)
  public listenSong(
    @Query() query: ListenSongDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    return this.songService.listenSong(query, req, res);
  }

  @Post('search')
  @HttpCode(200)
  public searchSongs(@Body() body: SearchSongsDto) {
    return this.songService.searchSongs(body);
  }
}
