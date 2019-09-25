# SHWBApp
Student health and well being app UA - 
This app is for students at the University of Alabama to help them answer questions about their heealth and wellbeing, monitor their progression and connect them to resources that the university offers.
# Build
The following applications are required to build the app.
- React Native CLI
- Node, Python2, JDK
- Android Studio

Follow the [Getting Started](https://facebook.github.io/react-native/docs/getting-started) to install those dependencies, it is important to make sure each step done correctly.

Assuming you have Git installed on your computer, clone the repository
In terminal
```
git clone https://github.com/fdbostwick/SHWBApp.git
cd SHWBApp\app\client
```

Next, install all packages
```
npm install
```

Then create your own Keystore file, leave the answers empty except 'yes' for last question
```
cd android\app
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

Open Android Studio, Select `Tools-AVD Manager`, create your vitual device and make sure API is `28`

Then right click on the device, select `Cold Boot Now`, wait for home screen show up

In terminal, go back to `client` folder `cd ..\..`
Note: Delete old app in the emulator if it is installed already
```
react-native run-android
```
