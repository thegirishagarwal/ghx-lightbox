import { OnInit } from '@angular/core';
import { GhxLightboxService } from '../../services';
export declare class GhxLightboxActionsComponent implements OnInit {
    private gls;
    constructor(gls: GhxLightboxService);
    ngOnInit(): void;
    onCloseLightBox(): void;
}
