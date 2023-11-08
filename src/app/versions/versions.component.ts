import { Component, OnInit } from '@angular/core';
import { Image, PlainGalleryStrategy, PlainGalleryConfig, LineLayout, ButtonsConfig, ButtonsStrategy } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {

  images_0_8: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V0.8/IMG_1215.JPG'
    }),
    new Image(1, {
      img: 'assets/ArPI_V0.8/IMG_1213.JPG'
    }),
    new Image(2, {
      img: 'assets/ArPI_V0.8/IMG_1214.JPG'
    })
  ];
  images_0_9: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V0.9/IMG_20220814_115448_376.jpg'
    }),
    new Image(1, {
      img: 'assets/ArPI_V0.9/IMG_20220814_115529_488.jpg'
    })
  ];

  images_2_0: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V2.0/IMG_20231107_135118_600.jpg'
    }),
    new Image(1, {
      img: 'assets/ArPI_V2.0/IMG_20231107_135201_384.jpg'
    }),
    new Image(2, {
      img: 'assets/ArPI_V2.0/IMG_20231107_135226_259.jpg'
    })
  ];

  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '25%', height: 'auto' }, {length: -1, wrap: true}, 'space-between')
  };

  buttonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };

  constructor() { }

  ngOnInit() {

  }

}
