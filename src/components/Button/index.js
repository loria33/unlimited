/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledButton from './styledButton';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 4em 0;
`;


function Button(props) {
  return (
    <StyledButton onClick={props.handleRoute} buttonColor={props.buttonColor} borderColor={props.borderColor}>
        {props.text}
    </StyledButton>
  );
}

Button.propTypes = {};

export default Button;
