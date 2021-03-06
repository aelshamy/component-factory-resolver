import { Component } from '@angular/core';
import { MyColorsService } from './my-colors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  availableColors: string[] = [
    'plum',
    'thistle',
    'floral',
    'lollipop',
    'teal',
    'carnation',
    'bubblegum',
    'ruby',
    'lawn',
    'honeydew',
    'mindaro',
    'pistachio',
    'yellow',
    'cream',
    'banana',
    'trombone'
  ];

  // displayColors: string[] = [];

  constructor(private colors: MyColorsService) {
    for (let i = 1; i <= 500; i++) {
      const item = this.availableColors[Math.floor(Math.random() * this.availableColors.length)];
      // this.displayColors.push(item);
      this.colors.addColor(item);
    }
  }
}
