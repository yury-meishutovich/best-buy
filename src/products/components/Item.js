import React from 'react';
import PropTypes from 'prop-types';
import ItemInfo from '../../common/components/ItemInfo'

class Item extends React.Component {
  
  handleBuyNowClick = () =>{    
    this.props.buyNowClick({itemInfo: this.props.itemInfo});
  }
  
  render() {
    return <div className="card">
                <ItemInfo {...this.props.itemInfo}/>
                <div className="card-footer text-center">
                  <button className="btn btn-primary" onClick={this.handleBuyNowClick} >Buy Now</button>      
                </div>
            </div>;  
  }
}

Item.propTypes = {
  itemInfo : PropTypes.object.isRequired,
  buyNowClick : PropTypes.func.isRequired
}


export default Item;