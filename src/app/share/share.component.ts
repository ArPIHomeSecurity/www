import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
  standalone: false,
})
export class ShareComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ShareComponent>) {}

  ngOnInit(): void {}
}
