import React from 'react';
import PropTypes from 'prop-types';

const LoadMore =(props)=> {
    return  <div className="row text-center">
              <div className="col-lg-12">
                <button className='btn btn-success' onClick={props.onLoadMoreClick}>Load More</button>
              </div>
            </div>  
}

LoadMore.propTypes = {
  onLoadMoreClick : PropTypes.func.isRequired
}


export default LoadMore;