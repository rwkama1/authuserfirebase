  
const conection= require('./conection').Conection;
const  User  = require("../entity/User").User;

class DUser  {
  static instancia;
 constructor() { }
  static getInstance() {
        if (!DUser.instancia) {
            DUser.instancia = new DUser();
        }

        return DUser.instancia;
    }
      addUser=async(dtuser) =>{
      const db=conection.dbfirebase().firestore();
        try {
          await db.collection("User").doc(dtuser.email).set(
               {
                   email:dtuser.email,
                   password:dtuser.password,
                   name:dtuser.name,
                   phonenumber:dtuser.phonenumber,
                   

               });
               return true
              
        }
         catch (error) {
    
            throw new Error("Database Error : "+error.message);
        }
    }
   
     updateUser=async (dtuser)=> {
      const db=conection.dbfirebase().firestore();
      try {
         await db.collection("User").doc(dtuser.email).update(
         {
          password:dtuser.password,
          name:dtuser.name,
          phonenumber:dtuser.phonenumber,
               
             });
       return true
      }
       catch (error) {
  
        throw new Error("Database Error : "+error.message);
      }
  }
    deleteUser=async(dtuser)=> {
  const db=conection.dbfirebase().firestore();
    try {
       await db.collection("User").doc(dtuser.email).delete()
       return true
    }
     catch (error) {

      throw new Error("Database Error : "+error.message);
    }
    }
     getUser=async(email)=> {
    
   try {
        const db=conection.dbfirebase().firestore();
        let objuser=null;
        const suser= await db.collection("User").doc(email);
        const doc =  await suser.get();
        const us=await doc.data();
        if(us==null)
        {
            return null
        }
        objuser=new User(us.email,us.password,us.name,us.phonenumber)
        return objuser;
       }
      catch (error) {

        throw new Error("Database Error : "+error.message);
      }
   }
     getUsers=async()=> {
    
    try {
      const db=conection.dbfirebase().firestore();
      const luser= await db.collection("User").get();
      var array=[];
        for (var x of luser.docs) {
           var objuser=new User(x.data().email,x.data().password,x.data().name,x.data().phonenumber);
            array.push(objuser);
        }
        return array;
        }
       catch (error) {
 
         throw new Error("Database Error : "+error.message);
       }
   }
 
}
   
 


module.exports = {DUser};
