import { Component, signal } from '@angular/core';
import { Widgets } from "./features/widgets/widgets";

@Component({
  selector: 'app-root',
  imports: [Widgets],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('widget-poc');
}
