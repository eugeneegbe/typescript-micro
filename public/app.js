import { Invoice } from './classes/Invoice.js';
// will hold our documents invoice/expense
let docs = [];
// Reference to the form 
const form = document.querySelector('.new-item-form');
// Reference to the form input elements
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (type.value === 'invoice') {
        // create a new invoice and add in the list of documents
        let invoice = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
        docs.push(invoice);
    }
    else {
        // create expense object here and add to document list
    }
});
