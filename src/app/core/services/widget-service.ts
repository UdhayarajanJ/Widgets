import { Injectable, signal } from '@angular/core';
import { IWidget } from '../interfaces/Iwidget';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class WidgetService {
  public widgets = signal<IWidget[]>([]);

  public get count(): number {
    return this.widgets().length;
  }

  public addWidget(): void {
    this.widgets.update(widgets => [
      ...widgets,
      {
        id: widgets.length == 0 ? 1 : widgets.length + 1,
        width: environment.width,
        height: environment.height,
      }
    ]);
  }

  public removeWidget(id: number): void {
    this.widgets.update(widgets =>
      widgets.filter(widget => widget.id !== id)
    );
  }
}
