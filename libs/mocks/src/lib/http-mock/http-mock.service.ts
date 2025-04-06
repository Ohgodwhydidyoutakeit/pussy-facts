
import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler } from "@angular/common/http"
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: "root"
})
export class HttpClientMock extends HttpClient {
    constructor(handler: HttpHandler) {
        super(handler);
    }

    override post<T>(url: string, body: T, options?: any): Observable<T> {
        return of(body);
    }

    override get<T>(url: string, options?: any): Observable<T> {
        return of({} as T);
    }
}