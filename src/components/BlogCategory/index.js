/**
 *
 * SearchBox
 *
 */

import React, { memo } from 'react';
import StyledBlogCat from './styledBlogCat'
import SmallWrapper from '../SmallWrapper';
import BlogItem from '../BlogItem'




function BlogCateGory(props) {
   
  return (
      <StyledBlogCat marginTop={'20px'} marginBottom={'20px'}
      height={props.height} width={'100%'}  textAlign={'center'} >
            <SmallWrapper>
                <span key={props.categoryName}>{props.categoryName}</span>
            </SmallWrapper>
            <SmallWrapper>
                                  {props.blogItems.map(function(d, idx){
                                   
                                    return (
                                      <SmallWrapper>
                                          <BlogItem d={d}></BlogItem>
                                      </SmallWrapper>
                                        
                                        )
                                    })}   
            </SmallWrapper>
             
      </StyledBlogCat>
    
  );
}

BlogCateGory.propTypes = {};

export default memo(BlogCateGory);
