import React from 'react';
import Order from './order/components/Order';
import Confirmation from './confirmation/components/Confirmation';
import Products from './products/components/Products';
import viewConsts from './common/code/viewConsts';



class OrderWorkflow extends React.Component {     
    constructor(props) {
      super(props);      
      this.state = { 
        view : viewConsts.Products, 
        model : null, 
        navigate : this.handleNavigate};    
    }      
   
  handleNavigate = (view, model)=> {    
      this.setState({ view: view, model: model });
  }
  
  render()  {         

      const Views = {
          Order: Order,
          Confirmation: Confirmation,
          Products: Products
      };

    
    const View = Views[this.state.view];   
      return <View {...this.state.model} navigate={this.state.navigate} />;
  }
}
 

 export default OrderWorkflow;