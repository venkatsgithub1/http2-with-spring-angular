import { Component, OnInit } from '@angular/core';
import { HelloService } from './services/hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private helloService: HelloService) {}
  ngOnInit(): void {
    this.helloService.getHello().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err, 'got error');
      }
    );
    this.helloService.getQuote().subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.error(err, 'got error');
      }
    );
  }
  title = 'angular-app';
}
