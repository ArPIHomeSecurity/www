import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { OrderComponent } from './order.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let translate: TranslateService;


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    declarations: [OrderComponent],
    imports: [TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })],
    providers: [
        TranslateService,
        provideHttpClient(withFetch())
    ]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
