import { Inject, Injectable } from '@nestjs/common';
import { SearchSongsDto } from './dto/search.songs.dto';
import { SearchHelper } from 'src/common/helpers/youtube-parser/search.helper';
import { SearchSongsResponse } from './types/song.response.types';

@Injectable()
export class SongService {
  constructor(@Inject(SearchHelper) private searchHelper: SearchHelper) {}

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
}
