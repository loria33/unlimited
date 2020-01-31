/**
 *
 * ComgInput
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import StyledInput from './styledInput';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ComgInput(props) {
  return (
    <StyledInput textColor={props.textColor}>
          
    </StyledInput>
  );
}

ComgInput.propTypes = {};

export default memo(ComgInput);
