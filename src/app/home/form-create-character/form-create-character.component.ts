import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { RickmortyService } from 'src/app/rickmorty.service';

@Component({
  selector: 'app-form-create-character',
  templateUrl: './form-create-character.component.html',
  styleUrls: ['./form-create-character.component.css']
})
export class FormCreateCharacterComponent implements OnInit{
  
  id! : string;
  name! : string;
  status! : string;
  species! : string;
  gender! : string;
  origin! : string;
  image! : string;

  characters : any | undefined ;

  constructor(private rickservice : RickmortyService){}
  ngOnInit(): void {
    if (this.characters==undefined) {
      // Llama al metodo que genera aleatorios
      /* this.rickservice.setRandomized(); */
      // Llama al metodo para recibir los datos de la API
      this.rickservice.getAll()
      .subscribe(result => {
        // imprime por consola datos recibidos
        console.warn(result);
        // guarda los datos en el array de este componente
        this.characters = result;
      });
    }
  }
  createNewChar(){
    // Crea el objeto para enviarlo al service
    let character : Character ={
      id:this.id,
      name:this.name,
      status:this.status,
      species:this.species,
      gender:this.gender, 
      origin:this.origin,
      image:this.image
    }
    // Si el Id es encontrado en el array obtenido del json lo modifica (utilizamos find metodo del array para buscar resultados)
    if(this.characters.find((result: { id: any; }) =>(result.id == character.id))){
      this.rickservice.update(character.id, character)
        .subscribe(
          response => {
            console.log(response);
            // Muestra el mensaje para hacer saber si ha realizado una actualización
            console.log("Actualizado");
          },
          error => {
            console.log(error)
          }
        );
    // Si el id no es encontrado crea el caracter
    }else{
      this.rickservice.create(character)
        .subscribe(
          response => {
            console.log(response);
            // Muestra el mensaje para hacer saber si ha realizado la creacion
            console.log("Creado");
          },
          error => {
            console.log(error)
          }
        );
    }
  }
}
