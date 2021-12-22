import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import { render } from '@testing-library/react';

initStoryshots({
  asyncJest: true,
  test: ({ story, context, done }) => {
    const converter = new Stories2SnapsConverter();
    const snapshotFilename = converter.getSnapshotFileName(context);
    const storyElement = story.render();

    const { container } = render(storyElement);

    setTimeout(() => {
      if (snapshotFilename) {
        expect(container.firstChild).toMatchSpecificSnapshot(snapshotFilename);
      }

      done();
    }, 1);
  }
});
