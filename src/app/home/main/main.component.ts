import { Component, OnInit } from '@angular/core';

import { Meta } from '@angular/platform-browser';
import { StructuredDataService } from '../../shared/structured-data.service';


@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    standalone: false
})
export class MainComponent implements OnInit {

  constructor(
    private meta: Meta,
    private structuredDataService: StructuredDataService
  ) { }

  ngOnInit() {
    // Enhanced meta description for SEO
    this.meta.addTag({
      name: "description",
      content: "ArPI is an open-source Raspberry Pi based home security system. Replace your old alarm system mainboard and reuse existing sensors, keypads, and sirens. Easy DIY installation with modern web interface, notifications, and remote access. Download for free!"
    });
    
    // Additional meta tags for better SEO
    this.meta.addTag({
      name: "keywords",
      content: "ArPI, Raspberry Pi, home security, alarm system, DIY security, open source, home automation, security system, IoT, smart home, sensors, keypad, siren"
    });

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
