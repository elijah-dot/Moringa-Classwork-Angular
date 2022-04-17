import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {
  name:string = "interpolation component";
  stationary =["books","pencil","rubber","marker pen"]
  person = {pname:"elijah",age:"21",sta : this.stationary[0]}
  isrich = true


  constructor() { 
    setTimeout(() =>{
      this.name = "try this"
      // console.log("this will run")
    },7000)
  }

  numberOfCars = ()=>{
    return this.stationary.length
  }

  ngOnInit(): void {
  }

}
