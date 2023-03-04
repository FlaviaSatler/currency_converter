# Currency Converter

An old React app - Just for fun

## How to run

Clone the repository

```
git clone git@github.com:FlaviaSatler/currency_converter.git
```

Navigate to the folder created after the clone and install all the dependecies executing the command:

```sh
npm install
```

## Visual Demo

![](https://imgur.com/a/ZioRik8.gif)

## Libraries Used:

Below you can see the libraries used on this application
| Name | Function |
| :--------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| Create react app | Create React App is an officially supported way to create single-page React applications. |
| Axios | Promise based HTTP client for the browser and node.js |
| Bootstrap | The most popular CSS framework for developing responsive and mobile-first websites |

## Architecture

Project architecture can be described as :

```
currency_converter
├─ public
│  ├─ favicon.ico
│  ├─ index.html
│  ├─ logo192.png
│  ├─ logo512.png
│  ├─ manifest.json
│  └─ robots.txt
└─ src
   ├─ Components
   │  ├─ CurrencyConverter
   │  │  ├─ CurrencyConverter.css
   │  │  ├─ CurrencyConverter.js
   │  │  └─ test
   │  │     └─ CurrencyConverter.test.js
   │  └─ CurrencyList
   │     ├─ CurrencyList.js
   │     └─ test
   │        └─ CurrencyList.test.js
   ├─ __mocks__
   │  └─ axios.js
   ├─ index.css
   └─ index.js

```
