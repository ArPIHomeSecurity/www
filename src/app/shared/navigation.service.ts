import { Injectable } from '@angular/core';

export interface NavigationItem {
  label: string;
  url: string;
  description: string;
  icon?: string;
  external?: boolean;
  priority?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      url: 'https://www.arpi-security.info',
      description: 'ArPI Home Security System - Open-source Raspberry Pi based security solution',
      priority: 1.0
    },
    {
      label: 'Features',
      url: 'https://www.arpi-security.info/#features',
      description: 'Explore ArPI features and capabilities',
      priority: 0.9
    },
    {
      label: 'Demo',
      url: 'https://demo.arpi-security.info',
      description: 'View live demo of ArPI home security system',
      priority: 0.8
    },
    {
      label: 'GitHub',
      url: 'https://github.com/ArPIHomeSecurity',
      description: 'Source code and documentation',
      external: true,
      priority: 0.9
    },
    {
      label: 'Documentation',
      url: 'https://docs.arpi-security.info',
      description: 'Official ArPI documentation and guides',
      external: true,
      priority: 0.8
    },
    {
      label: 'Community',
      url: 'https://arpi-security.slack.com/',
      description: 'Join ArPI community on Slack',
      external: true,
      priority: 0.7
    },
    {
      label: 'Order',
      url: 'https://www.arpi-security.info/#order',
      description: 'Purchase ArPI hardware kits',
      priority: 0.6
    },
    {
      label: 'ArPI Board',
      url: 'https://www.tindie.com/products/gkovacs81/arpi-board-v20/',
      description: 'Purchase ArPI Board v2.0 on Tindie',
      external: true,
      priority: 0.6
    },
    {
      label: 'Contact',
      url: 'https://www.arpi-security.info/#contact',
      description: 'Get in touch with ArPI team',
      priority: 0.5
    }
  ];

  constructor() { }

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems;
  }

  getMainNavigationItems(): NavigationItem[] {
    return this.navigationItems.filter(item => !item.external);
  }

  getExternalNavigationItems(): NavigationItem[] {
    return this.navigationItems.filter(item => item.external);
  }

  getNavigationItemsByPriority(): NavigationItem[] {
    return this.navigationItems.sort((a, b) => (b.priority || 0) - (a.priority || 0));
  }

  getNavigationItemByUrl(url: string): NavigationItem | undefined {
    return this.navigationItems.find(item => item.url === url);
  }
}
