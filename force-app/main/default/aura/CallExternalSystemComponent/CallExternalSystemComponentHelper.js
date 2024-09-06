({
    callApexAction : function(component) {
        var action = component.get("c.getExchangeRates");
        action.setParams({"url" : "http://data.fixer.io/api/latest?access_key=738c44d040238a6f33970d76d41de37f"});
        action.setCallback(this,function(response){
            var state = response.getState();
            if(component.isValid && state === 'SUCCESS')//component.isValid is used to check that component is not destroyed yet
            {
                var result = response.getReturnValue();
                component.set("v.response", result)
                console.log(result);
                var currencyRates = result["rates"];
                console.log(currencyRates);
                var exchangeRateList=[];
                for(var key in currencyRates)
                {
                    exchangeRateList.push(key + ':' + currencyRates[key]);
                }
                component.set("v.currencyRateList",exchangeRateList);
            }
        });
        $A.enqueueAction(action);
    }
})
