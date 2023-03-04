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
| Material-ui | React components for faster and easier web development using Material UI |

## Architecture

Project architecture can be described as :

```
currency_converter
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ branches
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ objects
│  │  ├─ 01
│  │  │  └─ b0f9a10733b39c3bbeba1ccb1521d866f8e3a5
│  │  ├─ 08
│  │  │  └─ 0d6c77ac21bb2ef88a6992b2b73ad93daaca92
│  │  ├─ 09
│  │  │  └─ 5aa23e61f021d506c24ff4ddf464ae440073d2
│  │  ├─ 15
│  │  │  └─ d65676e0d679ae5e18f69e3c9a256ad9627b8e
│  │  ├─ 19
│  │  │  ├─ 4fb08204e5e769eb97aa343b6167c5a10d70e2
│  │  │  └─ f24f352d57ac675b6cf6e0c6b9ce229955798d
│  │  ├─ 28
│  │  │  ├─ 6f8ae574649db890832558e7b481c4c44f40bb
│  │  │  └─ 7e43417ebe03078ab0836082c395a6457b05d2
│  │  ├─ 2d
│  │  │  └─ 8decb115712385e635fe808cc187c62cf75c95
│  │  ├─ 35
│  │  │  └─ b48642c6e771866d1600d92297226a23df2fb7
│  │  ├─ 3c
│  │  │  └─ 3629e647f5ddf82548912e337bea9826b434af
│  │  ├─ 3d
│  │  │  └─ 9728a2dbbcd9ffda4a26bd0f900cff4aff812f
│  │  ├─ 44
│  │  │  ├─ bdcb7ab451e31fb25cdf7791cc756472c78eff
│  │  │  └─ c784e1b47d870db377ca472d95e06f27b74019
│  │  ├─ 4b
│  │  │  └─ 825dc642cb6eb9a060e54bf8d69288fbee4904
│  │  ├─ 4f
│  │  │  └─ d29fc291c79975bd32cfe56a400a1e949473e8
│  │  ├─ 50
│  │  │  └─ d08d03a7da36191e5ae0095819ed120c360c8a
│  │  ├─ 52
│  │  │  └─ f5172e1f34895cda43183b234751eac958f107
│  │  ├─ 54
│  │  │  └─ 4ec48c1530a8ef65d755d24f4e17b2aeb864e1
│  │  ├─ 55
│  │  │  ├─ 3fb3983e64f8b86585b0958366bdf530d9de7a
│  │  │  ├─ 7b37c44d5cb352ff331f90e7fba0189cdfa65e
│  │  │  └─ fa33b8c2c865c928f22875b3db5097b5989d9c
│  │  ├─ 5a
│  │  │  └─ 33944a9b41b59a9cf06ee4bb5586c77510f06b
│  │  ├─ 5c
│  │  │  └─ 543ff77405b55648542596e9b80c729fb7bf25
│  │  ├─ 5d
│  │  │  ├─ 6194de68d80bcaa39c703e0cf03a6fc15b3214
│  │  │  └─ fcfb6da57612988b1b0c9463e09891ba30653b
│  │  ├─ 5e
│  │  │  └─ 3ebe1c9ec137f81cada122c83e70950377fb35
│  │  ├─ 6e
│  │  │  ├─ bdfce90b8f7a585e10504976cbabcea1f7e6a0
│  │  │  └─ c470b17c55ded8bf4f8ae606b0407ee26832be
│  │  ├─ 71
│  │  │  └─ db75ef588a6e94c34df508b06e702cac79f442
│  │  ├─ 78
│  │  │  └─ a89a0e678a3b92b1ca5bf0cd4223d44b3cb2d6
│  │  ├─ 7a
│  │  │  └─ 70597470fef1eecfd08016734bd7bd82a729dc
│  │  ├─ 82
│  │  │  └─ 571e0e11f106901de396cdf6d70b492a269cea
│  │  ├─ 83
│  │  │  └─ a44648bdc33cf756c6c723793d7e204b53308a
│  │  ├─ 85
│  │  │  └─ 3506d49edc0a1cd3d86b17e7f8b94cfadb65dc
│  │  ├─ 86
│  │  │  └─ 845fde2bcd0be3ba3234dbdd47d59674ffb1c0
│  │  ├─ 88
│  │  │  └─ 3ebb61bccc0ce3e9e081a542a5f0c22457853d
│  │  ├─ 8a
│  │  │  └─ 9e69c13935c3ae33617f4b29e5b38367056f94
│  │  ├─ 8e
│  │  │  └─ 2a415e1ac2aa191153366d2fadd9681ae13139
│  │  ├─ 90
│  │  │  ├─ 1571481027c21bcbd13cdf94732a4ed93a8f0c
│  │  │  └─ 6ca16ab50df941e6b4e34b5ebf2c4fa994e049
│  │  ├─ a5
│  │  │  ├─ 08314de21c977179897e74d2bce3f4e5dc88b1
│  │  │  ├─ 47bf36d8d11a4f89c59c144f24795749086dd1
│  │  │  └─ b58edb3559537360c7151bed1502cd7a06706a
│  │  ├─ a6
│  │  │  ├─ 724614c6d7ad9513250b1116c898b70b47eab4
│  │  │  └─ bcba5d2da9519342286daa885ae3eb4bcf8e29
│  │  ├─ a7
│  │  │  └─ bcc7da705d08858f7f4abb8ebd6922f702b94d
│  │  ├─ ab
│  │  │  └─ d0b5d02bc68a860a8c6af98914a890e8bba0f2
│  │  ├─ ae
│  │  │  └─ 3c8d973612444c6bf00b4956bfada3f7b81fe6
│  │  ├─ b0
│  │  │  ├─ 35474296d5f80de580f95a7aaca3fbcb02e5ea
│  │  │  └─ 5883a99dcd00aa149b56e33c8d37e3e5cef6ad
│  │  ├─ b3
│  │  │  ├─ b59457e29620de079bf40dc540c9a50d28efa1
│  │  │  └─ e7aebe2d16f9c938782eb5c009b9268b2e852c
│  │  ├─ bd
│  │  │  └─ 5d4b5e235ab9d880c202a6a7f7d3e35e115d8c
│  │  ├─ c2
│  │  │  ├─ 40d2ca8b0f6337eb440695f17829e3bada5ed1
│  │  │  └─ c86b859eaa20639adf92ff979c2be8d580433e
│  │  ├─ c5
│  │  │  └─ 570d2a61e4a7da0a0eb16234d34a4a94d132c9
│  │  ├─ c8
│  │  │  └─ f6d5601cb7a8d8b3765bdaa6ce00da483dffc7
│  │  ├─ c9
│  │  │  └─ 9b72cae0bc638ef952fdeaed3457807c8c9ee3
│  │  ├─ d2
│  │  │  └─ eb3620c590fae5faa4be62343e3eb8fa696426
│  │  ├─ db
│  │  │  ├─ 477e3e538c8fe4a53832b9a2e9b7af29c4f5fc
│  │  │  └─ 5db6b574750de5f496455fc0d6641ca1c57891
│  │  ├─ de
│  │  │  └─ 85d5d4c8d064447c897af425a704836ac9a7e0
│  │  ├─ e6
│  │  │  └─ 9de29bb2d1d6434b8b29ae775ad8c2e48c5391
│  │  ├─ e7
│  │  │  ├─ 7f3bb10dc0d3b10ab6976b57ea34ffb5da6531
│  │  │  └─ b8dfb1b2a60bd50538bec9f876511b9cac21e3
│  │  ├─ ef
│  │  │  ├─ 361d48fcd072c325b79d4f022d3560f09f24a3
│  │  │  └─ cdaad6ea7d402efbeb8e4233c445b313f308d8
│  │  ├─ f3
│  │  │  └─ d74fa73c445ba1d5dbd7808d0f6fc77bfe09fb
│  │  ├─ f4
│  │  │  ├─ bb0c8385879dd18107c61d90e732df13cb45df
│  │  │  └─ d336fdf7d1efe39c1a976fc5c77e15d53f77bd
│  │  ├─ fa
│  │  │  └─ 313abf53936aefc517dbd583b724a57199d415
│  │  ├─ fc
│  │  │  └─ 992d3d216c7935746ed0a7181b2817e6fbae48
│  │  ├─ fd
│  │  │  └─ 4d0608cd44eb182fed769525d923e82a715aad
│  │  ├─ ff
│  │  │  └─ e895f6727e7d09f08fd70614c5a6e3c3b09c0e
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .gitignore
├─ README.md
├─ package-lock.json
├─ package.json
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