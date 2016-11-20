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
var WaresService_1 = require("../../service/WaresService");
var DeliveryFormComponent = (function () {
    function DeliveryFormComponent(wareService) {
        this.wareService = wareService;
        this.submitted = false;
    }
    DeliveryFormComponent.prototype.ngOnInit = function () {
        var wares = this.wareService.geAllWareTypes();
        this.wareRows = this.chunk(wares, 2);
    };
    ;
    DeliveryFormComponent.prototype.chunk = function (arr, size) {
        var newArr = [];
        for (var i = 0; i < arr.length; i += size) {
            newArr.push(arr.slice(i, i + size));
        }
        return newArr;
    };
    DeliveryFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    DeliveryFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'delivery-form',
            templateUrl: 'delivery.form.html',
            providers: [WaresService_1.WareService]
        }), 
        __metadata('design:paramtypes', [WaresService_1.WareService])
    ], DeliveryFormComponent);
    return DeliveryFormComponent;
}());
exports.DeliveryFormComponent = DeliveryFormComponent;
//# sourceMappingURL=delivery.form.js.map