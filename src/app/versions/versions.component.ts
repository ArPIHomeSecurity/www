import { Component, OnInit } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Image, PlainGalleryStrategy, LineLayout, ButtonsConfig, ButtonsStrategy, PlainLibConfig, ModalGalleryService, ModalGalleryRef, ModalLibConfig, DescriptionStrategy } from '@ks89/angular-modal-gallery';

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

  libConfigPlainGalleryRowSpaceAround: PlainLibConfig = {
    plainGalleryConfig: {
      strategy: PlainGalleryStrategy.ROW,
      layout: new LineLayout(
        {width:'30%', height: 'auto'},
        {length: 3, wrap: true},
        'space-around'
      )
    }
  };

  buttonsConfig: ButtonsConfig = {
    visible: true,
    strategy: ButtonsStrategy.DEFAULT
  };

  faDown = faChevronDown

  constructor(
    private modalGalleryService: ModalGalleryService
  ) { }

  ngOnInit() {

  }

  onShow(id: number, index: number, images: Image[] = this.images_2_0): void {
    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
      libConfig: {
        slideConfig: {
          infinite: false,
          sidePreviews: {
            show: false
          }
        },
        dotsConfig: {
          visible: false
        },
        currentImageConfig: {
          loadingConfig: {
            enable: true
          },
          description: {
            strategy: DescriptionStrategy.ALWAYS_HIDDEN
          }
        }
      } as ModalLibConfig
    }) as ModalGalleryRef;
  }
}
