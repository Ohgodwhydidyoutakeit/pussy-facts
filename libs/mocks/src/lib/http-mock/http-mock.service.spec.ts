import { TestBed } from '@angular/core/testing';
import { HttpClientMock } from './http-mock.service';
import { HttpClient, HttpHandler } from "@angular/common/http";
import { MockProvider } from 'ng-mocks'

describe('MyComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: HttpClient, useClass: HttpClientMock },
                MockProvider(HttpHandler)
            ]
        });
    });

    it('should mock POST request', () => {
        const httpClient = TestBed.inject(HttpClient);
        const postData = { key: 'value' };

        httpClient.post('some-url', postData).subscribe(response => {
            expect(response).toEqual(postData); // Check if the response is the same as the input data
        });
    });
});