import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV_CONFIG, IEnvironmentConfig } from '../interfaces/ienvironment-config';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class TypicodeService {
  private baseUrl: string;
  constructor(@Inject(ENV_CONFIG) private config: IEnvironmentConfig, private http: HttpClient) {
    this.baseUrl = config.typicodeUrl.replace(/\/+$/, '');
  }

  private resourceUrl(resource: string) {
    return `${this.baseUrl}/${resource}`;
  }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.resourceUrl('users'));
  }
}
