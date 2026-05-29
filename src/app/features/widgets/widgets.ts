import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-widgets',
  imports: [],
  templateUrl: './widgets.html',
  styleUrl: './widgets.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Widgets implements OnInit {

  constructor(private titleService: Title) { }

  public ngOnInit(): void {
    this.titleService.setTitle('Widgets');
  }

}
