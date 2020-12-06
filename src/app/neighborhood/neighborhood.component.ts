import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NeighborhoodService } from '../neighborhood-service/neighborhood.service'

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent implements OnInit {
  neighborhoodList:any = [];


  constructor(
    private neighborhoodService: NeighborhoodService,
  ) { }

  ngOnInit(): void{
    this.refreshNeighborhoodList();
  }

  // refreshNeighborhoodList(){
  //   this.neighborhoodService.getNeighborhoodList().subscribe(data=>{
  //     this.neighborhoodList=data;
  //   })
  // }

}
