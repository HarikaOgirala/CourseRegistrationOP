import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirect-component',
  templateUrl: './redirect-component.component.html',
  styleUrls: ['./redirect-component.component.css']
})
export class RedirectComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.location.href = 'http://ec2-3-136-11-200.us-east-2.compute.amazonaws.com:8000/courseop/'
  }

}
