import { InjectionToken } from '@angular/core';

export const GHX_LIGHTBOX_CONFIG = new InjectionToken('GHX_LIGHTBOX_CONFIG');

export type CaptionPositionType = 'top' | 'bottom';

type ActionPositionType = 'top left' | 'top center' | 'top right' | 'bottom right' | 'bottom center' | 'bottom left';

export interface LightBoxConfigInterface {
  actionPosition?: ActionPositionType;

  showCaption?: boolean;
  captionPosition?: CaptionPositionType;

  showZoom?: boolean;
  showFullScreen?: boolean;

  showDownload?: boolean;
}


export interface ItemType {
  src: string | null;
  caption?: string | null;
}


export class GhxLightboxConfig implements LightBoxConfigInterface {
  actionPosition?: ActionPositionType = 'top right';

  showCaption = true;
  captionPosition?: CaptionPositionType = 'bottom';

  showZoom = false;
  showFullScreen = false;

  showDownload = false;

  constructor(config: LightBoxConfigInterface = {}) {
    this.assign(config);
  }

  public assign(config: LightBoxConfigInterface = {}) {
    for (const key in config) {
      if (true) {
        this[key as keyof GhxLightboxConfig] = config[key as keyof LightBoxConfigInterface] as never;
      }
    }
  }
}
