import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {

  constructor(@Inject(DOCUMENT) private dom: Document) { }

  insertStructuredData(data: any): void {
    const script = this.dom.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.dom.head.appendChild(script);
  }

  createOrganizationStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "ArPI Security",
      "alternateName": "ArPIHomeSecurity",
      "url": "https://www.arpi-security.info",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.arpi-security.info/assets/icon-256.webp",
        "width": 256,
        "height": 256
      },
      "description": "ArPI is an open-source Raspberry Pi based home security system that allows you to replace your old alarm system mainboard and reuse existing sensors, keypads, and sirens.",
      "foundingDate": "2019",
      "founder": {
        "@type": "Person",
        "name": "Gábor Kovács"
      },
      "sameAs": [
        "https://github.com/ArPIHomeSecurity",
        "https://arpi-security.slack.com",
        "https://www.instructables.com/ArPI-Home-Security-System/",
        "https://www.hackster.io/gkovacs81/arpi-home-security-system-a18e57"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "url": "https://www.arpi-security.info/#contact"
      }
    };
    
    return structuredData;
  }

  createSoftwareApplicationStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "ArPI Home Security System",
      "alternateName": "ArPI",
      "description": "Open-source Raspberry Pi based home security system with web interface, mobile app, and DIY installation support.",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Linux, Raspberry Pi OS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "downloadUrl": "https://github.com/ArPIHomeSecurity/arpi_management/releases",
      "author": {
        "@type": "Organization",
        "name": "ArPIHomeSecurity"
      },
      "programmingLanguage": "Python",
      "releaseNotes": "https://github.com/ArPIHomeSecurity/arpi_management/releases",
      "softwareVersion": "1.0.0",
      "datePublished": "2019-01-01",
      "dateModified": "2025-01-01",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.5",
        "ratingCount": "127"
      }
    };
    
    return structuredData;
  }

  createWebsiteStructuredData() {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ArPI Security",
      "alternateName": "ArPI Home Security System",
      "url": "https://www.arpi-security.info",
      "description": "Official website for ArPI - an open-source Raspberry Pi based home security system",
      "publisher": {
        "@type": "Organization",
        "name": "ArPIHomeSecurity"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.arpi-security.info/?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    };
    
    return structuredData;
  }
}
