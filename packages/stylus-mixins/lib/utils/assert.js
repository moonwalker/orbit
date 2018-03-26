/* eslint-disable import/no-extraneous-dependencies */
const fs = require('fs');
const { promisify } = require('util');
const { resolve } = require('path');
const stylus = require('stylus');

const readFile = promisify(fs.readFile);
const compile = promisify(stylus.render);

const orbitUI = require('../../');

module.exports = async (testDirname, name, ...args) => {
  const [options, done] = args.length === 1 ? [{}, ...args] : [...args];

  const stylusFilepath = resolve(testDirname, `cases/${name}.styl`);
  const cssFilepath = resolve(testDirname, `cases/${name}.css`);

  try {
    const source = await readFile(stylusFilepath, 'utf8');
    const expected = await readFile(cssFilepath, 'utf8');

    const actual = await compile(source, {
      use: [
        orbitUI(options),
      ],
    });

    expect(actual).toBe(expected);
    done();
  } catch (err) {
    done(err);
  }
};

