import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Assets, MhwInterface} from "../../common/mhw-interface";

@Injectable({
  providedIn: 'root'
})
export class MhwService {

  private readonly URL = 'https://mhw-db.com/weapons?q={"id":{"$gte":1,"$lte":20}}'
  private http = inject(HttpClient);
  getWeapons(): Observable<MhwInterface[]>{
    return this.http.get<MhwInterface[]>(this.URL)
  }
  getAssets(): Observable<Assets>{
    return this.http.get<Assets>(this.URL)
  }

}
