# Facebook Clone With React( Hooks + Context API) and Firebase Authentication

#### Live Project: https://facebook-clone-96271.web.app/

## SnapShot
![picture](https://res.cloudinary.com/kirankumargonti/image/upload/v1599566713/GituHub/facebook_ikpj8z.png)

## Quick Start

    # Clone the application
    git clone https://github.com/kirankumargonti/facebook-clone.git

    # Install dependencies
    npm install

    # Serve on localhost:3000
    npm start


## Project Setup

### 1. Firebase Setup

- [ Create a Project and add Firebase Configuration](https://firebase.google.com/docs/web/setup) to

  - src / firebase.js file it looks like this

  ```
  const firebaseConfig = {

      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ": "",
      measurementId: ""

  };
  ```

### 2. Google Authentication

- Goto Authentication tab left side in the project Dashboard
- Enable [Google Authentication](https://firebase.google.com/docs/auth/web/google-signin) to your project


### 3.Database Setup
  - Goto Firestore tab left side in the project Dashboard

  - Create a  **posts** collection

### 4. Hosting

    # Install firebase tools
    $ npm install -g firebase-tools

    # Login to firebase
    $ firebase login

    # Initialize your firebase project
    $ firebase init

    # Important Steps
        - Use an existing project
        - What do you want to use as  your public directory?
          build
        - Configure as a single-page app 
          (rewrite all urls to /index.html)? Yes
        - File build/index.html already exists. Overwrite? No

    # Build for production
    $ npm run build

    # Deploy to firebase
    $ firebase deploy


## For more information refer Firebase docs 
https://firebase.google.com/docs
