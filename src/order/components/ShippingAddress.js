import React from 'react';
import PropTypes from 'prop-types';
import RequiredTextBox from '../../common/components/RequiredTextBox';
import addressValidaor from '../code/addressValidator';

 class ShippingAddress extends React.Component {

  constructor(props) {
    super(props); 
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange (value, field)  {

    const ret = {
        sku:this.props.sku, 
        address1:this.props.address1, 
        address2: this.props.address2,
        city: this.props.city,
        province:this.props.province,
        postalCode : this.props.postalCode};
    
    ret[field] = value;    
    
    this.props.onAddressChange(ret, addressValidaor.isAddressValid(ret));
  
  }

    
    render() { 
        return (<div className="control-group form-group">
            <RequiredTextBox caption='Address 1' name="address1" focus={true} text={this.props.address1} onTextChange={this.handleTextChange} />
            <RequiredTextBox caption='Address 2' name="address2" text={this.props.address2} onTextChange={this.handleTextChange} />
            <RequiredTextBox caption='City' name="city" text={this.props.city} onTextChange={this.handleTextChange} />
            <RequiredTextBox caption='Province' name="province" text={this.props.province} onTextChange={this.handleTextChange} />
            <RequiredTextBox caption='Postal Code' name="postalCode" text={this.props.postalCode} onTextChange={this.handleTextChange} />
        </div>);
    }
  }
  
  
ShippingAddress.propTypes = {
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired
};
  
export default ShippingAddress;