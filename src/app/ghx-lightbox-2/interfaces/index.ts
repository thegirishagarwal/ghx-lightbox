type CaptionPositionType = 'Top' | 'Bottom';

type ActionPositionType = 'top left' | 'top center' | 'top right' | 'bottom right' | 'bottom center' | 'bottom left';

export interface LightBoxConfig {
  actionPosition: ActionPositionType;

  showCaption: boolean;
  captionPosition: CaptionPositionType;

  showZoom: boolean;

  showFullScreen: boolean;
}


export interface ItemType {
  src: string | null;
  caption?: string | null;
}
