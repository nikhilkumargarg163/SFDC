public with sharing class DuplicateAccountDelete {
    public void DuplicateAccounts(List<Account> accList){
        Map<String, Account> accNumberMap = new Map<String, Account>();
        List<Account> deleteAcc = new List<Account>();
        for(Account acc:  accList){
            if(accNumberMap.containsKey(acc.AccountNumber)){
                deleteAcc.add(acc);
            }else{
                //acc.isUnique = true;
                accNumberMap.put(acc.AccountNumber, acc);
            }   
        }        
        List<Account> fetchedAcc =  [Select Id, AccountNumber from Account where AccountNumber in :accNumberMap.keySet() 
                            and Id not in: accList];
                                
        deleteAcc.addAll(fetchedAcc);

        if(deleteAcc.size()>0){
            delete deleteAcc;
        }
        if(accNumberMap.size()>0){
            update accNumberMap.values();
        }
    }
}