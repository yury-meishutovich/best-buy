import config from './config';

const productsApi = (function() {
 
    function selectImageUrl(images) {
        
        let minSize = 0;
        let url = config.DefaultImageUrl;
        
        if (images && images.length > 0) {
            for (let i = 0 ; i < images.length; i++) {
            let image = images[i];
            let currentImageSize = image.height * image.height + image.width * image.width;
            if (minSize < currentImageSize){
                minSize = currentImageSize;
                url = image.href;
            }
            }
        }
     
      return url;     
    }


    function convertResponse(resp) {
        return resp.products.map(x=> {
          return {             
            sku : x.sku,
            name : x.name,
            img : selectImageUrl(x.images),
            salePrice : x.salePrice};
      })
    }

    function processJsonResponse (resp, onDataReceived) {        
          
        const data = convertResponse(resp);      
        onDataReceived(data);       
    }

        
    function makeApiCall (page, search, onDataReceived) {
        fetch(config.RestApiUrl(page, search))
            .then((response) => {       
                                  if (response.status !== 200 ) {
                                        console.log(`Status Code: ${response.status}`);
                                        return;
                                  } 
  
                                  response.json().then((resp)=> processJsonResponse(resp, onDataReceived));
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            }); 
      }

      
    return {
        makeApiCall : makeApiCall,
        maxResponseLenght : config.PageSize
    };

  })();


  export default productsApi;