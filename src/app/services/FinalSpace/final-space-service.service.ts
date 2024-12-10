import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FinalSpaceAPI} from "../../common/fsinterface";

@Injectable({
  providedIn: 'root'
})
export class FinalSpaceServiceService {
private readonly URL = 'https://finalspaceapi.com/api/v0/character/'
  private http = inject(HttpClient);
getCharacters(): Observable<FinalSpaceAPI[]>{
  return this.http.get<FinalSpaceAPI[]>(this.URL)
}

}
