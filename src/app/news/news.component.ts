import { Component } from '@angular/core';

interface NewsItem {
  title: string; // translation id
  image: string;
  date: string;
  content: string; // translation id
  link?: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  standalone: false,
})
export class NewsComponent {
  newsList: NewsItem[] = [
    {
      title: 'arpi.news.01.title',
      image: 'assets/news/2025-10-08.webp',
      date: '2025-10-08',
      content: 'arpi.news.01.content',
    },
    {
      title: 'arpi.news.02.title',
      image: 'assets/news/2025-12-14.webp',
      date: '2025-12-14',
      content: 'arpi.news.02.content',
      link: 'https://www.tindie.com/products/gkovacs81/arpi-board-v30/',
    },
    {
      title: 'arpi.news.03.title',
      image: 'assets/news/2026-01-11.webp',
      date: '2026-01-11',
      content: 'arpi.news.03.content',
      link: 'https://github.com/ArPIHomeSecurity/arpi_server/releases/tag/2.1.0',
    },

    // {
    //   title: 'arpi.news.02.title',
    //   image: 'assets/news/news-2025-09-15.jpg',
    //   date: '2025-09-15',
    //   content: 'arpi.news.02.content',
    // },
    // Add more news items as needed
  ];

  expanded: boolean[] = this.newsList.map(() => false);

  expand(i: number, event: Event) {
    event.preventDefault();
    this.expanded[i] = true;
  }

  collapse(i: number, event: Event) {
    event.preventDefault();
    this.expanded[i] = false;
  }

  getShortText(text: string, length: number): string {
    if (!text) return '';
    return text.length > length ? text.slice(0, length) + '…' : text;
  }
}
