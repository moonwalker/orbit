const stylus = require('stylus');
const strip = require('strip-indent');

module.exports = (source, expected, ...args) => {
  const [options, done] = args.length === 1 ?
    [{}, ...args] :
    [...args];

  stylus.render(
    strip(source),
    options,
    (err, output) => {
      if (err) {
        return done(err);
      }

      expect(output.trim()).toBe(strip(expected).replace(/^\n/, ''));

      return done();
    },
  );
};
