import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { PokiService } from 'src/app/Services/poki.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultElevation = 2;
  raisedElevation = 8;
  
  public pokis:any=[];
  public errorMsg:any;
  pokemons=[];

  pageIndex:number = 0;
  pageSize:number = 10;
  lowValue:number = 0;
  highValue:number = 20;   

  constructor(private pokiService: PokiService) { }

  ngOnInit(){
    this.pokiService.getPokis()
    .subscribe((response:any)=>{
     //console.log(response)
      response.results.forEach(result=>{
        this.pokiService.getMoreData(result.name)
        .subscribe((UniqueResponse:any)=>{
          this.pokemons.push(UniqueResponse);
          //console.log(this.pokemons);
        })
      })

    });
  }

    

getPaginatorData(event){
   console.log(event);
   if(event.pageIndex === this.pageIndex + 1){
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue =  this.highValue + this.pageSize;
     }
  else if(event.pageIndex === this.pageIndex - 1){
     this.lowValue = this.lowValue - this.pageSize;
     this.highValue =  this.highValue - this.pageSize;
    }   
     this.pageIndex = event.pageIndex;
}

  
}
