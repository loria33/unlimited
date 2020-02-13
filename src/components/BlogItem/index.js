/**
 *
 * SearchBox
 *
 */

import React, { memo } from 'react';
import StyledBlogItem from './styledBlogItem'
import TextBox from '../TextBox';
import SmallWrapper from '../SmallWrapper';
import Texts from '../../configs/Texts';
import { useDispatch,useSelector } from "react-redux";
import * as homepageActions from '../../_actions/homepageActions';



function BlogItem(props) {
   ;
  return (
      <StyledBlogItem marginTop={'-5vh'} marginBottom={'20px'}
      height={props.height} width={'100%'} float={props.float} textAlign={'center'} >
          <SmallWrapper class='asas' paddingTop={'10px'} paddingBottom={'10px'} border={'1px solid black'} bgColor={'white'} marginTop={props.marginTop} marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} 
                       height={props.height} width={'100%'} float={props.float} textAlign={props.textAlign} respwidth={'80%'} respAlign={props.respAlign}>
                <SmallWrapper display={'block'}>
                   
                </SmallWrapper>                           
          </SmallWrapper>
      </StyledBlogItem>
    
  );
}

BlogItem.propTypes = {};

export default memo(BlogItem);
