const assert = require('../../utils/assert');

describe('Utils', () => {
  test('calc', (done) => {
    assert(__dirname, 'utils-calc', done);
  });

  test('var', (done) => {
    assert(
      __dirname,
      'utils-var',
      done,
    );
  });
});
