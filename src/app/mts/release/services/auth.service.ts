import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders({
    "Access-Control-Allow-Origin" : "",
    "Allow": "GET",
    "Content-type": "Application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }



  postUser( name:string,  role :string)
  {
    return this.http.post(`${this.apiBaseUrl}/`,{name,role},httpOptions).subscribe(data =>  {
      console.log(data);
    });

  }


  public doLogin(password:String):Observable<any>
  {
    return this.http.get<any>(`${this.apiBaseUrl}/api/auth1/login1/${password}`);
  }
  public getLogin(login: any): Observable<any> {
    return this.http.get<any>(`${this.apiBaseUrl}/api/auth/login`,login);
  }

  // public getLogin(Object: any): Observable<any> {
  //   let url = "/api/auth/login";
  //   return this.http.get<any>(this.apiBaseUrl+url ,Object);
  // }

}