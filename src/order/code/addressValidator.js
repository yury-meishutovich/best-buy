const addressValidator  = (function() {
 
    function isAddressValid(data) {
        
        return !(data.address1.length === 0 ||
            data.address2.length === 0 ||
            data.city.length === 0 ||
            data.province.length === 0 ||
            data.postalCode.length === 0);
    }

    return {
        isAddressValid : isAddressValid
    };

  })();


  export default addressValidator;