import { Component, OnInit } from '@angular/core';
import {Translator} from 'angular-translator';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.styl']
})
export class MyCenterComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')];
      console.log(this.router);
      console.log(params.get('typeId'));
      console.log(params.get('tabId'));

    });
  }

}
