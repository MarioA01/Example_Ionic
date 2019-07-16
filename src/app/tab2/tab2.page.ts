import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  myArray : any = [
    {
      name: 'Joe',
      email: 'joe@example.com',
      age: 25,
      //color: 'success'
    },
    {
      name: 'Mario',
      email: 'yanchi@example.com',
      age: 22,
      //color: 'success'
    },
    {
      name: 'Clemente',
      email: 'cleme@example.com',
      age: 17,
      //color: 'tertiary'
    }
  ];

  constructor(private modal: ModalController) {
    let data = {
      name: 'Jhon',
      email: 'week@example.com',
      age: 45,
      //color: 'danger'
    };

    this.myArray.push(data);
  }

  calculateAgeColor(age: number){
    console.log('Age', age);
    if(age < 18)
      return 'danger';
    else if(age >=18 && age <= 30)
    return 'success';
    else if(age >30)
    return 'tertiary'
  }

  async presentModal(){
    const modal = await this.modal.create({
        component: ModalComponent
    });
    return await modal.present();
  }

}
