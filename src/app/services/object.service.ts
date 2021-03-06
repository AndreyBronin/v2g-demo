import {Injectable, Injector} from '@angular/core';
import {RestService} from '@lagoshny/ngx-hal-client';
import {Observable} from 'rxjs';
import {MapObject} from './game.data';

@Injectable()
export class ObjectService extends RestService<MapObject> {

    constructor(injector: Injector) {
        super(MapObject, 'objects', injector);
    }

    public findByName(name: string): Observable<MapObject[]> {
        const options: any = {params: [{key: 'name', value: name}]};
        // @ts-ignore
        return this.search('findByName', options);
    }

    public findByMap(mapId: string): Observable<MapObject[]> {
        const options: any = {params: [{key: 'map', value: mapId}]};
        // @ts-ignore
        return this.searchSingle('findByBusinessName', options);
    }
}
