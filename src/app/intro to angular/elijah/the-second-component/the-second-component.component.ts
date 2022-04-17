import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'the-second-component',
  // templateUrl: './the-second-component.component.html',
  template :'<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ex nam similique, dignissimos accusamus laboriosam itaque, maxime magni consectetur corporis placeat consequatur repellat optio voluptatem quia officia rem minus inventore.</p>',
  styleUrls: ['./the-second-component.component.css']
})
export class TheSecondComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
