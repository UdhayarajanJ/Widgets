import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { Title } from "@angular/platform-browser";
import * as bootstrap from 'bootstrap';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { faSolidGear, faSolidTrashCan, faSolidXmark } from "@ng-icons/font-awesome/solid";
import { WidgetService } from "../../core/services/widget-service";
import { IWidget } from "../../core/interfaces/Iwidget";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.html',
  styleUrl: './widgets.scss',
  imports: [NgIcon, FormsModule],
  viewProviders: [provideIcons({ faSolidGear, faSolidTrashCan, faSolidXmark })]
})

export class Widgets implements OnInit, AfterViewInit {
  private _selectedWidget!: IWidget;

  @ViewChild('widthInput')
  public widthInput!: ElementRef<HTMLInputElement>;

  @ViewChild('heightInput')
  public heightInput!: ElementRef<HTMLInputElement>;

  @ViewChild('xMarkCloser', { read: ElementRef })
  public xMarkCloser!: ElementRef;

  @ViewChildren('widgetElements')
  widgetElements!: QueryList<ElementRef>;


  public widgetService = inject(WidgetService);
  public width: number = 0;
  public height: number = 0;
  constructor(private titleService: Title) { }

  public ngOnInit(): void {
    this.titleService.setTitle('Widgets');
  }

  public ngAfterViewInit(): void {

  }

  public removeWidget(id: number): void {
    this.widgetService.removeWidget(id);
  }

  public openSettings(widget: IWidget): void {
    this._selectedWidget = widget;
    this.width = widget.width;
    this.height = widget.height;
    const offcanvas = document.getElementById('offcanvasRight');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvas!);
    offcanvas?.addEventListener('shown.bs.offcanvas', () => {
      this.widthInput.nativeElement.focus();
    });
    bsOffcanvas.show();
  }

  public closeAndSaveSettings(): void {
    this._selectedWidget.width = this.width;
    this._selectedWidget.height = this.height;
    this.xMarkCloser.nativeElement.click();
  }

  public saveWidgetSize(widget: IWidget, element: HTMLElement): void {
    widget.width = element.offsetWidth;
    widget.height = element.offsetHeight;
  }
}
