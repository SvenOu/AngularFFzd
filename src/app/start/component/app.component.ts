import {Component} from '@angular/core';
import {Translator} from 'angular-translator';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = '';
  constructor(private translator: Translator) {
    const promises = [];

    // this comes from default module (assets/i18n/.json)
    promises.push(translator.translate(['TITLE']).then((translations) => {
      this.title = translations[0];
    }));

    Promise.all(promises).then(() => {
      console.log(this.title);
    });
  }
}
