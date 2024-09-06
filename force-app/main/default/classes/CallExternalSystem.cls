public class CallExternalSystem {
    /**
     * @description - Call Third Party API from Salesforce, First Register Third Party Url into Remote Site Settings 
     */
    @AuraEnabled
    public static Map<String,Object> getExchangeRates(String url)
    {
        Http httpObj = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(url);
        req.setMethod('GET');
        HttpResponse res = httpObj.send(req);
        System.debug(res.getBody());
        Map<String,Object> resMap = (Map<String,Object>)JSON.deserializeUntyped(res.getBody());
        System.debug(resMap);
        return resMap;
    }
}