import { Component, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  news: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      this.news = data.value;
    });
  }
}
