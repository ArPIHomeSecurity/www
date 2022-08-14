import { Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: UntypedFormGroup;
  email = "Z2tvdmFjczgxQGdtYWlsLmNvbQ==";

  constructor(
    private formBuilder: UntypedFormBuilder
  ) {
    this.email  = atob(this.email);
  }

  ngOnInit() {

  }
}
