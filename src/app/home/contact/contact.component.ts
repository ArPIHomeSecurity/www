import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: false
})
export class ContactComponent implements OnInit {

  public contactForm: UntypedFormGroup = new UntypedFormGroup({});
  email = "Z2tvdmFjczgxQGdtYWlsLmNvbQ==";

  constructor() {
    this.email  = atob(this.email);
  }

  ngOnInit() {

  }
}
