import { Component } from '@angular/core';

@Component({
  selector: 'app-t1-container',
  templateUrl: './t1-container.component.html',
  styleUrls: ['./t1-container.component.css']
})
export class T1ContainerComponent {
onClap() {

console.log("Printing:Two hands together forma a clap");
this.containerProp="this value comes from conatiner prop";
}
containerProp: string="Initial value";

}
