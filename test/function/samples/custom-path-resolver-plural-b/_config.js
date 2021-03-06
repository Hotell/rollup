var assert = require('assert');

module.exports = {
	description: 'resolver error is not caught',
	options: {
		plugins: [
			{
				resolveId() {
					throw new Error('nope');
				},
				load(id) {
					if (id === 'main') return 'assert.ok( false );';
				}
			},
			{
				resolveId(importee, importer) {
					return 'main';
				}
			}
		]
	},
	error: {
		message: 'nope'
	}
};
