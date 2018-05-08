# Mindera: Graduate Program
The application was developed using [React-Native](https://facebook.github.io/react-native/), [Redux](https://redux.js.org/) and [Axios](https://github.com/axios/axios).
An API was also created to mock data to the client, using [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) and [Mongoose](http://mongoosejs.com/) to connect to a MongoDB database created for the project.
The API and all needed resources are already available through a staging server, hosted in [Heroku](https://graduates-mindera.herokuapp.com/events).

## Usage
### Installation

    cd client/mobileApp
    npm install

### Running the application
   
 To run the app on Android (have an Android emulator or a device connected):
 
    cd client/mobileApp
    npm run android     
    
 To run the app on iOS (have an iOS emulator):
 
    cd client/mobileApp
    npm run ios
      
   -or-
   
   Open ios\mobileApp.xcodeproj in Xcode
   Hit the Run button

### Testing the application
For testing the application, unit and end-to-end tests were created [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/). To run them, use the following command:
  
     npm test  

