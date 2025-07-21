import { Component } from '@angular/core';
import { ButtonsStrategy, DescriptionStrategy, Image, LineLayout, ModalGalleryRef, ModalGalleryService, ModalLibConfig, PlainGalleryStrategy, PlainLibConfig } from '@ks89/angular-modal-gallery';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: false
})
export class BoardComponent {

  constructor(
    private modalGalleryService: ModalGalleryService
  ) {}

  features = [
    { id: 11, title: 'channels', text: 'input channels for sensors', properties: ['silent', 'sensitivity'] },
    { id: 12, title: 'outputs', text: 'output channels for actuators', properties: ['state', 'button'] },
    { id: 13, title: 'keypad', text: 'keypad for physical access', properties: ['disarm'] },
    { id: 14, title: 'gsm', text: 'gsm module for sms notifications and calls', properties: ['notifications', 'sms'] },
    { id: 15, title: 'ups', text: 'uninterruptible power supply', properties: [] },
    { id: 16, title: 'rtc', text: 'real-time clock', properties: [] },
  ];

  galleryConfig: PlainLibConfig = {
      plainGalleryConfig: {
        strategy: PlainGalleryStrategy.ROW,
        layout: new LineLayout(
          { width:'100%', height: 'auto' },
          { length: 1, wrap: true },
          ''
        )
      }
    };

  getImages(title: string) {
    return [new Image(0, { img: 'assets/arpi_board_' + title + '.png' })];
  }

  onShow(id: number, index: number, title: string): void {
    const images: Image[] = this.getImages(title);

    const dialogRef: ModalGalleryRef = this.modalGalleryService.open({
      id,
      images,
      currentImage: images[index],
      libConfig: {
        currentImageConfig: {
          description: {
            strategy: DescriptionStrategy.ALWAYS_HIDDEN
          }
        },
        previewConfig: {
          visible: false
        },
        dotsConfig: {
          visible: false
        },
        slideConfig: {
          infinite: false,
          sidePreviews: {
            show: false
          }
        },
        buttonsConfig: {
          visible: false,
          strategy: ButtonsStrategy.DEFAULT
        }
      } as ModalLibConfig
    }) as ModalGalleryRef;
  }
}
