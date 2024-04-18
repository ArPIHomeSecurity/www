import { Component, OnInit } from '@angular/core';
import { faChevronDown, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Image, PlainGalleryStrategy, LineLayout, ButtonsConfig, ButtonsStrategy, PlainLibConfig, ModalGalleryService, ModalGalleryRef, ModalLibConfig, DescriptionStrategy } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-versions',
  templateUrl: './versions.component.html',
  styleUrls: ['./versions.component.scss']
})
export class VersionsComponent implements OnInit {

  images_0_8: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V0.8/arpi_01.webp'
    }),
    new Image(1, {
      img: 'assets/ArPI_V0.8/arpi_02.webp'
    }),
    new Image(2, {
      img: 'assets/ArPI_V0.8/arpi_03.webp'
    })
  ];
  images_0_9: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V0.9/arpi_01.webp'
    }),
    new Image(1, {
      img: 'assets/ArPI_V0.9/arpi_02.webp'
    })
  ];

  images_2_0: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V2.0/arpi_01.webp'
    }),
    new Image(1, {
      img: 'assets/ArPI_V2.0/arpi_02.webp'
    }),
    new Image(2, {
      img: 'assets/ArPI_V2.0/arpi_03.webp'
    })
  ];

  images_case_2_0: Image[] = [
    new Image(0, {
      img: 'assets/ArPI_V2.0/arpi_case_01.webp'
    }),
    new Image(1, {
      img: 'assets/ArPI_V2.0/arpi_case_02.webp'
    }),
    new Image(2, {
      img: 'assets/ArPI_V2.0/arpi_case_03.webp'
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
  faDownload = faDownload

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
