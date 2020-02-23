export class DonationsModel {
    $key: string;
    date: Date;
    amount: string;
    description: string;
    month: string;
    type: string;

    constructor() {
        this.date = null;
        this.amount = '';
        this.description = '';
        this.month = '';
        this.type = 'donation';
    }
}
