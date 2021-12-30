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
import { CaptionPositionType, LightBoxConfigInterface } from './interfaces';
import { GhxLightboxService } from './services';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ghx-lightbox',
  templateUrl: './ghx-lightbox.component.html',
  styleUrls: ['./styles/_ghx-lightbox.scss', './ghx-lightbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GhxLightboxComponent implements OnInit, AfterContentInit {

  @Input() src = '';
  @Input() caption = '';
  @Input() captionPosition: CaptionPositionType = 'bottom';
  @Input() showPrevNextButton = false;

  public configs: LightBoxConfigInterface = {};

  @ViewChild('lightboxImage', {static: true})
    lightboxImage!: ElementRef<HTMLElement>;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private glService: GhxLightboxService,
    private render2: Renderer2
  ) {
  }

  @HostListener('window:resize')
  onWindowResize() {
    this.setImageHeight();
  }

  ngOnInit(): void {
    this.configs = this.glService.defaultConfig;
  }

  ngAfterContentInit() {
    this.setImageHeight();
  }

  closeLightBox() {
    this.glService.destroy();
  }

  setImageHeight() {
    const totalHeight = window.innerHeight - 100;
    this.render2.setStyle(this.lightboxImage.nativeElement, 'max-height', `${totalHeight}px`);
  }


  downloadResource() {

    fetch(this.src, {
        headers: new Headers({
          Origin: location.origin
        }),
        mode: 'cors'
      })
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = window.URL.createObjectURL(blob);
        this.forceDownload(blobUrl);
      })
      .catch(e => console.error(e));
  }

  forceDownload(blob) {
    const a = document.createElement('a');
    a.download = this.caption || '';
    a.href = blob;
    // For Firefox https://stackoverflow.com/a/32226068
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  onDownlad(event) {
    if (!event) {
      return;
    }

    this.downloadResource();
  }

}
