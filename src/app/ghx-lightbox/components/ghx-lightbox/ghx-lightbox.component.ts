import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { GhxLightboxService } from '../../services';

@Component({
  selector: 'ghx-lightbox',
  templateUrl: './ghx-lightbox.component.html',
  styleUrls: ['./ghx-lightbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GhxLightboxComponent implements OnInit, AfterContentInit {

  @Input() src: string;
  @Input() caption: string;
  @Input() captionPosition: 'top' | 'bottom' = 'top';
  @Input() showPrevNextButton: boolean = false;

  private captionHeight: string;

  @ViewChild('lightCaption', {static: true}) lightCaption: ElementRef;
  @ViewChild('lightBoxFigure', {static: true}) lightBoxFigure: ElementRef;
  @ViewChild('lightboxImage', {static: true}) lightboxImage: ElementRef;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private glService: GhxLightboxService,
    private render2: Renderer2
  ) { }

  @HostListener('window:resize')
  onWindowResize() {
    this.setImageHeight();
  }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    this.getCaptionHeight();
    this.setImageHeight();
  }

  closeLightBox() {
    this.glService.destroy();
  }

  getCaptionHeight() {
    setTimeout(() => {
      this.captionHeight = this.lightCaption.nativeElement.clientHeight;
    }, 10)
  }

  setImageHeight() {
    const totalHeight = window.innerHeight - 100;
    this.render2.setStyle(this.lightboxImage.nativeElement, 'max-height', `${totalHeight}px`);
  }


}
