const orbitUI = require('../../../');
const assert = require('../../utils/assert');

describe('Box', () => {
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
