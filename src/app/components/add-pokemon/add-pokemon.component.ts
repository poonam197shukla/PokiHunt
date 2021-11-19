import { Component, OnInit } from '@angular/core';
import data from 'src/assets/data.json';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css']
})
export class AddPokemonComponent implements OnInit {
  datas: any = data;
  ok:any;

  categories=[]=["Power Puff", "Super Power", "Ultra Powerfull"];
  types=[]=["Grass", "Fire", "Water","Bug", "Others"];

  constructor() { }

  imageurl:boolean=true;
  uploadimage:boolean=false;
  value:any;

  ngOnInit() {
    
  }


  imageUrl(){
    this.uploadimage=false;
    this.imageurl=true
  }

  imageUpload(){
    this.uploadimage=true;
    this.imageurl=false;
  }


  add(form:any){
  // document.getElementById('success').click
  //  form.reset();
  }

  

}
