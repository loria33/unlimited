/**
 *
 * SearchBox
 *
 */

import React, { memo } from 'react';
import StyledBlogItem from './styledBlogItem'
import SmallWrapper from '../SmallWrapper';
import Img from '../ImgComg';
import Config from '../../configs/Config';
import Moment from 'react-moment';

function BlogItem(props) {
 
  return (
      <StyledBlogItem key={props.d.Title} marginTop={'2vh'} marginBottom={'20px'} fontSize={'1rem'}
      height={props.height} width={'100%'} float={props.float} textAlign={'center'} >
          <SmallWrapper class='asas' bgColor={'red'} paddingTop={'10px'} paddingBottom={'10px'} border={'1px solid black'} bgColor={'white'} marginTop={props.marginTop} marginBottom={props.marginBottom} marginRight={props.marginRight} marginLeft={props.marginLeft} 
                       height={props.height} width={'100%'} float={props.float} textAlign={props.textAlign} respwidth={'80%'} respAlign={props.respAlign}>
                <SmallWrapper display={'inline-block'}>
                    <SmallWrapper display={'block'}  border={'1px solid black'}><span>Title: {props.d.Title}</span></SmallWrapper>                           
                    <SmallWrapper display={'block'}><span>Some Text: {props.d.Description}</span></SmallWrapper>
                    <SmallWrapper display={'block'} border={'1px solid black'}><span>Description {props.d.DescriptionLong}</span></SmallWrapper>
                    <SmallWrapper display={'block'}><span> <Moment format="YYYY/MM/DD">{props.d.dateofItem}</Moment></span></SmallWrapper>
                    <SmallWrapper>
                    {props.d.thumbnails.map(function(t_item, idx){
                                   
                                   return (
                                     <SmallWrapper>
                                         <Img src={Config.strapiUrl + t_item.url} width={'100%'} height={'30vh'}
                                                        respheight={'15vh'} /> 
                                     </SmallWrapper>
                                       
                                       )
                                   })}   
                  </SmallWrapper>
                </SmallWrapper>                           
          </SmallWrapper>
      </StyledBlogItem>
    
  );
}

BlogItem.propTypes = {};

export default memo(BlogItem);
