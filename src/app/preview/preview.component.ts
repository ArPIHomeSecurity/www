import { Component, OnInit } from '@angular/core';
import { Image, PlainGalleryStrategy, PlainGalleryConfig, LineLayout, ButtonsConfig, ButtonsStrategy } from '@ks89/angular-modal-gallery';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  images: Image[] = [
    new Image(0, {
      img: 'assets/ArPIV1.0/IMG_1215.JPG'
    }),
    new Image(1, {
      img: 'assets/ArPIV1.0/IMG_1213.JPG'
    }),
    new Image(2, {
      img: 'assets/ArPIV1.0/IMG_1214.JPG'
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

  constructor(
    translate: TranslateService
  ) { }

  ngOnInit() {

  }

}
