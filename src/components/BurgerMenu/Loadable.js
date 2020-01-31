/**
 *
 * Asynchronously loads the component for BurgerMenu
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
