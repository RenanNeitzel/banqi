# BanQi
PJ Trybe Coding Challenge

This project aims to showcase my skills as a Front End developer for the React Native Front End developer opportunity at Banqi.
The App's main objective is to give the customer the possibility to register a company, see its details, search for a list of all registered companies and edit a specific company..

I hope it surprises you and that you enjoy this project!


## Pre-requisites

- [Node.js > 12](https://nodejs.org) and [yarn](https://yarnpkg.com/)
- [Watchman](https://facebook.github.io/watchman)
- [Xcode > 10](https://developer.apple.com/xcode)
- [Cocoapods](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK > 21](https://developer.android.com/studio)


## Base dependecies

- [react-navigation](https://reactnavigation.org/) navigation library;
- [axios](https://github.com/axios/axios) for networking;
- [native-base](https://nativebase.io/) UI/UX library;
- [react](https://pt-br.reactjs.org/) JavaScript library;
- [react-hook-form](https://react-hook-form.com/) Form manager;
- [react-native](https://reactnative.dev/) for native apps using React;
- [react-native-gesture-handler](https://docs.swmansion.com/react-native-gesture-handler/docs/) to replace React Native's built in touch system called [Gesture Responder System](https://reactnative.dev/docs/gesture-responder-system);
- [react-native-masked-text](https://github.com/benhurott/react-native-masked-text) masked text component for React Native;
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) flexible way to handle safe area, also works on Android and Web;
- [react-native-screens](https://github.com/software-mansion/react-native-screens) for expose native navigation container components to React Native;
- [react-native-svg](https://github.com/react-native-svg/react-native-svg) provider SVG support to React Native on iOS and Android, and a compatibility layer for the web;
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) icons library;
- [react-query](https://github.com/tannerlinsley/react-query) hooks for fetching, caching and updating asynchronous data in React;
- [styled-components](https://styled-components.com/) visual primitives for the component age.


## Usage

#### Running project

You can start by cloning this repository.

Run yarn to install all dependencies.

### Option Android

Make sure you have all pre-requisites in minimum version or newer.

1. Run metro in your terminal: `yarn start`;

2. Run build command in other window of your terminal `yarn android`

if successful, the android simulator will open and run the app.


### Option iOS

Make sure you have all pre-requisites in minimum version or newer.

1. Go to iOS path of project and run `pod install`

2. After install all dependencies and generate Pods projetct, run the metro `yarn start`

3. Run buld command in other window of your terminal `yarn ios`


## Flows and functionalities

### - Início

On this screen, you have the options to:

- Search company by CNPJ

- Register new company


<img width="516" alt="Screen Shot 2022-03-13 at 21 24 50" src="https://user-images.githubusercontent.com/41584304/158086181-b34d557b-e620-4b4d-988d-343ea5b1f20d.png">  <img width="449" alt="Screen Shot 2022-03-13 at 21 25 06" src="https://user-images.githubusercontent.com/41584304/158086202-0fd46ee0-3f4f-40b5-99b1-b3ffa10b12a8.png">


On this screen, you have the options to:

- Search company by CNPJ

- Register new company



### - Lista de empresas

On this screen, you can see all registered companies and can select any company to see details.

<img width="472" alt="Screen Shot 2022-03-13 at 21 26 57" src="https://user-images.githubusercontent.com/41584304/158086304-c2a896e2-fc39-4927-ac2a-7b1924438647.png">   <img width="449" alt="Screen Shot 2022-03-13 at 21 27 06" src="https://user-images.githubusercontent.com/41584304/158086312-40f34f27-984a-4b49-aa83-477fcd6baac4.png">



### - Detalhes da empresa

On this screen you can see all details company selected. You have the option to edit it.

<img width="516" alt="Screen Shot 2022-03-13 at 21 32 46" src="https://user-images.githubusercontent.com/41584304/158086535-f525fcd4-1ac7-48b0-be7d-d3fbc0719d55.png">  <img width="449" alt="Screen Shot 2022-03-13 at 21 32 53" src="https://user-images.githubusercontent.com/41584304/158086552-d24a3b80-705f-4ef0-95fc-23db270e4895.png">



### - Cadastro da nova empresa

Here, you can fill in all the fields to register a new company. After register, you go automacally to company details.

<img width="516" alt="Screen Shot 2022-03-13 at 21 36 55" src="https://user-images.githubusercontent.com/41584304/158086716-0f7bc581-edb6-4c74-a667-6f9289074be5.png">   <img width="449" alt="Screen Shot 2022-03-13 at 21 37 03" src="https://user-images.githubusercontent.com/41584304/158086723-fb0e8a09-966d-45ef-815b-494958fa1f95.png">



### - Editar empresa

After request edit company on "Detalhes da empresa" screen, you can change the information you want and click the confirm button to update the company data. After confirm, if success you go automatically to company details screen.

<img width="516" alt="Screen Shot 2022-03-13 at 21 41 46" src="https://user-images.githubusercontent.com/41584304/158087072-143d06e5-a235-42cf-af12-1fbb04d7442d.png">   <img width="449" alt="Screen Shot 2022-03-13 at 21 41 57" src="https://user-images.githubusercontent.com/41584304/158087078-e8510dfc-2c01-44a9-8aaf-96e9ebe9ec69.png">



### - Perfil

Here, you can find out a little more about the person responsible for the project.

<img width="516" alt="Screen Shot 2022-03-13 at 21 40 58" src="https://user-images.githubusercontent.com/41584304/158087128-37e29ac0-67d8-4d89-b3a7-7baacc25c1e3.png">   <img width="449" alt="Screen Shot 2022-03-13 at 21 41 06" src="https://user-images.githubusercontent.com/41584304/158087134-55b7e783-4055-458b-9a64-0f393de6231c.png">



## Questions/Improvements

Any question or improvements requests, you can open an issue or contact me directly, if you have my contacts.


Tks!

