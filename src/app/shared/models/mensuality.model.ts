export class MensualityModel {
    $key: string;
    childKey: string;
    firstName: string;
    lastName: string;
    mothersLastName: string;
    date: Date;
    month: string;
    amount: string;
    type: string;

    constructor() {
        this.childKey = '';
        this.firstName = '';
        this.lastName = '';
        this.mothersLastName = '';
        this.date = null;
        this.month = '';
        this.amount = '';
        this.type = 'mensuality';
    }
}
