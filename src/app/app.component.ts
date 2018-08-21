import { Component } from '@angular/core';
import { environment } from './../environments/environment';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {
    console.log(environment.production); // Logs false for default environment
  }

  title = 'app';
  environment = environment.envName;

  call() {
    this.appService.getData().subscribe(res => {
      console.log(res['data']);
    }, error => {});
  }
}
