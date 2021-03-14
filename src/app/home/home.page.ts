import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  [x: string]: any;

  constructor(public _pickerCtrl:PickerController) {}

  ngOnInit() {}

  /**
   * Função para exibir os detalhes
   * do card na mesma página, através
   * de um recurso chamado Picker.
   */
  async mostrarPickerBasico() {
    const picker = await this._pickerCtrl.create({
      columns: [
        {
          name:'Livraria Universitária',
          options:[
            {text: 'Livro1: A Casa Torta', value: 'livro1'},
            {text: 'Livro2: Um Pressentimento Funesto', value: 'livro2'},
            {text: 'Livro3: Assassinato na Casa do Pastor', value: 'livro3'},
            {text: 'Idioma: Português', value: 'português'},
            {text: 'R$ 164,84', value: 'preço'}
          ]
        }
      ],
      buttons: [
        {
          text: 'Exibir',
          handler: (value) => {
            console.log('Exibindo:', 'Coleção Agatha Christie');
          }   
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (value) => {
            console.log('Cancelado', value);
          }
        }
      ]
    });
    await picker.present();
  }
}
