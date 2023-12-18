import { Component, ContentChild } from '@angular/core';

@Component({
  selector: 'app-t3container',
  templateUrl: './t3container.component.html',
  styleUrls: ['./t3container.component.css']
})
export class T3containerComponent {
@ContentChild(T3containerComponent)child!: T3containerComponent;/*child!--indicated we no need to insitialize this chld at this time*/

ngAfterContentInit():void{
  console.log(this.child);
}
}

