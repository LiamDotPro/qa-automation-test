# E2e tests

## Configuration (Android only)

Need to setup an Android emulator through the emulator command or Android Studio,
and give the name of it on `.detoxrc.json` under the `devices.emulator.device.avdName` property

Or you can create an emulator with this name and API `Pixel_4_API_29`

Run Metro by using the script from package.json 
```
npm start
```

(optionally) You can build the app and deploy into the Android device
```
npm run android
```

## Executing the tests

Execute the tests (make sure you don't have any running Android emulator, 
this can cause some problems with the test runner)
```
npm run test:e2e
```