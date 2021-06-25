const { DUser } = require("../data/DUser");


  class Validation_user{
    
   static getInstance() {
        if (!Validation_user.instancia) {
            Validation_user.instancia = new Validation_user();
        }

        return Validation_user.instancia;
    }
    validateEmail=(email)=>
    {
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!(email.match(mailformat)))
        {
            throw new Error("You have entered an wrong email address!");
        }
    }
    validatePassword=(password)=>
    {
        let passw= /^[A-Za-z]\w{7,14}$/;
        if (!(password.match(passw)))
        {
            throw new Error("The password must be : 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter");
        }
    }
    validateEmailPassword=(email,password)=>
    {
        this.validateEmail(email);
        this.validatePassword(password);
    }
    //*************************************************************************** */
    validateSearchModifyUser=async(email)=>
    {
        let searchuser=await DUser.getInstance().getUser(email);
        if (searchuser === null) {
            throw new Error("Logic Error: That User does not exists in the system");
        }
    }
    validateSearchAddUser=async(email)=>
    {
        let searchuser=await DUser.getInstance().getUser(email);
        if (searchuser != null) {
            throw new Error("Logic Error: That User already exists in the system");
        }
    }
//*************************************************************************** */
}
module.exports = {Validation_user};