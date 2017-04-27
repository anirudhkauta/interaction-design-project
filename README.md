# Interaction Design Project

Installation
Clone the repository from github
  git clone https://github.com/anirudhkauta/interaction-design-project.git

cd into the repository and run
  npm install

Next we need to debug one of the node dependancies.
Go to interaction-design-project/node_modules/react-native-scrollable-tab-view/SceneComponent.js
You should see the line
  const StaticContainer = require('react-native/Libraries/Components/StaticContainer.react')
change it to
  const StaticContainer = require('react-native/Libraries/Components/StaticContainer')
The code should now be successfully installed.


Next, you will need to install Expo XDE from https://docs.expo.io/versions/v16.0.0/introduction/installation.html
You will also need to install Expo from the app store.
This will allow you to test the app on an Android or iOS device with hot reloading.
NOTE: Development is behind on Android

To test the app, run Expo XDE. You may be prompted to create an account.
After you are signed into Expo, click "Project" in the toolbar, click "Open Project", and select the git repository.
After the project is loaded, click send link, type your phone number, and send the link. You should receive a text message.
When you click the link on your phone, it should open in the Expo app.
  If you are using an Android and immediately get an error, you will need to follow additional steps.
  On you computer, click the settings icon next to the tunnel URL and change the protocall to http.
If you receive any additional errors, consult Expo's documentation https://docs.expo.io.
