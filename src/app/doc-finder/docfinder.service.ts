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

/*

var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;

Target zip code
55440-1459

user_key=6fcb8dde8af5bf38e0508f66046a35f8

Lat Long
(44.980000, -93.26)

44.980000, -93.26,50

*/
