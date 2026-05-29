import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidPlus, faSolidGear, faSolidXmark } from '@ng-icons/font-awesome/solid';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [NgIcon],
  viewProviders: [provideIcons({ faSolidPlus, faSolidGear, faSolidXmark })]
})
export class Header implements AfterViewInit {
  @ViewChild('widthInput')
  public widthInput!: ElementRef<HTMLInputElement>;

  @ViewChild('heightInput')
  public heightInput!: ElementRef<HTMLInputElement>;

  @ViewChild('xMarkCloser',{ read: ElementRef })
  public xMarkCloser!: ElementRef;

  public width: number = environment.width;
  public height: number = environment.height;

  public ngAfterViewInit(): void {
    this._focusInput();
  }

  public closeAndSaveSettings(): void {
    this.xMarkCloser.nativeElement.click();
  }

  private _focusInput(): void {
    const offcanvas = document.getElementById('offcanvasTop');
    offcanvas?.addEventListener('shown.bs.offcanvas', () => {
      this.widthInput.nativeElement.focus();
    });
  }

}
