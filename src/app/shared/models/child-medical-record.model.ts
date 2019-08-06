export class ChildMedicalRecordModel {
    firstName: string;
    lastName: string;
    mothersLastName: string;
    age: string;
    sex: string;
    address: string;
    date: Date;
    description: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.mothersLastName = '';
        this.age = '';
        this.sex = '';
        this.address = '';
        this.date = null;
        this.description = '';
    }
}
