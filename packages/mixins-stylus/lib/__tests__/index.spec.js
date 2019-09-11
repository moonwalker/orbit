const assert = require('../utils/assert');

describe('Plugin', () => {
  test('shoud auto import mixins index', (done) => {
    assert(__dirname, 'autoimport', done);
  });

  test('should not auto import mixins index', (done) => {
    assert(
      __dirname,
      'no-autoimport',
      {
        autoImport: false
      },
      done
    );
  });
});
