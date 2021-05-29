import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() bgcolorParameter: string = "Red";
  @Input() textParameter: string = "Create";
  @Output() btnClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onLocalClick(): void{
   // console.log('Clicked Buttom')
   this.btnClick.emit();
  }

}
