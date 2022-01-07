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
        for(Account acc : newAccMap.Values())
        {
            if(acc.Status__c == 'Cold' && acc.Status__c != oldAccMap.get(acc.Id).Status__c)
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
}
