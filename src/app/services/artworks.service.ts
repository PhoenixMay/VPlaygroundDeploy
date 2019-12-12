import { catchError } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { artwork } from '../models/artworkmodel';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {Member} from '../models/members'


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ArtworksService {

  private serverUrl = environment.serverBaseURL;

  constructor(private http: HttpClient) { }
  public getAuthor(id:string):Observable<Member>{
    const auth$ = this.http.get<Member>(`${this.serverUrl}/artworks/auth/${id}`);
    return auth$;
  }
  public list(): Observable<Array<artwork>> {

    const artworks$ = this.http.get<artwork[]>(`${this.serverUrl}/artworks/list`);

    return artworks$;
  }
  public get(id:string): Observable<Array<artwork>> {

    const artworks$ = this.http.get<artwork[]>(`${this.serverUrl}/artworks/list/${id}`);
    console.log(`${this.serverUrl}/artworks/list/${id}`);
    return artworks$;
  }
  public getAuthArtwork(id:string):Observable<Array<artwork>>{
    const artworks$ = this.http.get<artwork[]>(`${this.serverUrl}/artworks/byauth/${id}`);
    return artworks$;
  }
  public getone(id:string): Observable<artwork> {

    const artworks$ = this.http.get<artwork>(`${this.serverUrl}/artworks/list/${id}`);
    console.log(`${this.serverUrl}/artworks/list/${id}`);
    return artworks$;
  }
  public update_artwork(newArtwork: artwork){
    const url=`${this.serverUrl}/artworks/list/${newArtwork.id}`;
    return this.http.put<any>(url,newArtwork);
  }
  public publishArtwork(newArtwork: artwork): Observable<any> {
    const url = `${this.serverUrl}/artworks/new`;
    return this.http.post<any>(url, newArtwork)
    .pipe(
      catchError(this.handleError<artwork>(`publish artwork`))
    );
  }
  public deleteartwork(artwork:artwork):Observable<Array<artwork>>{
    const url = `${this.serverUrl}/artworks/list/${artwork.id}`;
    return this.http.post<Array<artwork>>(url,artwork);
  }

        /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
