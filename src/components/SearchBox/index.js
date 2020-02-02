/**
 *
 * SearchBox
 *
 */

import React, { memo } from 'react';
import StyledSearchBox from './styledSearchBox'
import TextBox from '../TextBox';
import SmallWrapper from '../SmallWrapper';
import Texts from '../../configs/Texts';

function SearchBox(props) {
  return (
      <StyledSearchBox marginTop={'-5vh'} marginBottom={'20px'}
      display={'block'} height={props.height} width={'100%'} float={props.float} textAlign={'center'} respwidth={props.respwidth} respAlign={props.respAlign}>
          <SmallWrapper class='asas' paddingTop={'10px'} paddingBottom={'10px'} border={'1px solid black'} bgColor={'white'} marginTop={props.marginTop} marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} 
                       display={props.display} height={props.height} width={'100%'} float={props.float} textAlign={props.textAlign} respwidth={'80%'} respAlign={props.respAlign}>
                <SmallWrapper>
                    <SmallWrapper marginRight='4vw' >
                        <TextBox placeholder={Texts.homePage.roadTextPlaceHolder} direction={'rtl'} textAlign={'start'}></TextBox>
                    </SmallWrapper>
                    <SmallWrapper marginRight='4vw' >
                        <TextBox placeholder={Texts.homePage.cityTextPlaceHolder} direction={'rtl'} textAlign={'start'}></TextBox>
                    </SmallWrapper>
                </SmallWrapper>                           
                <SmallWrapper paddingTop={'10px'} paddingBottom={'10px'} border={'1px solid gray'} bgColor={'gray'}  
                       width={'10%'} float={props.float} textAlign={props.textAlign} respwidth={'10%'} respAlign={props.respAlign}>
               
                        6+5+65+65 
                </SmallWrapper>
                
          </SmallWrapper>
      </StyledSearchBox>
    
  );
}

SearchBox.propTypes = {};

export default memo(SearchBox);
