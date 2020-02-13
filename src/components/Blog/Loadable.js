/**
 *
 * Asynchronously loads the component for SmallWrapper
 *
 */

import loadable from '../../helpers/loadable';

export default loadable(() => import('./index'));
