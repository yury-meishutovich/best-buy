import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component
{
  constructor() {
    super();    
    
    this.timer = null;
  }

  handleFilterChange = (e)=>  {  
    
    if (this.timer) {
      clearTimeout(this.timer);
    }
    
    this.timer = setTimeout(function(value, e) {
        e.props.onFilterChange(value);
    }, 1000, e.target.value, this); 
   
  }
  
  render()  {
    return <div className="row">
              <div className="col-lg-4">
                  <input type='text' className="form-control" placeholder='Type Brand Name Here.. For Example: Sony' onChange={this.handleFilterChange}></input>
              </div>
            </div>      
  }
}


Search.propTypes = {     
  onFilterChange : PropTypes.func.isRequired
}

export default Search;