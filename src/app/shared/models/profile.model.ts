export class ProfileModel {
    firstName: string;
    lastName: string;
    mothersLastName: string;
    birthDate: Date;
    sex: string;
    date: Date;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.mothersLastName = '';
        this.birthDate = null;
        this.sex = '';
        this.date = null;
    }
}
