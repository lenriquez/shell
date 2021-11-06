import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { Link } from '../dtos/Links';

@Injectable()
export class ServerLinkHelper {
  constructor(private http: HttpClient) {}

  public callFromLink<T>(link: Link, body?: any): Observable<T> {
    const url = this.handleLink(link.href);
    return this.http.request<T>(link.method, url, { body: body });
  }

  public handleLink(url: string): string {
    const baseUrl = environment.apiUrlBase;
    return url.substr(url.indexOf(baseUrl) + baseUrl.length);
  }

  public getLinkForMethod(serverObject: any, method: string): string {
    if (!serverObject || !serverObject.links) {
      return '';
    }

    const link = serverObject.links.find((l: Link) => l.method === method);
    return !!link ? link.href : null;
  }

  public getLinkObjectForMethod(serverObject: any, method: string): Link | null {
    if (!serverObject || !serverObject.links) {
      return null;
    }

    return serverObject.links.find((l: Link) => l.method === method);
  }

  public getLinkForRel(serverObject: any, rel: string): string {
    if (!serverObject || !serverObject.links) {
      return '';
    }

    const link = serverObject.links.find((l: Link) => l.rel === rel);
    return !!link ? link.href : null;
  }

  public getLinkObjectForRel(serverObject: any, rel: string): Link | null {
    if (!serverObject || !serverObject.links) {
      return null;
    }

    return serverObject.links.find((l :Link) => l.rel === rel);
  }
}
