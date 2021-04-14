import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrls: ['./redirect-component.component.css']
})
export class RedirectComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'http://localhost:8083/courseop/'
  }

}
