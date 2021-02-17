const team = require('../lib/team');

describe('Intern class', () => {
    it('Intern named Dylan should return Dylan', () => {
        expect(new team.Intern('Dylan', 4, 'dylan@fakemail.com', 'fakeUni').getName()).toBe('Dylan');
    });

    it('Intern role should be Intern', () => {
        expect(new team.Intern('Dylan', 4, 'dylan@fakemail.com', 'fakeUni').getRole()).toBe('Intern');
    });

    it('Intern ID 4 should return 4', () => {
        expect(new team.Intern('Dylan', 4, 'dylan@fakemail.com', 'fakeUni').getId()).toBe(4);
    });

    it('Intern email dylan@fakemail.com should return dylan@fakemail.com', () => {
        expect(new team.Intern('Dylan', 4, 'dylan@fakemail.com', 'fakeUni').getEmail()).toBe('dylan@fakemail.com');
    });

    it('Intern school fakeUni should return fakeUni', () => {
        expect(new team.Intern('Dylan', 4, 'dylan@fakemail.com', 'fakeUni').school).toBe('fakeUni');
    });
});