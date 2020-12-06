// import { Component, OnInit } from '@angular/core';
// import { NeighborhoodService } from 'src/app/neighborhood-service/neighborhood.service'

// @Component({
//   selector: 'app-show-neighborhood',
//   templateUrl: './show-neighborhood.component.html',
//   styleUrls: ['./show-neighborhood.component.css']
// })
// export class ShowNeighborhoodComponent implements OnInit {
  
//   constructor(private neighborhoodService: NeighborhoodService) { }

//   NeighborhoodList:any = [];

//   ModalTitle:string;
//   ActiveAddEditNeighborhoodComp:boolean=false;
//   neighborhood:any;

//   ngOnInit(): void {
//     this.refreshNeighborhoodList();
//   }

//   addClick(){
//     this.neighborhood={
//       NeighborhoodId:0,
//       NeighborhoodName:"",
//       NeighborhoodLocation:"",
//       NeighborhoodAdmin:0,
//       NeighborhoodDescription:"",
//     }
//     this.ModalTitle="Add Neighborhood";
//     this.ActiveAddEditNeighborhoodComp=true;

//   }

//   editClick(item){
//     this.neighborhood=item;
//     this.ModalTitle="Edit Neighborhood"
//     this.ActiveAddEditNeighborhoodComp=true;
//   }

//   closeClick(){
//     this.ActiveAddEditNeighborhoodComp=false;
//     this.refreshNeighborhoodList();
//   }

//   refreshNeighborhoodList(){
//     this.neighborhoodService.getNeighborhoodList().subscribe(data=>{
//       this.NeighborhoodList=data;
//     })
//   }

// }
