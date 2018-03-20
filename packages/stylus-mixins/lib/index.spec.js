const orbitUI = require('../');
const assert = require('./utils/assert');

describe('Plugin', () => {
  test('shoud auto import mixins index', (done) => {
    const source = `
      .a {
        content: $orbitUI;
      }`;

    const expected = `
      .a {
        content: true;
      }`;

    assert(source, expected, {
      use: orbitUI(),
    }, done);
  });

  test('should not auto import mixins index', (done) => {
    const source = `
      .a {
        content: $orbitUI;
      }
      @require "orbit-ui/index";
      .b {
        content: $orbitUI;
      }`;

    const expected = `
      .a {
        content: $orbitUI;
      }
      .b {
        content: true;
      }`;

    assert(source, expected, {
      use: orbitUI({
        autoImport: false,
      }),
    }, done);
  });
});
