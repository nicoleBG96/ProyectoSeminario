export class UserModel {
    $key: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isDisable: boolean;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.password = '';
        this.isDisable = null;
    }
}
