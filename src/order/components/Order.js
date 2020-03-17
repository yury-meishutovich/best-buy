import React from 'react';
import PropTypes from 'prop-types';
import viewConsts from '../../common/code/viewConsts';
import ItemInfo from '../../common/components/ItemInfo';
import ShippingAddress from './ShippingAddress';

class Order extends React.Component {
    constructor(props) {
        super(props);
      
      this.state = {
        shipping : {
          address1: '',
          address2: '',
          city: '',
          province: '',
          postalCode: ''
        },
        isDisabled  : true
      };
    }
    
    handleAddressChange = (address, isValid) =>  {        
        this.setState({shipping: address, isDisabled : !isValid});    
      }
   
    handlePlaceOrderClick = ()=> {
     
        this.props.navigate(viewConsts.Confirmation,  
            {
                sku:this.props.itemInfo.sku, 
                address1:this.state.shipping.address1, 
                address2: this.state.shipping.address2,
                city: this.state.shipping.city,
                province:this.state.shipping.province,
                postalCode : this.state.shipping.postalCode
            });
    }

    handleCancelClick = () => {
        this.props.navigate(viewConsts.Products, null);
    }
    
    render()  {
    
        return (<div className="container">
            <div className="row mb-4">
                <div className="col-lg-3">
                    <div className="card">
                        <ItemInfo {...this.props.itemInfo} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <h2>Shipping Address</h2>
                    <ShippingAddress {...this.state.shipping} onAddressChange={this.handleAddressChange} />
                    <div className="control-group form-group">
                        <div className="controls mt-4">
                            <button className='btn btn-primary' onClick={this.handleCancelClick} >Cancel</button>&nbsp;
                                    <button className='btn btn-success' disabled={this.state.isDisabled} onClick={this.handlePlaceOrderClick} >Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>);           
    }
}


Order.propTypes = {
    navigate: PropTypes.func.isRequired    
};
  

export default Order;