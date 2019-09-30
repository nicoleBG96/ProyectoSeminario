export class ExpensesModel {
    $key: string;
    month: string;
    date: Date;
    amount: string;
    description: string;

    constructor() {
        this.month = '';
        this.date = null;
        this.amount = '';
        this.description = '';
    }
}
