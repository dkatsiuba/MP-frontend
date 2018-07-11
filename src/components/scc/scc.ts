import { Component } from '@angular/core';

/**
 * Generated class for the SccComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scc-selector',
  templateUrl: 'scc.html'
})
export class SccComponent {

  text: string;

  constructor() {
    console.log('Hello SccComponent Component');
    this.text = 'Hello World';
  }

}
