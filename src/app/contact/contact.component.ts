import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;
  email = "Z2tvdmFjczgxQGdtYWlsLmNvbQ==";

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.email  = atob(this.email);
  }

  ngOnInit() {

  }
}
