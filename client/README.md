# React-App

## 🛠 Libraries and tools used

 - [react] : useContext,useState , useEffect, useMemo , useLocalStorage - to set localStorage user info 
 - [react-router-dom] : BrowserRouter ,useParams, useNavigate, Link, NavLink, Navigate, Outlet

 ## Getting Started 
    
    Clone this repository and install dependencies

***

 -> git clone  https://github.com/DimitarSergeev/Auction-Project-React.git
 -> cd client
 -> npm i 

   --- to start app npm start --- 
***
## Base URL

 App run on: http://localhost:3000 

 # Endpoints: 

   *** Public ***
  -> Home - '/'
  -> Auction/Catalog - '/auction'
  -> Login - '/auth/login'
  -> Register - '/auth/register'
  *** Privete ***
  -> Profile - '/auth/profile/:userId'
  -> Offer/Create - '/offer/create'
  -> Details/Offer - '/offer/:offerId/details'
  -> Edit-Offer - '/edit/offer/:offerId'
 
 # Api send a request (Service)

  *** Auth-User *** 
  -> Register - '/auth/register' - POST - body {email, userName,password,repeatPassword} 
  -> Login - '/auth/login' - POST - body {email, password} - Set userInformation on Browser
  -> Profile - '/auth/profile/:userId' - GET - Тake the winning bids and visualize them
  -> Logout - '/auth/logout - GET - Logout user at server and client, clearing userInformation on Browser 
  *** Auction ***
  -> Home - '/' - GET - Get last tree offers and visualize them
  -> Auction/Catalog - '/auction' - GET - Get all offers and visualize them
  ->Offer/Create - POST - body {title , imageUrl, createOn(year) , startPrice , buyNow(price) , description, certificate(Yes/No), nameCert(optional) }
  ->Details/Offer - '/offer/:offerId/details'  - GET - Get current offert and show all details 
 
  ->Edit/Offer - '/edit/offer/:offerId' - POST - body {title , imageUrl, createOn(year) , startPrice , buyNow(price) , description, certificate(Yes/No),timer(Date.now()), nameCert(optional) }
  
  -> Bet - '/:offerId' - PATCH - body {startPrice(new), winBet(userId)}
  -> buyNow - '/:offerId/:userId' - GET - Use offerId and userId on server to set offer in user collection and delete offer
  -> Delete - '/:offerId' - GET - delete offer 


*****************************************************************************************************************************************************************************

# Server 

## 🛠 Libraries and tools used

- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Cors](https://github.com/expressjs/cors)
- [Nodemon](https://github.com/remy/nodemon)
- [jsonwebtoken]
- [bcrypt]
- [body-parser]


## Getting Started 
    
    Clone this repository and install dependencies

***

 -> git clone https://github.com/DimitarSergeev/Auction-Project-React.git (if you haven't clone it already )
 -> cd server
 -> npm i 

   --- to start app npm start --- 
***
## Base URL
The Base URL for the API is: `http://localhost:3030`

Architecture : Controller -> Service -> Model 

### You can edit '.env' file in the main directory and populate the following information:

- `port` -- For Api call;
- `saltRounds` -- saltRounds for hashed user password


### also can edit '.database'

- `connectionString` - to set mongoDB host url 


//////////////////////////////////////////////////////////////

if status to succses api is not write , correct status is 200 

//////////////////////////////////////////////////////////////

*** AUTH-USER Controller ***
### Create user 

 Send `POST` to `/auth/register'`  service return JSON object with stored data in mnogoDb 
 Content look like : { email: String ,userName:String password: String , repeatPassword: String }
  
### Login 

Send `POST` to `/auth/login` service return JSON object { userName: String, token:jsonwebtoken ,userId: ObjectId(String)}
Content look like : { email: String , password: String}

###  User profil 

Send `GET` to `/auth//profile/:userId` service return JSON object {_id: ObjectId(string), email:String , userName: String , password: string(hashed) , Mycollection: array}
  
###  Logout 

Send `GET` to `/auth/logout` service response with status 204 (no content )

*** AUCTION Controller ***

offers content look like : {
    _id : ObjectId(string)
    title: String 
    imageUrl: string starts with https?://
    createOn: Number
    startPrice: Number
    buyNow:Number
    description: String
    certificate: String (Yes/No)
    timer: Date 
    owner:ObjectId(string)

### Home page last tree offers 

Send `GET` to `/` service return JSON object with last tree avalible offers 

### Auction 

Send `GET` to `/auction` service return JSON object all avalible offers 

### Create Offer 

Send `POST` to `/offer/create` service return JSON object with stored data in mnogoDb
conetnt offers without timer , timer set on Server Date.Now()

### Details Offer 

Send `GET` to `/offer/:offerId/details` service response JSON object with current offer information


### Edit offer 

Send `POST` to `/edit/offer/:offerId` service return service return JSON object with changed offer
content as mentioned above 

### Bet 

Send `PATCH` to `/:offerId` service return JSON object with changed offer
content look like {
    startPrice: Number,
    winBet:ObjectId(string)
}

### buy Now 

Send `GET` to `/:offerId/:userId` service response with a JSON object :  changed user (add current offer in MyCollection ) and delete game at server

### Delete Offer 

Send `GET` to `/:offerId` service response with status 204 and delete game at server

**In case of a validation error, the service will respond with an error status code and an object containing the error message**.

### Error Response:

```
{
  message: string;
}
```

  






























<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->
