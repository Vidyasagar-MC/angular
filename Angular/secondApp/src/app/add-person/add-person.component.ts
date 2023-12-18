import { Component } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})

export class AddPersonComponent {

 public addPerson(pAadhar: string,pName:string, pAge:number, pAlive:boolean) {
  var person =new Person(pAadhar,pName,pAge)
  person.isAlive=pAlive;
  Person.AddPerson(person);
  this.status=`Person with name ${person.name} added successfully!!!`;
}  


  public handleClick(s:string){
     this.status =`you entered the state ${s}`;
     return `you entered the state ${s}`;
  }

 public  CalculateDogYears(age:number){
  return age/7;
 }
  public greeting:string= 'Welcome to Karnataka.One State Many Worlds...!!!'

  public state:string="Karnataka";
  public p:Person =new Person("HEBH37t3y8JBShj","Param",23);
  public status: string='';

}
