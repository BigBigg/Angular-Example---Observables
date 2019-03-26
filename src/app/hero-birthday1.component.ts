import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-birthday',
  template: `
  <div>{{ phone | Phone }}</div>
  {{phone}}
  <p>The hero's birthday is {{ birthday | date }}</p>`
})
export class HeroBirthdayComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988
  phone="2523273501";
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/