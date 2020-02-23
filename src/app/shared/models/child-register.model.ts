export class ChildRegisterModel {
    $key: string;
    image: string;
    firstName: string;
    lastName: string;
    mothersLastName: string;
    numberOfIdentity: string;
    admissionDate: Date;
    birthDate: Date;
    sex: string;
    weight: string;
    size: string;
    municipality: string;
    district: string;
    zone: string;
    street: string;
    phone: string;
    nameOfTutor: string;
    degreeOfInstruction: string;
    activity: string;
    anotherReference: string;
    isDisable: boolean;

    constructor() {
        this.image = '';
        this.firstName = '';
        this.lastName = '';
        this.mothersLastName = '';
        this.numberOfIdentity = '';
        this.admissionDate = null;
        this.birthDate = null;
        this.sex = '';
        this.weight = '';
        this.size = '';
        this.municipality = '';
        this.district = '';
        this.zone = '';
        this.street = '';
        this.phone = '';
        this.nameOfTutor = '';
        this.degreeOfInstruction = '';
        this.activity = '';
        this.anotherReference = '';
        this.isDisable = false;
    }
}
