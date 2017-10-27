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
