import { inject, Injectable } from "@angular/core";
import { HttpClientMock } from '@pussy-facts/mocks'
import { LoginPayload } from "../domain/login-payload";


@Injectable({
    providedIn: 'root'
})
export class AuthDataService {

    #endpoints = {
        login: `someLoginUrl`
    }

    readonly #httpClient = inject(HttpClientMock)
    login(payload: LoginPayload) {
        return this.#httpClient.post(this.#endpoints.login,
            {
                login: payload.login,
                password: payload.password
            }
        )
    }
}