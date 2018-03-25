const orbitUI = require('../../');
const assert = require('../utils/assert');

describe('Box', () => {
  test('block', (done) => {
    const source = `
      @require 'orbit-ui/box';
      .a {
        block();
      }
      .b {
        block(100px);
      }
      .c {
        block(100px, 20px);
      }
      .d {
        block(height: 100%)
      }`;

    const expected = `
      .a {
        display: block;
      }
      .b {
        display: block;
        width: 100px;
      }
      .c {
        display: block;
        width: 100px;
        height: 20px;
      }
      .d {
        display: block;
        height: 100%;
      }`;

    assert(source, expected, {
      use: orbitUI(),
    }, done);
  });

  test('inline-block', (done) => {
    const source = `
      @require 'orbit-ui/box';
      .a {
        inline-block();
      }
      .b {
        inline-block(100px);
      }
      .c {
        inline-block(100px, 20px);
      }
      .d {
        inline-block(height: 100%)
      }`;

    const expected = `
      .a {
        display: inline-block;
      }
      .b {
        display: inline-block;
        width: 100px;
      }
      .c {
        display: inline-block;
        width: 100px;
        height: 20px;
      }
      .d {
        display: inline-block;
        height: 100%;
      }`;

    assert(source, expected, {
      use: orbitUI(),
    }, done);
  });

  test('flex', (done) => {
    const source = `
      @require 'orbit-ui/box';
      .a {
        flex();
      }
      .b {
        flex(100px);
      }
      .c {
        flex(100px, 20px);
      }
      .d {
        flex(height: 100%)
      }`;

    const expected = `
      .a {
        display: flex;
      }
      .b {
        display: flex;
        width: 100px;
      }
      .c {
        display: flex;
        width: 100px;
        height: 20px;
      }
      .d {
        display: flex;
        height: 100%;
      }`;

    assert(source, expected, {
      use: orbitUI(),
    }, done);
  });

  test('proportional-box', (done) => {
    const source = `
      @require 'orbit-ui/box';
      .a {
        proportional-box();
      }
      .b {
        position: absolute;
        proportional-box(100px / 50px);
      }`;

    const expected = `
      .a {
        position: relative;
      }
      .a::before {
        display: block;
        content: '';
        padding-bottom: 100%;
      }
      .b {
        position: absolute;
      }
      .b::before {
        display: block;
        content: '';
        padding-bottom: 50%;
      }`;

    assert(source, expected, {
      use: orbitUI(),
    }, done);
  });
});
