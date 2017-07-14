# Offline virtual wallet Demo App

## Installation

### Development

1. Clone this repo.
2. Run `yarn install`.
3. `git submodule init`
4. `git submodule update`
5. Ensure a device, or emulated Android image is connected (`adb devices`).
6. Run `react-native run-android`.

> If running on a device, run `adb reverse tcp:8081 tcp:8081`.

### ios Development

1.git pull
2.npm install
3.modify scheme in ios project ->product -> scheme ->manage scheme ->double click example
->Click Build in the left -> ‘+’ React -> Drag ‘React’ on the top ->uncheck Parallelize Build
4. npm install --save react-native-vector-icons@4.0
5 yarn install
6 ./node_modules/.bin/rn-nodeify --hack --install
7.drag roboto-black.tff to project/Fonts
8.add robots-black.tff to info.plist under “example”
9.add robots-black.tff to Build Phases “Copy Bundle Resources”
