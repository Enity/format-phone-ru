import { strictEqual as equal, throws } from 'assert';
import { formatPhone } from '../src/formatPhone';

describe('Тесты утилит', () => {
    describe('Форматер номеров телефона', () => {
        it('Должен пробрасывать ошибку, если передана не строка', () => {
            throws(() => formatPhone({}), /got object instead string/);
        });
    
        it('Должен удалять все лишние символы', () => {
            equal(formatPhone('8abc&#as'), '8');
            equal(formatPhone('asdsadad'), '');
        });

        it('Должен заменять 7 на восьмерку', () => {
            equal(formatPhone('7'), '8');
            equal(formatPhone('+7'), '8');
            equal(formatPhone('897'), '8 (97');
        });

        it('Должен добавлять пробел и скобку после ввода второй цифры', () => {
            equal(formatPhone('8'), '8');
            equal(formatPhone('89'), '8 (9');
            equal(formatPhone('8 9'), '8 (9');
        });

        it('Должен закрывать скобку, добавлять еще один пробел', () => {
            equal(formatPhone('8 (999'), '8 (999');
            equal(formatPhone('8 (9995'), '8 (999) 5');
            equal(formatPhone('8 (999)5'), '8 (999) 5');
            equal(formatPhone('8 (999) 5'), '8 (999) 5');
        });
        /* describe('Сценарии ввода', () => {
            it('Идеальный', () => {
                equal(formatPhone('7'), '8');
                equal(formatPhone('79'), '8 (9');
                equal(formatPhone('7997'), '8 (997');
                equal(formatPhone('79975'), '8 (997) 5');
                equal(formatPhone('7997596'), '8 (997) 596');
                equal(formatPhone('799759644'), '8 (997) 596-44');
                equal(formatPhone('79975964496'), '8 (997) 596-44-96');
            });
        }); */
    });
});