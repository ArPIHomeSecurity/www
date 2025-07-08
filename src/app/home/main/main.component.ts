import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';

import { Meta } from '@angular/platform-browser';
import { StructuredDataService } from '../../shared/structured-data.service';
import { isPlatformServer } from '@angular/common';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private structuredDataService: StructuredDataService,
  ) { }

  ngOnInit() {
    // add meta tags for SEO only once on the server side
    if (isPlatformServer(this.platformId)) {
      // Add structured data for better SEO and sitelinks
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createOrganizationStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createSoftwareApplicationStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createWebsiteStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createSiteNavigationElementStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createBreadcrumbListStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createFAQPageStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createItemListStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createTechArticleStructuredData()
      );
      this.structuredDataService.insertStructuredData(
        this.structuredDataService.createHowToStructuredData()
      );
    }
  }
}
