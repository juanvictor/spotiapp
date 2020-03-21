import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) {
    console.log('Spotify service listo');
  }

  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBQfjrDo4bzaSgUAVcV44LE3XMztC7pa302-KxyBeUJ-IeNXTK18a32s5mbvIkGwmIjZqWvEfQpg3dx4ZQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
              .pipe( map( data => {
                return data['albums'].items;
              }) );
  }

  getArtista(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));
  }
}
