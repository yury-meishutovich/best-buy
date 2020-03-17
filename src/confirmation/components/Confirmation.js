import React from 'react';
import PropTypes from 'prop-types';
import viewConsts from '../../common/code/viewConsts';

class Confirmation extends React.Component {

    handelBackToSearchClick = ()=> {
        this.props.navigate(viewConsts.Products, null);
    }
    
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Order has been confirmed</h2>
                    <div className="controls">
                        <label >Product Sku: {this.props.sku}</label>
                    </div>
                    <h2>Shiping address</h2>
                    <div className="controls">
                        <label>{this.props.address1} {this.props.address2} {this.props.city} {this.props.province}  {this.props.postalCode}
                        </label>
                    </div>
                </div>
            </div>
            <div className="controls">
                <button className='btn btn-success' onClick={this.handelBackToSearchClick} >Back to Search</button>
            </div>
        </div>);
    }    
}

Confirmation.propTypes = {
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    navigate: PropTypes.func.isRequired,
    postalCode: PropTypes.string.isRequired,    
    province: PropTypes.string.isRequired,
    sku: PropTypes.number.isRequired
};

export default Confirmation;