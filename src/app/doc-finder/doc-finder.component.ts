import {BrowserModule} from '@angular/platform-browser'
import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { FormControl, Validators} from '@angular/forms';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';  // for flatMap operator
import 'rxjs/add/operator/toPromise';

import { DocFinderService } from './docfinder.service';
import { ZipToLocationService} from '../services/shared/ZipOps/zip-to-location.service'

import { ProviderSearchResult } from './providerSearchResult';
import { ZipToLocation} from '../services/shared/ZipOps/ZipToLocationResult'

const POSTAL_CODE_REGEX = /^[0-9]{5}$/;

@Component({
  selector: 'app-doc-finder',
  templateUrl: './doc-finder.component.html',
  styleUrls: ['./doc-finder.component.css']
})
export class DocFinderComponent {
  ngOnInit() {}

  private providerResults: ProviderSearchResult;
  private locationData: ZipToLocation;


  constructor(private docFinderService:DocFinderService,
              private locationService:ZipToLocationService) {
  }

  postalCodeFomeControl = new FormControl ('', [
    Validators.required,
    Validators.pattern(POSTAL_CODE_REGEX)]);

  submitted = false;

  onSubmit(postalCode:string) {


    // Chained observables
      this.locationService.getLocationByPostalCode(postalCode)
      .then (locationDataResult => {
        this.locationData = locationDataResult;
        this.showSelectedProviders(
          locationDataResult.lat,
          locationDataResult.lng)
          .then (results  => {
            this.providerResults = results })
          });


    this.submitted = true;
  }

  private showSelectedProviders(lat, lng) : Promise<ProviderSearchResult>
  {
    return this.docFinderService.getProviders (
      lat,
      lng,
      '50',
      '10',
      '10');
  }
}

/*
lat : string,
long : string,
skip : string,
limit: string
)

var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;

Target zip code
55440-1459

user_key=6fcb8dde8af5bf38e0508f66046a35f8

Lat Long
(44.980000, -93.26)

44.980000, -93.26,50

CORS resolution
add to end of chrome target --disable-web-security --user-data-dir

*/
