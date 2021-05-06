import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class BaseHttpClient extends HttpClient {

  constructor(protected _httpClient: HttpClient, protected _httpHandler: HttpHandler) {
    super(_httpHandler);
  }

  public getAndSubscribe<T>(url: string,  callback: (response: T) => void, headers?: HttpHeaders): void {
    super.get<T>(`${environment.apiUrl}/${url}`, { headers: this.buildRequestHeaders(headers)}).subscribe(response => callback(response));
  }

  private buildRequestHeaders(headers?: HttpHeaders): HttpHeaders {
    if(headers == null) {
      headers = new HttpHeaders();
    }

    headers.set("Accept", "application/json");
    headers.set("Content-Type", "application/json");

    return headers;
  }

  protected handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      console.error(`An error occured ${error.error.message}`);
    } else {
      console.error(`API return code ${error.status}, ` +
      `response was: ${error.error}`)
    }

    return throwError(`An API error occured`);
  }
}
