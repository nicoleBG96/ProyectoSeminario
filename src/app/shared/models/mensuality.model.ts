export class MensualityModel {
    $key: string;
    childKey: string;
    firstName: string;
    lastName: string;
    mothersLastName: string;
    date: Date;
    monthToPay: string;
    amount: string;

    constructor() {
        this.childKey = '';
        this.firstName = '';
        this.lastName = '';
        this.mothersLastName = '';
        this.date = null;
        this.monthToPay = '';
        this.amount = '';
    }
}
