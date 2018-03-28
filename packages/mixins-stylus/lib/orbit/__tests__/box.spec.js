const assert = require('../../utils/assert');

describe('Box', () => {
  test('box', (done) => {
    assert(
      __dirname,
      'box',
      done,
    );
  });

  test('block', (done) => {
    assert(
      __dirname,
      'box-block',
      done,
    );
  });

  test('inline-block', (done) => {
    assert(
      __dirname,
      'box-block',
      done,
    );
  });

  test('flex', (done) => {
    assert(
      __dirname,
      'box-flex',
      done,
    );
  });

  test('proportional-box', (done) => {
    assert(
      __dirname,
      'box-proportional-box',
      done,
    );
  });
});
