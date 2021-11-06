import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LinkedCollection } from '../dtos/LinkedCollection';
import { ResourceParameterBase } from './query-parameters/resource-parameters-base';

export class ServiceBase<T> {
  constructor(protected http: HttpClient, protected baseUrl: string) { }

  getQueryString(parameters: ResourceParameterBase): string {
    const params = new URLSearchParams();
    for (const key in parameters) {
      // @ts-ignore
      if (parameters[key] == null || key === 'fieldUpdateMessageBus') {
        continue;
      }

      // @ts-ignore
      params.set(key, parameters[key]);
    }

    return params.toString();
  }

  get(
    parameters?: any,
    additionalUrl: string = ''
  ): Observable<LinkedCollection<T>> {
    const queryString = this.getQueryString(parameters);
    const url = `${this.baseUrl}${additionalUrl}?${queryString.toString()}`;
    return this.http.get<LinkedCollection<T>>(url);
  }

  getById(id: string, additionalUrl: string = ''): Observable<T> {
    const url = `${this.baseUrl}${additionalUrl}/${id}`;
    return this.http.get<T>(url);
  }

  getBody(parameters: any): any {
    const body: any = {};
    for (const property in parameters) {
      if (parameters.hasOwnProperty(property)) {
        body[property] = parameters[property];
      }
    }
    return body;
  }

  delete(id: string): Observable<T> {
    const url = this.baseUrl + '/' + id;
    return this.http.delete<T>(url);
  }

  post(parameters: any): Observable<T> {
    return this.http.post<T>(this.baseUrl, parameters);
  }

  put(id: string, parameters: any): Observable<T> {
    const url = this.baseUrl + '/' + id;
    return this.http.put<T>(url, parameters);
  }
}
