export class DonationsModel {
    $key: string;
    date: Date;
    amount: string;
    description: string;

    constructor() {
        this.date = null;
        this.amount = '';
        this.description = '';
    }
}
