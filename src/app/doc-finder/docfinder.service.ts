import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { ProviderSearchResult } from './providerSearchResult';

@Injectable()
export class DocFinderService {

    // private searchResults: ProviderSearchResult;

    constructor(private http:Http,
        @Inject('DOCFINDER_URL') private serviceUrl: string,
        @Inject('DOCFINDER_USER_KEY') private serviceKey: string) {}

    async getProviders (
        lat : string,
        long : string,
        searchRadius : string,
        skip : string,
        limit: string
      ) : Promise<ProviderSearchResult>
    {
      try {

      var serviceURI = this.serviceUrl;

      serviceURI += '/2016-03-01/doctors?';
      serviceURI += 'location=' + lat + ',' + long + ',' + searchRadius;
      serviceURI += '&skip=' + skip;
      serviceURI += '&limit=' + limit;
      serviceURI += '&user_key=' + this.serviceKey;

      let response = await this.http.get(serviceURI)
      .toPromise();
       return response.json() as ProviderSearchResult;
    }
    catch (error)
    {
      await this.handleError(error);
    }
  };

  private handleError(error) {
    console.log(error);
  }

}
