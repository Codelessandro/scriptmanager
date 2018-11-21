const manager = require('./manager.js')
test('checks if detects script correctly', () => {
	expect(manager('/scripts/scriptA.sh')).toBe(true)
});
