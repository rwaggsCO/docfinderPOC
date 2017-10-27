import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import {ZipToLocation} from './ZipToLocationResult'

@Injectable()
export class ZipToLocationService {

  constructor(private http:Http,
    @Inject('ZIP_OPS_URL') private serviceUrl: string,
    @Inject('ZIP_OPS_API_KEY') private serviceKey: string,) {}

      async getLocationByPostalCode(postalCode:string) :
      Promise<ZipToLocation>
      {
        try
        {
          var serviceURI = this.serviceUrl + '/' + this.serviceKey;
          serviceURI += '/info.json/';
          serviceURI += postalCode;
          serviceURI += "/degrees";

          let response = await this.http.get(serviceURI)
          .toPromise();
          return response.json() as ZipToLocation;

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
