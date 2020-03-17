import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';



class List extends React.Component{
  
  handleBuyNowClick = (obj)=>  {    
    this.props.onBuyNowClick(obj);
  }

    render() {
        return (
            <div className="row">  {
                this.props.data.map((item) => <div className="col-lg-3 col-md-6 mb-4" key={item.sku}>    <Item buyNowClick={this.handleBuyNowClick} itemInfo={item} /> </div>)
            }
      </div>);
    }
}

List.propTypes = {
    data: PropTypes.PropTypes.arrayOf(PropTypes.object).isRequired,
    onBuyNowClick: PropTypes.func.isRequired
};

export default List;