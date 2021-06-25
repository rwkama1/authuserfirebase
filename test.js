// const { User } = require("./entity/User");
// const { User_Maintenance } = require("./logic/User_maintenance");

// let user=new User("wetwWE@gmail.com","gkgukgugf","Me llamo pepito","+59829544538");
// ///****************************************************** */
// //Create User

// try
// {
//  User_Maintenance.getInstance().addUser(user).then(token => {
//     console.log("User Added: Save this token: "+token);
//  });
// }
// catch(error)
// {
//     console.log(error.message);
// }

// // ***************************************************** */
//  //Update User
//  try
// {
//  User_Maintenance.getInstance().updateUser(user).then(data => {
//     console.log(data);
//     if(data===true)
//     {
//         console.log("User updated");
//     }
//     });
// }
// catch(e)
// {
//     console.log(e.message)
// }
// //***************************************************** */
// //Delete User
//  try
// {
//  User_Maintenance.getInstance().deleteUser(user).then(data => {
//     console.log(data);
//     if(data===true)
//     {
//         console.log("User deleted");
//     }
//     });
// }
// catch(e)
// {
//     console.log(e.message)
// }
// //********************************* ********/
// //List Users
//   User_Maintenance.getInstance().getAuthUsers().then(data=> {
//             console.log(data);
//      });
//   User_Maintenance.getInstance().getUserByEmail(user.email).then(data=> {
//             console.log(data);
//      });
//   User_Maintenance.getInstance().getUsers().then(data=> {
//             console.log(data);
//      });



