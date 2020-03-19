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

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAld3jru2O2W1f2M8ZflzeyHHwulNp4k7XOqgeSoa_UKjVK8rxbodX2tyrZy7qTW2RFr3qK4opoM11WCO4'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
              .pipe( map( data => {
                return data['albums'].items;
              }) );
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAld3jru2O2W1f2M8ZflzeyHHwulNp4k7XOqgeSoa_UKjVK8rxbodX2tyrZy7qTW2RFr3qK4opoM11WCO4'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
              .pipe( map( data => data['artists'].items));
  }
}
