import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public doLogin(flag:String):Observable<any>
  {
    return this.http.get<any>(`${this.apiBaseUrl}/api/auth/menue/${flag}`);
  }
}
