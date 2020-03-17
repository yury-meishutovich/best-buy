 import React from 'react';
import PropTypes from 'prop-types';

import Search from './Search';
import LoadMore from './LoadMore';
import List from './List';

import productsApi from '../../api/productsApi';
import spiner from '../../spiner.svg';

class Products extends React.Component
{ 
  constructor(props) {
    super(props);
    
    this.state = {
      search: '',
      page: 1,     
      items : [],
      isLoading : true,
      showLoadMore : false,
      showNoItems : false
    };
  }
  
      

  componentDidMount()  {
      this.loadData(1, '', false);
    }

    loadData(page, search, appendData) {

        this.setState(
            {
                isLoading: true
            },
            productsApi.makeApiCall(
                page,
                search,
                (data) => {
                    this.setState((prevState, props) => {
                        return {
                            page: page,
                            search: search,
                            isLoading: false,
                            items: appendData ? prevState.items.concat(data) : data,
                            showNoItems: (!appendData && data.length === 0),
                            showLoadMore: data.length >= productsApi.maxResponseLenght
                        };
                    });
                }));
    }
  
  handleLoadMoreClick = ()=>  {        
    this.loadData(this.state.page + 1, this.state.search, true);
  }
  
  handleFilterChange = (str)=>  {   
       this.loadData(1, str, false);
  }
  
  handleBuyNowClick = (obj)=>  {    
    this.props.navigate('Order', obj); 
  }

    render() {

        const isLoading = this.state.isLoading;
        const showLoadMore = this.state.showLoadMore;
        const showNoItems = this.state.showNoItems;


        return (
            <React.Fragment>
                <div className="container mb-4">
                    <Search onFilterChange={this.handleFilterChange} />
                </div>

                <div className="container">
                    <List data={this.state.items} onBuyNowClick={this.handleBuyNowClick} />
                </div>

                {
                    showNoItems && <div className="container">Products have not been found</div>
                }

                {
                    showLoadMore && <div className="container"><LoadMore onLoadMoreClick={this.handleLoadMoreClick} /> </div>
                }

                {
                    isLoading && <div className='overlay'> <img src={spiner} className="spiner" alt="logo" /></div>
                }
            </React.Fragment>);
    }
}
  
Products.propTypes = {
    navigate: PropTypes.func.isRequired
};


export default Products;