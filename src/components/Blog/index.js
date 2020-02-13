/**
 *
 * SearchBox
 *
 */

import React, { memo } from 'react';
import StyledBlog from './styledBlog';
import BlogCategory from '../BlogCategory';



function Blog(props) {
  return (
      <StyledBlog marginTop={'3vh'} marginBottom={'2vh'}>
          {props.blogCats.map(function(d, idx){
                                    ;
                                    return (
                                          <BlogCategory categoryName={d.categoryName} blogItems={d.blog_items}/>
                                        )
                                    })}
      </StyledBlog>
    
  );
}

Blog.propTypes = {};

export default memo(Blog);
