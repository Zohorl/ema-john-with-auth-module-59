/***
 * 1.Create a firebase new project in console.firebase.google.com
 * 2.npm install firebase
 *3.create firebase.init.js and import getAuth to export auth
 *4.go to firebase settings > authentication > enable email and password auth
 * 5.create Login,SignUp component ,setup route
 * 6.attach from field handler and form submit handler
 * 7.npm install --save react-firebase-hooks
 * 8.useCreateUserWithEmailAndPassword from react-firebase-hooks
 * 9.if user is created redirect to the expected page
 * 10.useSignInWithEmailAndPassword for login
 * 11.Create requireAuth component ==> check user exists also track user location
 * 12.In route wrap Protected component by using Require Auth component
 *  */



/***
 * firebase hoisting steps :
 * 1.npm install -g firebase-tools (one time for your computer)
 * 2.firebase login (one time for your computer)
 * 3.firebase init (every time for each project)
 * 4.npm run build (every time you want to deploy)
 * 5.firebase deploy (every time you want to deploy)
 * */