import {Invoice} from './classes/Invoice.js';
import {HasFormatter} from './interfaces/HasFormatter';
import {Payment} from './classes/Payment.js';

// will hold our documents invoice/expense
let docs: HasFormatter[] = [];

// Reference to the form 
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Reference to the form input elements
const type = document.querySelector('#type') as HTMLInputElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(type.value === 'invoice'){
        // create a new invoice and add in the list of documents
        let invoice = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        docs.push(invoice)
    }else{
        let expense = new Payment(toFrom.value, details.value, amount.valueAsNumber);
        docs.push(expense)
    }
})

