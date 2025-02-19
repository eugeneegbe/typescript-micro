import {HasFormatter} from '../interfaces/HasFormatter.js'


export class Invoice implements HasFormatter{
    constructor(
        public client: string,
        public details: string,
        public amount: number
    ){}

    format(){
        return `${this.client} has received ${this.amount} for ${this.details}`;
    }
}