import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'arpi-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  
  subscription: any;
  fragment: string;

  constructor(
    private route: ActivatedRoute
  ) {
    
  }

  ngOnInit() {
    this.subscription = this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
  }

  ngAfterViewChecked(): void {
    try {
      if(this.fragment) {
        document.querySelector('#' + this.fragment).scrollIntoView({behavior: "smooth"});
        this.fragment = '';
      }
    } catch (e) { }
  }
  
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
