class User
{
    constructor(pemail, ppassword,pname,pphonenumber) {
        this.email=pemail;
        this.password=ppassword;
        this.name=pname;
        this.phonenumber=pphonenumber;
       
    }
}
module.exports = {User};