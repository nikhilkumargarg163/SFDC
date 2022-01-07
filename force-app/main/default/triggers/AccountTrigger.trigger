
trigger AccountTrigger on Account (after insert, after update, after undelete) {
    if(trigger.isAfter && trigger.isInsert)
    {
        AccountHandler.afterInsert(trigger.newMap)''
    }
    if(trigger.isAfter && trigger.isUpdate)
    {
        AccountHandler.afterUpdate(trigger.newMap, trigger.oldMap);
    }
    if(trigger.isAfter && trigger.isUndelete)
    {
        AccountHandler.afterUndelete(trigger.newMap);
    }
}