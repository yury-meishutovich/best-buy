const config = Object.freeze({     
  PageSize : 32,
  ApiKey : 'BWizGAQMHbn07gxI0lJoYZg6&',
  DefaultImageUrl : 'http://placehold.it/500x325',
  RestApiUrl : function (page, search) {              
        return `https://api.bestbuy.com/v1/products(manufacturer=${search})?format=json&apiKey=${this.ApiKey}&pageSize=${this.PageSize}&page=${page}&show=sku,name,salePrice,images`;
  }             
})

export default config;