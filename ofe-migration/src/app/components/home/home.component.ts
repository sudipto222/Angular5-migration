import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowProduct = false;
  constructor() { }

  ngOnInit() {
  }


  showProducts() {
    this.isShowProduct = !this.isShowProduct;
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "256px";
  }

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
