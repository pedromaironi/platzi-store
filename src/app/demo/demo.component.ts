import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   constructor() {
//     // console.log("app component");
//   }
//   // power = 10;
//   // title = 'platzi-store';
//   // items = ['nicolas', 'julian', 'pedro'];

//   // addItem() {
//   //   this.items.push('new item');
//   // }

//   // deleteItem(index: number) {
//   //   this.items.splice(index, 1);
//   // }

// }
