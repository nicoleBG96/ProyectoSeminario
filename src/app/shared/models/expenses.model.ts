export class ExpensesModel {
    $key: string;
    month: string;
    date: Date;
    amount: string;
    detail: string;

    constructor() {
        this.month = '';
        this.date = null;
        this.amount = '';
        this.detail = '';
    }
}
