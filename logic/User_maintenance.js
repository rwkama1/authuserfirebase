const { AuthUser } = require("../data/AuthUser");
const { DUser } = require("../data/DUser");
const { Validation_user } = require("./Validation_user");

class User_Maintenance
{
    static getInstance() {
        if (!User_Maintenance.instancia) {
            User_Maintenance.instancia = new User_Maintenance();
        }

        return User_Maintenance.instancia;
    }
    addUser=async(dtuser)=>
    { 
     Validation_user.getInstance().validateEmailPassword(dtuser.email,dtuser.password);
    await Validation_user.getInstance().validateSearchAddUser(dtuser.email);
    const adduser=await DUser.getInstance().addUser(dtuser);
    if(adduser===true)
    {
        const addauthuser=await this.createAuthUser(dtuser);
        const  customtoken=await AuthUser.getInstance().createCustomToken(addauthuser)
        return customtoken    
    }
  
    }
    updateUser=async(dtuser)=>
    { 
     Validation_user.getInstance().validateEmailPassword(dtuser.email,dtuser.password);
     await Validation_user.getInstance().validateSearchModifyUser(dtuser.email);
     const upduser=await DUser.getInstance().updateUser(dtuser);
     if(upduser===true)
     {
         const userbyemail=await this.getUserByEmail(dtuser.email);
         const upauthuser=await this.UpdateNameUserAuth(userbyemail.uid,dtuser.name);
         return upauthuser    
     }
    return upduser    
    }
    deleteUser=async(dtuser)=>
    { 
     Validation_user.getInstance().validateEmail(dtuser.email);
     await Validation_user.getInstance().validateSearchModifyUser(dtuser.email);
     const userbyemail=await this.getUserByEmail(dtuser.email);
     const deleteauthuser=await this.deleteAuthUser(userbyemail.uid);
     if(deleteauthuser===true)
     {
        const deluser=await DUser.getInstance().deleteUser(dtuser);
         return deluser 
     }
        
    }
    getUser=async(email)=>
    { 
     Validation_user.getInstance().validateEmailPassword(email);
     const getUser=await DUser.getInstance().getUser(email);
    return getUser    
    }
    getUsers=async()=>
    { 
     const getUsers=await DUser.getInstance().getUsers();
     return getUsers    
    }
   
    
    //***************************************************************************** */
    //AUTH
    createAuthUser=async(dtuser)=>
    {
     Validation_user.getInstance().validateEmailPassword(dtuser.email,dtuser.password);
    const adduserauth=await AuthUser.getInstance().createUserAuth(dtuser);
    return adduserauth
    }
    getUserByEmail=async(email)=>
    {
     Validation_user.getInstance().validateEmail(email);
    const userauth=await AuthUser.getInstance().getUserByEmail(email);
    return userauth
    }
    UpdateNameUserAuth=async(uid,name)=>
    {
    const updatenameuserauth=await AuthUser.getInstance().UpdateNameUserAuth(uid,name);
    return updatenameuserauth
    }
    deleteAuthUser=async(uid)=>
    {
    const delauthuser=await AuthUser.getInstance().deleteAuthUser(uid);
    return delauthuser
    }
    getAuthUsers=async()=>
    { 
     const getautuser=await AuthUser.getInstance().getAuthUser();
    return getautuser    
    }
}
module.exports = {User_Maintenance};