import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-coursop-iframe',
  templateUrl: './coursop-iframe.component.html',
  styleUrls: ['./coursop-iframe.component.css']
})
export class CoursopIframeComponent implements OnInit {

  courseOpLink!: SafeResourceUrl;

  constructor(private domSanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.courseOpLink = this.domSanitizer.bypassSecurityTrustResourceUrl('http://localhost:8083/courseop/');
  }

}
