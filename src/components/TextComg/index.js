/**
 *
 * TextComg
 *
 */

import React, { memo } from 'react';
import StyledText from './styledText';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TextComg(props) {
  return (
  <StyledText fontSize={props.fontSize} bold={props.bold} float={props.float} textColor={props.textColor} fontFamily={props.fontFamily} mobilefontSize={props.mobilefontSize} >
      {props.text}
  </StyledText>
  );
}

TextComg.propTypes = {};

export default memo(TextComg);
