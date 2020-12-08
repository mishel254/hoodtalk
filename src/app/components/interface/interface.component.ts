import { Component, OnInit } from '@angular/core';
import { HoodService } from 'src/app/services/hood.service';
import { hoods } from 'src/app/classes/hood'

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  objhood: any;
 constructor(
    private hoodService: HoodService,
  ) { }
hoods:hoods[];

  ngOnInit() {
    this.hoodService.gethood()
    .subscribe
    ((data:hoods[]) =>{
      this.hoods = data;
      
  })

  var newhood = new hoods();
   newhood.name = 'Kariobangi';
   newhood.location='Nairobi';
   newhood.description = 'locality';

   this.hoodService.post(newhood)
   .subscribe(
     data =>{
       this.objhood = data;
     }
   )
}
}