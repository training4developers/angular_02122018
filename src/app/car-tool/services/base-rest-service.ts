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

    let headers: any = {
      'Content-Type': 'application/json',
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
