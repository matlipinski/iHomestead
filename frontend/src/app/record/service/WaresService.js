"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var WareService = (function () {
    function WareService() {
    }
    WareService.prototype.geAllWareTypes = function () {
        return [
            { name: 'greenPepper', friendlyName: 'Papryka Zielona' },
            { name: 'redPepper', friendlyName: 'Papryka Czerwona' },
            { name: 'yellowPepper', friendlyName: 'Papryka Żółta' },
            { name: 'orangePepper', friendlyName: 'Papryka Pomarańczowa' },
            { name: 'aubergine', friendlyName: 'Bakłażan' },
            { name: 'yellowBean', friendlyName: 'Fasola Zielona' },
            { name: 'greanBean', friendlyName: 'Fasola Żółta' },
            { name: 'cabbage', friendlyName: 'Kapusta Pekińska' }
        ];
    };
    WareService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], WareService);
    return WareService;
}());
exports.WareService = WareService;
//# sourceMappingURL=WaresService.js.map