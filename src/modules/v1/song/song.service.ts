import { Inject, Injectable } from '@nestjs/common';
import { SearchSongsDto } from './dto/search.songs.dto';
import { SearchHelper } from 'src/common/helpers/youtube-parser/search.helper';
import { SearchSongsResponse } from './types/song.response.types';
import { DownloadSongDto } from './dto/download.song.dto';
import { DownloadHelper } from 'src/common/helpers/youtube-parser/download.helper';
import { Request, Response } from 'express';
import { Readable } from 'stream';
import { ListenSongDto } from './dto/listen.song.dto';

@Injectable()
export class SongService {
  constructor(
    @Inject(SearchHelper) private searchHelper: SearchHelper,
    @Inject(DownloadHelper) private downloadHelper: DownloadHelper,
  ) {}

  public async searchSongs(body: SearchSongsDto): Promise<SearchSongsResponse> {
    const { query, limit } = body;

    const songs = await this.searchHelper.searchSongsByName(
      query,
      Number(limit),
    );

    return {
      title: `${songs.length} songs founded by query: ${query}`,
      songs,
    };
  }

  public async downloadSong(query: DownloadSongDto, res: Response) {
    const { songId, quality } = query;

    const buffer = await this.downloadHelper.downloadSong(songId, quality);

    return Readable.from(buffer).pipe(res);
  }

  public async listenSong(query: ListenSongDto, req: Request, res: Response) {
    const { quality, songId } = query;

    const buffer = await this.downloadHelper.downloadSong(songId, quality);
  }
}
