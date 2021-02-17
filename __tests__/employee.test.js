const team = require('../lib/team');

describe('Employee class', () => {
    it('Employee named Bob should return Bob', () => {
        expect(new team.Employee('Bob').getName()).toBe('Bob');
    });

    it('Employee role should be Employee', () => {
        expect(new team.Employee('a').getRole()).toBe('Employee');
    });

    it('Employee ID 1 should return 1', () => {
        expect(new team.Employee('a', 1).getId()).toBe(1);
    });

    it('Employee email bob@fakemail.com should return bob@fakemail.com', () => {
        expect(new team.Employee('a', 1, 'bob@fakemail.com').getEmail()).toBe('bob@fakemail.com');
    });
});