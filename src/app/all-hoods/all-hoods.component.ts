import { Component, OnInit } from '@angular/core';
import { Service } from '../service/service.service';

@Component({
  selector: 'app-all-hoods',
  templateUrl: './all-hoods.component.html',
  styleUrls: ['./all-hoods.component.css'],
  providers: [Service]
})
export class AllHoodsComponent implements OnInit {
  hoods = Hoods;

  constructor(public hoodservice: Service) { 
    hoodSearch(searchName){
      this.hoodservice.getHoods(searchName).then(
        (results) =>{
          this.hood=this.hoodservice.allHood
          console.log(this.hood);
        },
        (error) =>{
          console.log(error);
        }
      );
    }
  }
  getHoods = () =>{
    this.service.getAllHoods().subscribe(
      data => {
        this.hoods = data;
      },
      error =>{
        console.log(error)
      }
    )
  }

  
  ngOnInit(): void {
  }

}
