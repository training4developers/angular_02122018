import { environment} from '../../../environments/environment';


export abstract class BaseRestService {

  protected constructor(
    private baseUrl: string,
    private resourceName: string,
    private authorizationToken: string = '',
  ) { }

  protected collectionUrl() {
    return `${this.baseUrl}/${this.resourceName}`;
  }

  protected elementUrl(id: string | number) {
    return `${this.baseUrl}/${this.resourceName}/${encodeURIComponent(id.toString())}`;
  }

  protected options() {

    let headers = {
      'Content-Type': 'application/json',
      'Authorization': this.authorizationToken,
    };

    if (this.authorizationToken) {
      headers = {
        ...headers,
        'Authorization': this.authorizationToken,
      };
    }

    return { headers };
  }
}
