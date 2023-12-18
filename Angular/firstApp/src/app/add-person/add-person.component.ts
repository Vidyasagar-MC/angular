import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'add-person',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent {

  public greeting:string= 'Welcome to Karnataka.One State Many Worlds...!!!'
                          
}
