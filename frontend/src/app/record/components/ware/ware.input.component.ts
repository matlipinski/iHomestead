import {Component, Input} from '@angular/core';
import {Ware} from "../../interfaces/ware.type";

@Component({
    moduleId: module.id,
    selector: 'ware-input',
    templateUrl: 'ware.input.component.html',
    styleUrls: ['ware.input.component.css'],
})
export class WareInputComponent{

    @Input()
    ware:Ware;


}