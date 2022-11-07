import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  // Variales
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }
  emojis: string[] = [ '😂' , '🐦', '🐳','🌮', '💚'];
  newEmoji: string = ''
  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]
  color = 'azul';
  widthImg = 40;
  box = {
    width: 100,
    height: 100,
    background: 'blue'
  };
  register = {
    name: 'Abisai',
    email: '',
    password: '',
  }

  // Funciones
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  handleAddEmoji() {
    this.emojis.push(this.newEmoji);
    this.newEmoji = '';
  }
  handleDeleteEmoji(index: number) {
    this.emojis.splice(index, 1);
  }
  handleOnRegister() {
    console.log(this.register);
  }
}
