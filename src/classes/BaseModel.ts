export class BaseModel {
    public id: string;
    public created: Date;

    constructor(id: string, created: Date) {
        this.id = id;
        this.created = created;
    }
}