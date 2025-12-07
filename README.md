PROJECT OVERVIEW:
The app has two main pages: Home and Build Info. On the Home page, there are two buttons, one to check for updates and another to navigate to the Build Info page. The Build Info page displays important app details such as build number, version, platform, and update channel, giving users a clear view of the current app status.

HOW TO RUN THE APP:

Register
Register as a new user on the EAS website: https://expo.dev/eas

Install EAS CLI
Run: npm install -g eas-cli

Check EAS Version
Run: eas --version

Login
Run: eas login

Configure and Initialize Project
Run: eas build:configure
Run: eas init

Build Commands

For Testing Purposes

Android: eas build --platform android --profile preview
iOS: eas build --platform ios --profile preview

For Production Purposes

Android: eas build --platform android --profile production
iOS: eas build --platform ios --profile production


OTA UPDATE:

npx expo install expo-updates

in App.json add this extension:
{
    "updates": {
    "enabled": true,
    "fallbackToCacheTimeout": 0,
    "url": "https://u.expo.dev/YOUR_PROJECT_ID"
    },
    
    "plugins": [
    "expo-updates"
    ]
}

in eas.json Add this:
{

"update": {
 "url": "https://u.expo.dev/YOUR_PROJECT_ID"
 },
 "build": {
 "development": {
 "channel": "development"
 },
 "preview": {
 "channel": "preview"
 },
 "production": {
 "channel": "production"
 }
 }

}

Build Commands

For Testing Purposes

Android: eas build --platform android --profile preview
iOS: eas build --platform ios --profile preview

For Production Purposes

Android: eas build --platform android --profile production
iOS: eas build --platform ios --profile production


Update: eas update --channel YOUR_PREFERRED_CHANNEL --message "Your update message"
