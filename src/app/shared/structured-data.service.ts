import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class StructuredDataService {

  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private navigationService: NavigationService
  ) { }

  insertStructuredData(data: any): void {
    const script = this.dom.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    this.dom.head.appendChild(script);
  }

  createOrganizationStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'ArPI Security',
      'alternateName': 'ArPIHomeSecurity',
      'url': 'https://www.arpi-security.info',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.arpi-security.info/assets/icon-256.webp',
        'width': 256,
        'height': 256
      },
      'description': 'ArPI is an open-source Raspberry Pi based home security system that allows you to replace your old alarm system mainboard and reuse existing sensors, keypads, and sirens.',
      'foundingDate': '2019',
      'founder': {
        '@type': 'Person',
        'name': 'Gábor Kovács'
      },
      'sameAs': [
        'https://github.com/ArPIHomeSecurity',
        'https://docs.arpi-security.info',
        'https://arpi-security.slack.com/',
        'https://www.tindie.com/products/gkovacs81/arpi-board-v20/',
        'https://www.instructables.com/ArPI-Home-Security-System/',
        'https://www.hackster.io/gkovacs81/arpi-home-security-system-a18e57'
      ],
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'Customer Support',
        'url': 'https://www.arpi-security.info/#contact'
      },
      'makesOffer': {
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Product',
          'name': 'ArPI Board v2.0',
          'description': 'ArPI Board v2.0 - Raspberry Pi expansion board for home security system',
          'url': 'https://www.tindie.com/products/gkovacs81/arpi-board-v20/'
        },
        'seller': {
          '@type': 'Organization',
          'name': 'ArPIHomeSecurity'
        },
        'availability': 'https://schema.org/InStock',
        'url': 'https://www.tindie.com/products/gkovacs81/arpi-board-v20/'
      },
      'knowsAbout': [
        'Home Security',
        'Raspberry Pi',
        'IoT',
        'Open Source Software',
        'DIY Electronics',
        'Home Automation'
      ],
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.arpi-security.info'
      }
    };

    return structuredData;
  }

  createSoftwareApplicationStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'ArPI Home Security System',
      'alternateName': 'ArPI',
      'description': 'Open-source Raspberry Pi based home security system with web interface, mobile app, and DIY installation support.',
      'applicationCategory': 'SecurityApplication',
      'operatingSystem': 'Linux, Raspberry Pi OS',
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'downloadUrl': 'https://github.com/ArPIHomeSecurity/arpi_management/releases',
      'author': {
        '@type': 'Organization',
        'name': 'ArPIHomeSecurity'
      },
      'programmingLanguage': 'Python',
      'releaseNotes': 'https://github.com/ArPIHomeSecurity/arpi_management/releases',
      'softwareVersion': '1.0.0',
      'datePublished': '2019-01-01',
      'dateModified': '2025-01-01',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.5',
        'ratingCount': '127'
      }
    };

    return structuredData;
  }

  createWebsiteStructuredData() {
    // const structuredData = {
    //   "@context": "https://schema.org",
    //   "@type": "WebSite",
    //   "name": "ArPI Security",
    //   "alternateName": "ArPI Home Security System",
    //   "url": "https://www.arpi-security.info",
    //   "description": "Official website for ArPI - an open-source Raspberry Pi based home security system",
    //   "publisher": {
    //     "@type": "Organization",
    //     "name": "ArPIHomeSecurity"
    //   },
    //   "potentialAction": {
    //     "@type": "SearchAction",
    //     "target": {
    //       "@type": "EntryPoint",
    //       "urlTemplate": "https://www.arpi-security.info/?q={search_term_string}"
    //     },
    //     "query-input": "required name=search_term_string"
    //   },
    //   "mainEntity": {
    //     "@type": "SoftwareApplication",
    //     "name": "ArPI Home Security System"
    //   }
    // };
    //
    // return structuredData;
  }

  createSiteNavigationElementStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      'name': 'ArPI Navigation',
      'url': 'https://www.arpi-security.info',
      'hasPart': [
        {
          '@type': 'SiteNavigationElement',
          'name': 'Demo',
          'description': 'View live demo of ArPI home security system',
          'url': 'https://demo.arpi-security.info'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'Features',
          'description': 'Explore ArPI features and capabilities',
          'url': 'https://www.arpi-security.info/#features'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'GitHub',
          'description': 'Source code and documentation',
          'url': 'https://github.com/ArPIHomeSecurity'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'Documentation',
          'description': 'Official ArPI documentation and guides',
          'url': 'https://docs.arpi-security.info'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'Community',
          'description': 'Join ArPI community on Slack',
          'url': 'https://arpi-security.slack.com/'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'Order',
          'description': 'Purchase ArPI hardware kits',
          'url': 'https://www.arpi-security.info/#order'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'ArPI Board',
          'description': 'Purchase ArPI Board v2.0 on Tindie',
          'url': 'https://www.tindie.com/products/gkovacs81/arpi-board-v20/'
        },
        {
          '@type': 'SiteNavigationElement',
          'name': 'Contact',
          'description': 'Get in touch with ArPI team',
          'url': 'https://www.arpi-security.info/#contact'
        }
      ]
    };

    return structuredData;
  }

  createBreadcrumbListStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.arpi-security.info'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Features',
          'item': 'https://www.arpi-security.info/#features'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Demo',
          'item': 'https://demo.arpi-security.info'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'Order',
          'item': 'https://www.arpi-security.info/#order'
        }
      ]
    };

    return structuredData;
  }

  createFAQPageStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is ArPI?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'ArPI is an open-source Raspberry Pi based home security system that allows you to replace your old alarm system mainboard and reuse existing sensors, keypads, and sirens.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I get started with ArPI?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can download the source code from GitHub, follow our documentation, or purchase a pre-configured kit. The system is designed for easy DIY installation.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is ArPI free to use?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, ArPI is completely open-source and free to use. You only need to purchase the hardware components like Raspberry Pi and sensors.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Where can I get support?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can get support through our GitHub repository, Slack community, or contact us directly through our website.'
          }
        }
      ]
    };

    return structuredData;
  }

  createItemListStructuredData() {
    const navigationItems = this.navigationService.getNavigationItemsByPriority();

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'ArPI Security Navigation',
      'description': 'Main navigation items for ArPI Home Security System',
      'numberOfItems': navigationItems.length,
      'itemListElement': navigationItems.map((item, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'name': item.label,
        'description': item.description,
        'url': item.url,
        'item': {
          '@type': item.external ? 'WebPage' : 'WebPageElement',
          'name': item.label,
          'url': item.url,
          'description': item.description
        }
      }))
    };

    return structuredData;
  }

  createTechArticleStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      'headline': 'ArPI - Open Source Raspberry Pi Home Security System',
      'description': 'Complete guide to ArPI home security system: features, installation, and usage of this open-source Raspberry Pi based security solution.',
      'author': {
        '@type': 'Organization',
        'name': 'ArPIHomeSecurity'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'ArPIHomeSecurity',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://www.arpi-security.info/assets/icon-256.webp'
        }
      },
      'datePublished': '2019-01-01',
      'dateModified': '2025-07-06',
      'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': 'https://www.arpi-security.info'
      },
      'image': {
        '@type': 'ImageObject',
        'url': 'https://www.arpi-security.info/assets/icon-256.webp',
        'width': 256,
        'height': 256
      },
      'articleSection': 'Technology',
      'keywords': ['Raspberry Pi', 'Home Security', 'Open Source', 'IoT', 'DIY'],
      'about': [
        {
          '@type': 'Thing',
          'name': 'Home Security Systems'
        },
        {
          '@type': 'Thing',
          'name': 'Raspberry Pi'
        },
        {
          '@type': 'Thing',
          'name': 'Open Source Software'
        }
      ]
    };

    return structuredData;
  }

  createHowToStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Install ArPI Home Security System',
      'description': 'Step-by-step guide to install and configure ArPI home security system on Raspberry Pi',
      'image': {
        '@type': 'ImageObject',
        'url': 'https://www.arpi-security.info/assets/demo.png'
      },
      'totalTime': 'PT2H',
      'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'USD',
        'value': '100'
      },
      'supply': [
        {
          '@type': 'HowToSupply',
          'name': 'Raspberry Pi 4'
        },
        {
          '@type': 'HowToSupply',
          'name': 'MicroSD Card'
        },
        {
          '@type': 'HowToSupply',
          'name': 'ArPI Board'
        }
      ],
      'tool': [
        {
          '@type': 'HowToTool',
          'name': 'Computer'
        },
        {
          '@type': 'HowToTool',
          'name': 'SSH Client'
        }
      ],
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Download ArPI Software',
          'text': 'Download the latest ArPI software from GitHub',
          'url': 'https://github.com/ArPIHomeSecurity'
        },
        {
          '@type': 'HowToStep',
          'name': 'Install on Raspberry Pi',
          'text': 'Flash the ArPI image to your Raspberry Pi SD card',
          'url': 'https://docs.arpi-security.info'
        },
        {
          '@type': 'HowToStep',
          'name': 'Configure System',
          'text': 'Access the web interface and configure your security zones and sensors',
          'url': 'https://docs.arpi-security.info'
        }
      ]
    };

    return structuredData;
  }
}
