global class SOAPServiceTargetOrg {
    /**
     * @description - sync Target Org and Source Org
     */
    webservice static String syncContact(String fname, String lname, String email){
        Contact con = new Contact (FirstName = fname, Lastname = lname, Email = email);
        upsert con email;
        return 'success';
    }
}