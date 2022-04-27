enum Gender{
    Nam = 'Nam',
    Nu = 'Nu',
    other = 'other'
}
export interface iStaff{
    name : string;
    gender : string;
    birth : string;
    email : string;
    phone? : number;
}
export class Staff{
    name : string;
    gender : string;
    birth : string;
    email : string;
    phone? : any;
    constructor(name: string, birth: string , email: string, phone? : any) {
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
        this.gender = Gender.other;
    }
}