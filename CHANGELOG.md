# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/RenanNeitzel/banqi/compare/v1.0.0...v1.1.0) (2022-03-14)


### Features

* **address search:** add endpoint to address search and apply on AddressForm ([2c51b3a](https://github.com/RenanNeitzel/banqi/commit/2c51b3a83020368fb0146136f568de893de2d30d))
* **resolvenetworkerror:** create resolveNetWorkError and add on response error NewCompany ([6a5030f](https://github.com/RenanNeitzel/banqi/commit/6a5030fb8d4aeef169598de3258b6e145871955f))
* **search address by zip:** integrate searche address by zip ([4f84538](https://github.com/RenanNeitzel/banqi/commit/4f84538c9384c265adb34aad767029177c473566))


### Bug Fixes

* **companies services:** fix format response post company request ([1f613b5](https://github.com/RenanNeitzel/banqi/commit/1f613b5023091994b0b2fdd9eb5eca5c505efd3c))
* **company edit:** adjust company edit request and CompanyEdit screen ([c56e253](https://github.com/RenanNeitzel/banqi/commit/c56e2534d33dba03320b12224f33c19b11c528f7))
* **company list:** adjust params passed to route navigation ([7c632fd](https://github.com/RenanNeitzel/banqi/commit/7c632fd7e7cc73b9e82d729be461e84c11c15a77))
* **get company:** fix getCompany request by id ([2710c45](https://github.com/RenanNeitzel/banqi/commit/2710c45057a04101256ad421fa8bad49cfa583cf))
* **home:** remove campany search of home screen ([198b7b0](https://github.com/RenanNeitzel/banqi/commit/198b7b098899c00fb9fe387b6f7d58a9a8f17c4c))
* **home:** remove unused code ([d8c1b8b](https://github.com/RenanNeitzel/banqi/commit/d8c1b8be66d85fcdd1c0699587074aa52eef9042))
* **new company:** fix params passed to route navigation and params received on CompanyDetails ([b88a5d8](https://github.com/RenanNeitzel/banqi/commit/b88a5d8fff917edf4620de48358ba1b554e4a8e2))
* **number input:** set keyboard type on number input ([74b58cd](https://github.com/RenanNeitzel/banqi/commit/74b58cde2c2ef2a3120735f10b303a9b96d3857a))
* **types company:** fix type id of Company types ([cf1acf9](https://github.com/RenanNeitzel/banqi/commit/cf1acf97ff6719da56029042534bccc5a49908d0))

## 1.0.0 (2022-03-14)


### Features

* add editor config ([499ea9b](https://github.com/RenanNeitzel/banqi/commit/499ea9b1b570ad857de42ed1e24f76f4cd97d6c5))
* add eslint ignore ([76f8e76](https://github.com/RenanNeitzel/banqi/commit/76f8e76d0eb5742b94ad68d29908608563aacd78))
* **architecture:** config babel/ts and adjust paths structure ([5e00e2a](https://github.com/RenanNeitzel/banqi/commit/5e00e2a330cf3c317f516c673b5b3552e262a522))
* **changelog:** add standard-version to generate changelog ([d026b59](https://github.com/RenanNeitzel/banqi/commit/d026b590b5d3529b7ae6c9f636b4b88d4331354a))
* **cnpj format:** create cnpjFormat and apply on List and CompanyDetails ([8511fbd](https://github.com/RenanNeitzel/banqi/commit/8511fbd670bca49e09e9b165ec235dbed7e700cb))
* **company details:** create content company details and integrate ([b7cc81d](https://github.com/RenanNeitzel/banqi/commit/b7cc81dbc110f7eb5378dd5a212682ccd6c8b0e1))
* **company form:** create company form, hooks to set values and apply on NewCompany ([7a42880](https://github.com/RenanNeitzel/banqi/commit/7a42880df31e1d9f90b1cc94aee1d222939960cf))
* **edit company:** create edit company content and your navigations ([7f2e70c](https://github.com/RenanNeitzel/banqi/commit/7f2e70c392fe66c67c42885282abad1b69851e1f))
* **form manager:** install react-hook-form to help manage forms ([97fe49c](https://github.com/RenanNeitzel/banqi/commit/97fe49c19a82be648b2f0b8d887a18dfa038f681))
* **form:** create form components and adjust navigators structure ([a589a92](https://github.com/RenanNeitzel/banqi/commit/a589a92782b3c29ce8c721627042d53038910ca0))
* **get companies:** create getCompanies and call on ListCompanies screen ([e9919b1](https://github.com/RenanNeitzel/banqi/commit/e9919b1a5a554bdefda23af493fde636aee3edcd))
* **get company:** create getCompany with filter by CNPJ ([e3654a1](https://github.com/RenanNeitzel/banqi/commit/e3654a197838ec12dcf9165ecd4761c19843e661))
* **home:** add home content ([b3517b4](https://github.com/RenanNeitzel/banqi/commit/b3517b490ff34e52b822ffad239ff4544c371534))
* **input masked:** install react-native-masked-text to input masked ([cb92024](https://github.com/RenanNeitzel/banqi/commit/cb920242d1da7a8c8da29ae25bb63b52f92f3c26))
* install commitzen and add yarn commit script ([bc062e9](https://github.com/RenanNeitzel/banqi/commit/bc062e9b7ccb3b061dc7f59a2edaf78b17bfaae4))
* install react-navigation and add NavigationContainer ([017e815](https://github.com/RenanNeitzel/banqi/commit/017e81583e48a9747d83ec72c382b0b79f9fc29b))
* **loader:** create loader component ([e8ee3e3](https://github.com/RenanNeitzel/banqi/commit/e8ee3e368f237244c0737a2f840a2b0aabfd3204))
* **module resolver:** install babel-plugin-module-resolver ([95a0591](https://github.com/RenanNeitzel/banqi/commit/95a05914217c1ff69dd42d0d1f8cc6fdb8e27c39))
* **navigation:** create tab bottom and navigators ([c180d05](https://github.com/RenanNeitzel/banqi/commit/c180d05247725ff0d442894e5c8fc2cdad5f4b27))
* **new company:** add form new company with all fields, validates and callback ([e30693b](https://github.com/RenanNeitzel/banqi/commit/e30693b0eb60889581f07ecc018461e2bff66bba))
* **new company:** integrate new company form ([9a84e0d](https://github.com/RenanNeitzel/banqi/commit/9a84e0d149271160b9398760abe065cc87a621b4))
* **profile:** add profile content ([3b8ec0f](https://github.com/RenanNeitzel/banqi/commit/3b8ec0fce5497ca6e7218d115024d525f4d200f8))
* **react query:** install react-query and axios. Setup both on project ([ddae894](https://github.com/RenanNeitzel/banqi/commit/ddae8940480b5d149f4bda1f7f71b72afb7f5b66))
* **templates:** create template, install react-native-vector-icons and create icon component ([d72c9c5](https://github.com/RenanNeitzel/banqi/commit/d72c9c51907d560bb900a3381c3f7b792e8a3181))
* **ui/ux:** install NativeBase and wrap App with NativeBaseProvider ([d753ca5](https://github.com/RenanNeitzel/banqi/commit/d753ca5fcfb7f51009c1701c1a8147e48e722b90))


### Bug Fixes

* **companies list:** create and integrate companies list ([ad27809](https://github.com/RenanNeitzel/banqi/commit/ad278091af38b78681db8b3c383b38247e89d9c2))
* **company details:** add conditional if company not exist ([5c71af1](https://github.com/RenanNeitzel/banqi/commit/5c71af1a0578f54d7b176f90936c4bdde75d1d5e))
* fix icon fonts to android devices ([b222156](https://github.com/RenanNeitzel/banqi/commit/b2221565a238e8b46f46d0273698f9757fd18045))
* **flatlist:** fix flatlist margin bottom ([575c3b7](https://github.com/RenanNeitzel/banqi/commit/575c3b7562655f14c71dba410a20058536b1292c))
* **tabbottom:** improve tab active style of TabBottomNavigator ([e312d9f](https://github.com/RenanNeitzel/banqi/commit/e312d9f0c052ca3e6a221f0a9fe8a7f20767630c))
