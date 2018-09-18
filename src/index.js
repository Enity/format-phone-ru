import { formatPhone } from './formatPhone.js';

window.handle = e => {
    e.target.value = formatPhone(e.target.value);
}