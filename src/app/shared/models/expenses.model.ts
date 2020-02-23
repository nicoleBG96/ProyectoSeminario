export class ExpensesModel {
    $key: string;
    month: string;
    date: Date;
    amount: string;
    description: string;
    type: string;

    constructor() {
        this.month = '';
        this.date = null;
        this.amount = '';
        this.description = '';
        this.type = 'expense';
    }
}
