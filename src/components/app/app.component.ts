import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'MyApp';

  show:boolean;

  json={
    "PID":123,
    "SID":123,
  }

  constructor(){
    this.show=false;
  }

  ngOnInit(): void {
   console.log("App component loaded");
    
  }

  public doSomething(){
    this.show=!this.show;
  }
}
