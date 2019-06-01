import {Injectable} from '@angular/core';
import {ExternalConfigurationHandlerInterface, ExternalConfiguration} from 'angular4-hal';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ExternalConfigurationService  implements ExternalConfigurationHandlerInterface   {

  constructor(private http: HttpClient) {
  }

  getProxyUri(): string {
    return environment.apiUrl; // 'http://localhost:8080/api/';
  }

  getRootUri(): string {
    return 'http://localhost:8080/api/';
  }

  getHttp(): HttpClient {
    return this.http;
  }

  getExternalConfiguration(): ExternalConfiguration {
    return null;
  }

  setExternalConfiguration(externalConfiguration: ExternalConfiguration) {}
  deserialize(): any {}
  serialize(): any {}
}
