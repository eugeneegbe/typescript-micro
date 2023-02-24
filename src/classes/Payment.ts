import {HasFormatter} from '../interfaces/HasFormatter';

export class Payment implements HasFormatter{
    constructor(
        public client: string,
        public details: string,
        public amount: number
    ){}

    format(): string {
        return ``
    }
}