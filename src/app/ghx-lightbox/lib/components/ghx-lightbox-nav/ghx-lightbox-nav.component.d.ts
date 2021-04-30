import { OnInit } from '@angular/core';
import { GhxLightboxService } from '../../services';
export declare class GhxLightboxNavComponent implements OnInit {
    gls: GhxLightboxService;
    constructor(gls: GhxLightboxService);
    ngOnInit(): void;
    goToPrev(): void;
    goToNext(): void;
}
