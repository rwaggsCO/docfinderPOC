import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatInputModule, MatButtonModule, MatCheckboxModule, MatMenuModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DocFinderComponent } from './doc-finder/doc-finder.component';
import { MenuComponent } from './menu/menu.component';

import { DocFinderService } from './doc-finder/docfinder.service';
import { ZipToLocationService } from './services/shared/ZipOps/zip-to-location.service';

import { CONST_ROUTING } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DocFinderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    CONST_ROUTING`
  ],
  providers: [
    { provide: 'DOCFINDER_URL', useValue: 'https://api.betterdoctor.com' },
    { provide: 'DOCFINDER_USER_KEY', useValue: 'place your key here' },
    { provide: 'ZIP_OPS_URL', useValue: 'https://www.zipcodeapi.com/rest' },
    { provide: 'ZIP_OPS_API_KEY', useValue: 'place your key here' },
    [DocFinderService],
    [ZipToLocationService]

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
