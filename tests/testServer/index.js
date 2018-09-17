import { formatPhone } from '../../src/formatPhone.js';

window.handle = e => {
    console.log(e);
    e.target.value = formatPhone(e.target.value);
}