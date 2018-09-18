/** Форматирует номер телефона
 * @param {string} phone телефон
*/
function formatPhone( phone ) {
    if( typeof phone !== 'string' ) {
        throw new TypeError(` [formatPhone] got ${typeof phone} instead string `);
    }
    phone = phone
        .replace( /[^\d\s()-+]/g, '' )
        .replace( /^\+?7/, '8' );
    if (phone === '' || phone === '+' || phone[0] !== '8') return phone;
    const parsed = phone.match( /(\d)\D*(\d{1,3})?\D*(\d{1,3})?\D*(\d{1,2})?\D*(\d{1,2})?/);
    let out = '';
    if (parsed[1]) out += parsed[1];
    if (parsed[2]) {
        if (parsed[2].length === 3) {
            if (parsed[0].slice(-1) === ')') out += ' (' + parsed[2].slice(0, 2);
            else out += ' (' + parsed[2] + ') ';
        }
        else out += ' (' + parsed[2];
    }
    if (parsed[3]) out += parsed[3];
    if (parsed[4]) out += '-' + parsed[4];
    if (parsed[5]) out += '-' + parsed[5];
    return out;
}

export { formatPhone };