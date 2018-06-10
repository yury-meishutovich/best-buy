import React from 'react';
import PropTypes from 'prop-types';


const ItemInfo = (props)=>{
    return <React.Fragment>
                <img className="card-img-top" src={props.img} alt=''/>
                <div className="card-body">
                    <h4 className="card-title">${props.salePrice}</h4>
                    <p className="card-text">{props.name}</p>
                </div>
            </React.Fragment>
}

ItemInfo.propTypes = {   
    sku:PropTypes.number.isRequired,
    img : PropTypes.string.isRequired,
    salePrice : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired,
}

export default ItemInfo;