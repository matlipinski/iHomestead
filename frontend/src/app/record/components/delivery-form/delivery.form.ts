import {Component, OnInit} from '@angular/core';
import {WareService} from "../../service/WaresService";
import {Ware} from "../../interfaces/ware.type";


@Component({
    moduleId: module.id,
    selector: 'delivery-form',
    templateUrl: 'delivery.form.html',
    providers: [WareService]
})
export class DeliveryFormComponent implements OnInit{

    wareRows: Ware[][];
    submitted = false;

    ngOnInit(): void {
        let wares = this.wareService.geAllWareTypes();
        this.wareRows = this.chunk(wares, 2);
    }

    constructor(private wareService:WareService) {};

    chunk(arr, size) {
        var newArr = [];
        for (var i=0; i<arr.length; i+=size) {
            newArr.push(arr.slice(i, i+size));
        }
        return newArr;
    }

    onSubmit() { this.submitted = true; }

}