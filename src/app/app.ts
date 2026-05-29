import { Component, signal } from '@angular/core';
import { Widgets } from "./features/widgets/widgets";
import { Header } from "./shared/components/header/header";
import { Footer } from "./shared/components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Widgets, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
}
