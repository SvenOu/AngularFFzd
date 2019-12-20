import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor() {}
  ngAfterViewInit(): void {
    // 去掉加载信息
    const loadingEl = document.getElementById('initLoading');
    if(loadingEl){
      loadingEl.parentNode.removeChild(loadingEl);
    }
  }

  ngOnInit(): void {

  }
}
