import {Database} from "./database";
import {PathListEntry} from "./abstract-rest-service";

export class HobbyDatabase extends Database {

    public getEntityName() {
        return "hobby";
    }

    protected getSort() : any[] {
        return ['name'];
    }

    protected createPathListEntry(entry:PathListEntry, entity:any) {
        entry.name = entity.name;
        return super.createPathListEntry(entry, entity);
    }

}