import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ReCaptcha2Component } from 'ngx-captcha';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;

  // recaptcha site key
  siteKey = '6LeEc4UUAAAAAIRxla7U89i8M4FepVZnc4oxEb0Q';

  // reCaptcha result
  isHuman = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
      recaptcha: ['', Validators.required]
    });
  }

  invalidated(): void {
    this.isHuman = false;
  }

  validated(captchaResponse: string): void {
    this.isHuman = true;
  }

  submit(event) {
    event.target.submit();
    this.captchaElem.resetCaptcha();
  }
}
