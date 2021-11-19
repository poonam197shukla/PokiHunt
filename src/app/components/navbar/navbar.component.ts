import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from 'src/assets/data.json';

// interface DATAJSON{
//     id: Number;
//     name: String;
//     username: String;
//     email: String;
// } 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  datas: any = data;

  constructor(private route:Router) { }

  ngOnInit() {
  }

  addPokemon(){
    this.route.navigateByUrl("/addPokemon");
  }

}
