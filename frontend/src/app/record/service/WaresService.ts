import { Injectable } from '@angular/core';
import {Ware} from "../interfaces/ware.type";

@Injectable()
export class WareService {

    geAllWareTypes(): Ware[] {
        return[
                { name: 'greenPepper', friendlyName: 'Papryka Zielona' },
                { name: 'redPepper', friendlyName: 'Papryka Czerwona' },
                { name: 'yellowPepper', friendlyName: 'Papryka Żółta' },
                { name: 'orangePepper', friendlyName: 'Papryka Pomarańczowa' },
                { name: 'aubergine', friendlyName: 'Bakłażan' },
                { name: 'yellowBean', friendlyName: 'Fasola Zielona' },
                { name: 'greanBean', friendlyName: 'Fasola Żółta' },
                { name: 'cabbage', friendlyName: 'Kapusta Pekińska' }
            ];
    }
}