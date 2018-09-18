import { strictEqual as equal, throws } from 'assert';
import { formatPhone as fmt } from '../src/formatPhone';

describe('Тесты утилит', () => {
    describe('Форматер номеров телефона', () => {
        it('Должен пробрасывать ошибку, если передана не строка', () => {
            throws(() => fmt({}), /got object instead string/);
        });
    
        it('Должен удалять все лишние символы', () => {
            equal(fmt('8abc&#as'), '8');
            equal(fmt('asdsadad'), '');
        });

        it('Должен заменять 7 на восьмерку', () => {
            equal(fmt('7'), '8');
            equal(fmt('+7'), '8');
            equal(fmt('897'), '8 (97');
        });

        it('Не должен форматировать, если начало номера !== 8', () => {
            equal(fmt('51223'), '51223');
            equal(fmt('7999'), '8 (999) ');
        });

        it('Должен добавлять пробел и скобку после ввода второй цифры', () => {
            equal(fmt('8'), '8');
            equal(fmt('89'), '8 (9');
            equal(fmt('8 9'), '8 (9');
        });

        it('Должен закрывать скобку, добавлять еще один пробел', () => {
            equal(fmt('8 (99'), '8 (99');
            equal(fmt('8 (999'), '8 (999) ');
            equal(fmt('8 (999)'), '8 (99');
        });
        
        it('Должен добавлять первый дефис', () => {
            equal(fmt('8 (999) 245'), '8 (999) 245');
            equal(fmt('8 (999) 2457'), '8 (999) 245-7');
        });

        it('Должен добавлять второй дефис', () => {
            equal(fmt('8 (999) 245-512'), '8 (999) 245-51-2');
            equal(fmt('8 (999) 245-51-25'), '8 (999) 245-51-25');
        });

        it('Проверка копи пасты', () => {
            equal(fmt('+7 (812) 386-20-20'), '8 (812) 386-20-20');
            equal(fmt('+79992269423'), '8 (999) 226-94-23');
        });
    });
});