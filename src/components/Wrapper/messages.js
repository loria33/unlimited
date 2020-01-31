/*
 * Wrapper Messages
 *
 * This contains all the text for the Wrapper component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Wrapper';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Wrapper component!',
  },
});
