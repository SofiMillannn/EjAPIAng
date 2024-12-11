import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ValorantAPI} from "../../common/valorant-interface";

@Injectable({
  providedIn: 'root'
})
export class ValorantService {

  private readonly URL = 'https://valorant-api.com/v1/agents'
  private http = inject(HttpClient);
  getAgents(): Observable<ValorantAPI>{
    return this.http.get<ValorantAPI>(this.URL)
  }
}
