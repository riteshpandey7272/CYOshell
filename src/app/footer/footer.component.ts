import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hostel-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  email = "thissaumya@gmail.com";
  userName = "Saumya Patel";
  
  constructor() { }

  ngOnInit(): void {
  }

}
