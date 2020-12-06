// import { NeighborhoodService } from 'src/app/neighborhood-service/neighborhood.service';
// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-add-edit-neighborhood',
//   templateUrl: './add-edit-neighborhood.component.html',
//   styleUrls: ['./add-edit-neighborhood.component.css']
// })
// export class AddEditNeighborhoodComponent implements OnInit {

//   constructor(private neighborhoodService:NeighborhoodService) { } 

//   @Input() neighborhood:any;
//   NeighborhoodId:string;
//   NeighborhoodName:string;
//   NeighborhoodLocation:string;
//   NeighborhoodAdmin:string;
//   NeighborhoodDescription:string;

//   ngOnInit(): void {
//     this.NeighborhoodId=this.neighborhood.NeighborhoodId;
//     this.NeighborhoodName=this.neighborhood.NeighborhoodName;
//     this.NeighborhoodLocation=this.neighborhood.NeighborhoodLocation;
//     this.NeighborhoodAdmin=this.neighborhood.NeighborhoodAdmin;
//     this.NeighborhoodDescription=this.neighborhood.NeighborhoodDescription;
    
//   }

//   addNeighborhood(){
//     var val = {NeighborhoodId:this.NeighborhoodId, NeighborhoodName:this.NeighborhoodName, NeighborhoodLocation:this.NeighborhoodLocation, NeighborhoodAdmin:this.NeighborhoodAdmin, NeighborhoodDescription:this.NeighborhoodDescription,
//     };
//     this.neighborhoodService.addNeighborhood(val).subscribe(res=>{
//       alert(res.toString());
//     });
//   }

//   updateNeighborhood(){
//     var val = {NeighborhoodId:this.NeighborhoodId, NeighborhoodName:this.NeighborhoodName, NeighborhoodLocation:this.NeighborhoodLocation, NeighborhoodAdmin:this.NeighborhoodAdmin, NeighborhoodDescription:this.NeighborhoodDescription,
//     };
//     this.neighborhoodService.updateNeighborhood(val).subscribe(res=>{
//       alert(res.toString());
//     });
//   }

// }
