public without sharing class AccountHandler {
    public static Boolean isInsertExecuted = false;
    public static void afterInsert(Map<Id,Account> accMap)
    {
        List<Account> accList = new List<Account>();
        if(!isInsertExecuted)
        {
            for(Account acc : accMap.Values())
            {
                if(acc.Status__c == 'Cold')
                {
                    Account childAcc = new Account(Name = acc.Name, ParentId__c = acc.Id, Status__c = 'Cold');
                    accList.add(childAcc);
                }
            }
            if(!accList.isEmpty())
            {
                insert accList;
            }
            isInsertExecuted = true;
            syncAccountinAnotherOrg(accMap.values()[0].Name, accMap.values()[0].AccountNumber);
        }
        
        
    }
    public static void afterUndelete(Map<Id,Account> accMap)
    {
        List<Account> accList = new List<Account>();
        for(Account acc : accMap.Values())
        {
            if(acc.Status__c == 'Cold')
            {
                Account childAcc = new Account(Name = acc.Name, ParentId__c = acc.Id, Status__c = 'Cold');
                accList.add(childAcc);
            }
        }
        if(!accList.isEmpty())
        {
            insert accList;
        }
    }
    public static void afterUpdate(Map<Id,Account> newAccMap, Map<Id,Account> oldAccMap)
    {
        List<Account> accList = new List<Account>();
        List<Account_Platform_Event__e> platformEvents =  new List<Account_Platform_Event__e>();
        for(Account acc : newAccMap.Values())
        {
            if(acc.Status__c == 'Cold' && acc.Status__c != oldAccMap.get(acc.Id).Status__c)
            {
                Account childAcc = new Account(Name = acc.Name, ParentId__c = acc.Id, Status__c = 'Cold');
                accList.add(childAcc);
            }
            Account_Platform_Event__e platformEvent = new Account_Platform_Event__e();
            platformEvent.Account_Name__c = acc.Name;
            platformEvent.Account_Number__c = acc.AccountNumber;
            platformEvents.add(platformEvent);
        }
        if(!accList.isEmpty())
        {
            insert accList;
        }
        if(!platformEvents.isEmpty())
        {
            EventBus.publish(platformEvents);
        }
    }
    @future(callout = true)
    public static void syncAccountinAnotherOrg(String Name, String accNumber){
        partnerSoapSforceCom.Soap myPartnerSoap = new partnerSoapSforceCom.Soap();  
        partnerSoapSforceCom.LoginResult partnerLoginResult = myPartnerSoap.login('nikhilkumargarg.dev@gmail.com', 'Rameshwar@1R9KOxFye5KlEi3thgtOP8uJO');
        connectChildOrg.SessionHeader_element webserviceSessionHeader = new connectChildOrg.SessionHeader_element(); 
        webserviceSessionHeader.sessionId = partnerLoginResult.sessionId;
        connectChildOrg.ConnectTOSFOrg connectToOrg = new connectChildOrg.ConnectTOSFOrg();
        connectToOrg.SessionHeader = webserviceSessionHeader;
        connectToOrg.syncAccount(Name,accNumber);
    }
}