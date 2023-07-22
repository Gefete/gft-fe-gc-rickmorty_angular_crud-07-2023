import { Component } from '@angular/core';
import { Character } from 'src/app/model/character';
import { RickmortyService } from 'src/app/rickmorty.service';

@Component({
  selector: 'app-form-create-character',
  templateUrl: './form-create-character.component.html',
  styleUrls: ['./form-create-character.component.css']
})
export class FormCreateCharacterComponent {
  
  id! : string;
  name! : string;
  status! : string;
  species! : string;
  gender! : string;
  origin! : string;
  image! : string;

  constructor(private rickservice : RickmortyService){}

  createNewChar(){
    let character : Character ={
      id:this.id,
      name:this.name,
      status:this.status,
      species:this.species,
      gender:this.gender, 
      origin:this.origin,
      image:this.image
    }
    this.rickservice.create(character)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error)
        }
      );
  }
}
