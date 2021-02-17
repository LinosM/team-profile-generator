const team = require('../lib/team');

describe('Engineer class', () => {
    it('Engineer named Stacy should return Stacy', () => {
        expect(new team.Engineer('Stacy', 3, 'stacy@fakemail.com', 'nlstacy').getName()).toBe('Stacy');
    });

    it('Engineer role should be Engineer', () => {
        expect(new team.Engineer('Stacy', 3, 'stacy@fakemail.com', 'nlstacy').getRole()).toBe('Engineer');
    });

    it('Engineer ID 3 should return 3', () => {
        expect(new team.Engineer('Stacy', 3, 'stacy@fakemail.com', 'nlstacy').getId()).toBe(3);
    });

    it('Engineer email stacy@fakemail.com should return stacy@fakemail.com', () => {
        expect(new team.Engineer('Stacy', 3, 'stacy@fakemail.com', 'nlstacy').getEmail()).toBe('stacy@fakemail.com');
    });

    it('Engineer GitHub username nlstacy should be nlstacy', () => {
        expect(new team.Engineer('Stacy', 3, 'stacy@fakemail.com', 'nlstacy').git).toBe('nlstacy');
    });
});