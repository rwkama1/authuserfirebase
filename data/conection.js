const admin = require('firebase-admin');

class Conection
{
    static dbfirebase=()=>
    {
        try{
            const serviceAccount = require('./key/auth-user-c0abd-firebase-adminsdk-wmugk-601ec48a56.json');
            if(!admin.apps.length)
            {
             admin.initializeApp({
                    credential: admin.credential.cert(serviceAccount)
                  }); 
            }
          else{
              admin.app()
          }
            // const db = admin.firestore();
            return admin
            
        }
        catch(error)
        {
         
         throw new Error("Conection Error: "+error.message)
        }
    }
    
}
module.exports = {Conection};