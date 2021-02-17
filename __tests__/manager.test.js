const team = require('../lib/team');

describe('Manager class', () => {
    it('Manager named Steven should return Steven', () => {
        expect(new team.Manager('Steven', 2, 'steven@fakemail.com', 201).getName()).toBe('Steven');
    });

    it('Manager role should be Manager', () => {
        expect(new team.Manager('Steven', 2, 'steven@fakemail.com', 201).getRole()).toBe('Manager');
    });

    it('Manager ID 2 should return 2', () => {
        expect(new team.Manager('Steven', 2, 'steven@fakemail.com', 201).getId()).toBe(2);
    });

    it('Manager email steven@fakemail.com should return steven@fakemail.com', () => {
        expect(new team.Manager('Steven', 2, 'steven@fakemail.com', 201).getEmail()).toBe('steven@fakemail.com');
    });

    it('Manager office number 201 should return 201', () => {
        expect(new team.Manager('Steven', 2, 'steven@fakemail.com', 201).officeNum).toBe(201);
    });
});