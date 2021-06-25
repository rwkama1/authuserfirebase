const conection= require('./conection').Conection;

class AuthUser  {
  static instancia;
 constructor() { }
  static getInstance() {
        if (!AuthUser.instancia) {
            AuthUser.instancia = new AuthUser();
        }

        return AuthUser.instancia;
    }
    createUserAuth=async(dtuser)=>
    {
        try {
        const firebase=conection.dbfirebase();
      const autuser= await firebase.auth().createUser(
            {
                email:dtuser.email,
                password:dtuser.password,
                displayName:dtuser.name,
             
              
                
            })
      return autuser.uid
    
    }
    catch (error) {

      throw new Error("Database Error : "+error.message);
   }
    }
    getUserByEmail=async(email)=>
    {
        try {
       const firebase=conection.dbfirebase();
      const autuser= await firebase.auth().getUserByEmail(email);
      let authuser=autuser.toJSON();
      return authuser
    
    }
    catch (error) {

      throw new Error("Database Error : "+error.message);
   }
    }
    UpdateNameUserAuth=async(uid,name)=>
    {
        try {
        const firebase=conection.dbfirebase();
        const autuser= await firebase.auth().updateUser(uid,
            {
                displayName:name,   
            })
      return true
    
    }
    catch (error) {

        throw new Error("Database Error : "+error.message);
    }
    }
    deleteAuthUser=async(uid)=>
    {
        try {
        const firebase=conection.dbfirebase();
      const autuser= await firebase.auth().deleteUser(uid)
      return true
    
    }
    catch (error) {

      throw new Error("Database Error : "+error.message);
   }
  }
    getAuthUser=async()=>
  {
    try {
      const firebase=conection.dbfirebase();
      const usersResult = await firebase.auth().listUsers(1000);
    return usersResult.users;
        }
       catch (error) {
  
         throw new Error("Database Error : "+error.message);
       }
   }
   createCustomToken=async(uid)=>
   {
     try {
       const firebase=conection.dbfirebase();
       const customtoken = await firebase.auth().createCustomToken(uid);
       return customtoken
         }
        catch (error) {
          throw new Error("Database Error : "+error.message);
        }
    }
  //********************************************** */
   
}
module.exports = {AuthUser};