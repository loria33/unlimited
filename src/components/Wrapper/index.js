/**
 *
 * Wrapper
 *
 */

import React, { memo } from 'react';
import StyledWrapper from './styledWrapper';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Wrapper(props) {
  return (
    <StyledWrapper bgImage={props.hpBanner} bgColor={props.bgColor} bgSize={props.bgSize}>
        {props.children}
    </StyledWrapper>
  );
}

Wrapper.propTypes = {};

export default Wrapper;
