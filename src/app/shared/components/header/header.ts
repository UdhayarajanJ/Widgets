import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidPlus, faSolidGear } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [NgIcon],
  viewProviders: [provideIcons({ faSolidPlus, faSolidGear })]
})
export class Header {

}
