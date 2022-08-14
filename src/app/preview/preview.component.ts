import { Component, OnInit } from '@angular/core';
import { Image, PlainGalleryStrategy, PlainGalleryConfig, LineLayout, ButtonsConfig, ButtonsStrategy } from '@ks89/angular-modal-gallery';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  images_0_8: Image[] = [
    new Image(0, {
      img: 'assets/ArPIV0.8/IMG_1215.JPG'
    }),
    new Image(1, {
      img: 'assets/ArPIV0.8/IMG_1213.JPG'
    }),
    new Image(2, {
      img: 'assets/ArPIV0.8/IMG_1214.JPG'
    })
  ];
  images_0_9: Image[] = [
    new Image(0, {
      img: 'assets/ArPIV0.9/IMG_20220814_115448_376.jpg'
    }),
    new Image(1, {
      img: 'assets/ArPIV0.9/IMG_20220814_115529_488.jpg'
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
