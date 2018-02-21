importScripts('/.nuxt/dist/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "alpha",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/.nuxt/dist/0.0328dc6df6080d3cff1d.js",
    "revision": "52fd649a6d1a82e74295c456de1cf87d"
  },
  {
    "url": "/.nuxt/dist/1.9d82b72ffd553166e7ea.js",
    "revision": "d1f2d5386f3887debe591adc020206c5"
  },
  {
    "url": "/.nuxt/dist/10.847221bb4ae93c3ce60c.js",
    "revision": "f28d586d555c54e85622df7b4c600bd6"
  },
  {
    "url": "/.nuxt/dist/11.095c21773678562727e7.js",
    "revision": "77a43eb7cb8de04dd6b08ca9d38404c8"
  },
  {
    "url": "/.nuxt/dist/12.215acbb54ed1dbe700e7.js",
    "revision": "faa409a77843b6ec42c4576603f1d7c4"
  },
  {
    "url": "/.nuxt/dist/13.d116cd583a454986baff.js",
    "revision": "18b8a51fd82dc742b22d3facdd94022a"
  },
  {
    "url": "/.nuxt/dist/14.554f1ba509e8832d3412.js",
    "revision": "d808af222ee97ca410af53bb0b0a7c6e"
  },
  {
    "url": "/.nuxt/dist/15.6a805acca0786d0ebebd.js",
    "revision": "272b25abb08a30a9d182febc09cd64fd"
  },
  {
    "url": "/.nuxt/dist/16.aabb9e0c721aa6eb270e.js",
    "revision": "e4ae08cdc3f6b910f76fa1cb1045dfc5"
  },
  {
    "url": "/.nuxt/dist/17.b436a0fd3e3cb064f739.js",
    "revision": "79dc0589db9260ad56a960f99397bfb9"
  },
  {
    "url": "/.nuxt/dist/18.740766ecd67ffb01d3af.js",
    "revision": "78a84698d6322c9540ade8535cd90f73"
  },
  {
    "url": "/.nuxt/dist/19.15aa110cf747874bce49.js",
    "revision": "fd0182c5128f0860ec8cc6515cecfb22"
  },
  {
    "url": "/.nuxt/dist/2.d53da5e514291dbc227c.js",
    "revision": "31437641ba4012ac8f682fde317272d6"
  },
  {
    "url": "/.nuxt/dist/20.17ba23c22c08ca5a96b1.js",
    "revision": "54644259338958277369a07e01bc561a"
  },
  {
    "url": "/.nuxt/dist/21.01446db0c8efd274aea7.js",
    "revision": "b23448944512ce4c330fb6c917bb114a"
  },
  {
    "url": "/.nuxt/dist/22.7b717270a4c77d2339fb.js",
    "revision": "7038383f6ee448c30494af1d051f1c81"
  },
  {
    "url": "/.nuxt/dist/23.ddf16ac563b723627ead.js",
    "revision": "737114baf146eccd58f88974d77f9f02"
  },
  {
    "url": "/.nuxt/dist/24.3baac2c462b0b880e3dd.js",
    "revision": "6df2497dda3fd5a2dcb54f618a8a1ec7"
  },
  {
    "url": "/.nuxt/dist/25.92c5a1d47713bdbc7420.js",
    "revision": "a63d818c7b290b0fbb5ae2f35efad943"
  },
  {
    "url": "/.nuxt/dist/26.c3f982f6cc3329d10224.js",
    "revision": "507bd9e3fa1d4bac5e5c842d4b7dbfef"
  },
  {
    "url": "/.nuxt/dist/27.bf0455f08705a71c85a5.js",
    "revision": "0b6353947c299b1aa9d6b859859ef443"
  },
  {
    "url": "/.nuxt/dist/28.ffb5bd02279757db10f6.js",
    "revision": "97530c472fb2935a2bdc54cede4324c9"
  },
  {
    "url": "/.nuxt/dist/29.5dc577a2cca46a7cc17b.js",
    "revision": "08346838d85c04b68e5d399958801dc7"
  },
  {
    "url": "/.nuxt/dist/3.bdf23a6c8adf45b5093c.js",
    "revision": "c1fd1ec7d9f1604f1580941b60601115"
  },
  {
    "url": "/.nuxt/dist/30.c8229b22808a4564cbdb.js",
    "revision": "adf5c4e46f5605f4dd2ad4831a562689"
  },
  {
    "url": "/.nuxt/dist/31.d247a3c594fd8bc59fc8.js",
    "revision": "4bc3e7586cb767f0d0809fcfb65a742b"
  },
  {
    "url": "/.nuxt/dist/32.236fa1e8d9439da09758.js",
    "revision": "2fe46e56c65eaf8d620a28c2c6032db5"
  },
  {
    "url": "/.nuxt/dist/33.903b9a98ec4946b22330.js",
    "revision": "66151aa68ad88307277ada65299af601"
  },
  {
    "url": "/.nuxt/dist/34.036f034cbcf79057f768.js",
    "revision": "12321b6d23e27d922c9da4522bc3336e"
  },
  {
    "url": "/.nuxt/dist/35.c4ac6401b04cad56462d.js",
    "revision": "dfa708b31511d7a9cc7217ada4ee61d2"
  },
  {
    "url": "/.nuxt/dist/36.955e04884d28d0a2d27d.js",
    "revision": "9c236034eacf24188473a33ec4c10bcb"
  },
  {
    "url": "/.nuxt/dist/37.cba027770faf3baafdd5.js",
    "revision": "aa63f36315d8dcf35a84ba4f998fa2b3"
  },
  {
    "url": "/.nuxt/dist/38.1c4668d4e85e6a0bcfdc.js",
    "revision": "40dc566967b93be9c9703fb132669d6a"
  },
  {
    "url": "/.nuxt/dist/39.e161683c5d5f3c17196a.js",
    "revision": "c4392640014c828f0f46b7cb33587ad8"
  },
  {
    "url": "/.nuxt/dist/4.21ef208ffc190360cd70.js",
    "revision": "6d23cece04b51c8db1b628cf9a871c8c"
  },
  {
    "url": "/.nuxt/dist/40.a9f329c43468c1d2b008.js",
    "revision": "faeb574726fe5550598de1fa6be2cd21"
  },
  {
    "url": "/.nuxt/dist/41.90cd239749ff6419b53f.js",
    "revision": "52552b30c1ec969cd31728c842b03fa0"
  },
  {
    "url": "/.nuxt/dist/42.44e07e284c51057c8dc8.js",
    "revision": "aa213b466f6b1f1a9069ee083f7444c3"
  },
  {
    "url": "/.nuxt/dist/43.063b7879ee7ed4f42ef8.js",
    "revision": "53143f24edec5a799dbe15f8232251d0"
  },
  {
    "url": "/.nuxt/dist/44.f14364debfc26b9aa54b.js",
    "revision": "bdda1b7a0784a606dfcd607a24363846"
  },
  {
    "url": "/.nuxt/dist/45.8b5d88606bc110f694c1.js",
    "revision": "5b332e14bdfa51408ff9908f9bcc3b53"
  },
  {
    "url": "/.nuxt/dist/46.dfec18eefb69a9b0de0b.js",
    "revision": "a33c8fd76b085e8d4285b4039efa00b8"
  },
  {
    "url": "/.nuxt/dist/47.bf3118f829f56b1c8236.js",
    "revision": "35fce14fb0576181e64d667c84da87ce"
  },
  {
    "url": "/.nuxt/dist/48.02869e2f695dd735a973.js",
    "revision": "2f757baadb596a0e496dc982247c66d4"
  },
  {
    "url": "/.nuxt/dist/49.4be47d1645d0f0f39717.js",
    "revision": "695e2f095e42703a1cf2952df6f8e25f"
  },
  {
    "url": "/.nuxt/dist/5.1a0d73ce484428a72157.js",
    "revision": "e5e273a3ed2e0030e7bd29ffbae9b030"
  },
  {
    "url": "/.nuxt/dist/50.5b304f89f31dd88e21c1.js",
    "revision": "888847c20cd95572e55e4abcffa27e59"
  },
  {
    "url": "/.nuxt/dist/51.e378f8cd46f9b5163276.js",
    "revision": "d8cd9b7500a8cb278ec2b06149ca63c9"
  },
  {
    "url": "/.nuxt/dist/52.d00dc2fe37b7a65a078d.js",
    "revision": "474655ef60b4b997830537add0edd6f7"
  },
  {
    "url": "/.nuxt/dist/53.48bca53da02735f7823a.js",
    "revision": "3078f1b12c1d3b979dd143cb76cadcb1"
  },
  {
    "url": "/.nuxt/dist/54.ccbc7975d3c17869c235.js",
    "revision": "0031282368e1bbf279ae1b8d47fde396"
  },
  {
    "url": "/.nuxt/dist/55.5d54814987a50bc3fc44.js",
    "revision": "1c4d075eedf8786b4e207b715f54a879"
  },
  {
    "url": "/.nuxt/dist/56.e41a29bc0c5ee3b11157.js",
    "revision": "7e445ad6df46b1865021d7d3f3168685"
  },
  {
    "url": "/.nuxt/dist/57.9209351c7fdcab5a1e43.js",
    "revision": "1199f2c3cc14d1bb8a7fb0bc161aa514"
  },
  {
    "url": "/.nuxt/dist/58.62c7b3b3423f527d419f.js",
    "revision": "cba91684e67ebb29c8d4bdc8d4a9a5a8"
  },
  {
    "url": "/.nuxt/dist/59.6987ffe89ec1dd12f8d9.js",
    "revision": "1e1bd6e9e8685d6c3640bd41144b1bb0"
  },
  {
    "url": "/.nuxt/dist/6.b4c6578f8f656318b591.js",
    "revision": "15b67bed39370cede2299f9915c62a22"
  },
  {
    "url": "/.nuxt/dist/60.84193fb982c23f9c86dd.js",
    "revision": "7d78a123375e277ecce57af06f28f9ff"
  },
  {
    "url": "/.nuxt/dist/61.bc556138cfe36743cd8f.js",
    "revision": "d0e55bf195be3d526b685a0b28677b37"
  },
  {
    "url": "/.nuxt/dist/62.b94277d86fda87892c3c.js",
    "revision": "c2d112a8d1774bdc63807d693b2d3f88"
  },
  {
    "url": "/.nuxt/dist/63.45652cf3e44e46b39532.js",
    "revision": "5b8534585d550f61c060da8e4291eb09"
  },
  {
    "url": "/.nuxt/dist/64.e84dc0d2b4c72d97d393.js",
    "revision": "92a632039d862dd2272a7c540e8e4c8d"
  },
  {
    "url": "/.nuxt/dist/65.814e8c878e3a7aa7f336.js",
    "revision": "2333e084742b4d504ad6ace4ac5cb4e3"
  },
  {
    "url": "/.nuxt/dist/66.dd12d30015abea469191.js",
    "revision": "0b84b0f5dd96c8d2e863536cd635af9c"
  },
  {
    "url": "/.nuxt/dist/67.8ace791540f96111454e.js",
    "revision": "cb4a278dc360e7965a7522a4423ffced"
  },
  {
    "url": "/.nuxt/dist/68.2af700d66589538603b2.js",
    "revision": "c1a2e758f4e4f0a6223ae25f3afd9d4d"
  },
  {
    "url": "/.nuxt/dist/69.ea3dac6d3bee726d54e1.js",
    "revision": "c3b90af6b31f197b11af528d7be03dd1"
  },
  {
    "url": "/.nuxt/dist/7.4541e3b58dfc289ad487.js",
    "revision": "98f09e3979eea2c5f3bca0cdba23d41b"
  },
  {
    "url": "/.nuxt/dist/70.226d913aed4cdf6e0651.js",
    "revision": "cf04ba6e66497ed368f614abb30e9986"
  },
  {
    "url": "/.nuxt/dist/71.094372e1419f47485d63.js",
    "revision": "7cb7e410f73d242d2efad4124b909d04"
  },
  {
    "url": "/.nuxt/dist/72.2fc02745ab287cd53c6e.js",
    "revision": "0401f5588086ba8e7934c8bab06a88b1"
  },
  {
    "url": "/.nuxt/dist/73.6926245c4e6b0f8fd693.js",
    "revision": "b270445d69ec7b48632d74a2a497d563"
  },
  {
    "url": "/.nuxt/dist/74.289585173f58c45c1ef2.js",
    "revision": "4d889fbd00d6a004ced6299dc970b7de"
  },
  {
    "url": "/.nuxt/dist/75.21af486c62fa17e62624.js",
    "revision": "3a1ddb7c34e31c7a4d2fea5150fde66b"
  },
  {
    "url": "/.nuxt/dist/76.c2592923697cc7a7e618.js",
    "revision": "ae50a8b6593fafc1849ad09dc4a08a22"
  },
  {
    "url": "/.nuxt/dist/77.bf207065f52d85b1f01d.js",
    "revision": "5004e1d3c703cfb1bd9dad528db241d5"
  },
  {
    "url": "/.nuxt/dist/78.ce2b1ecca981e55fa5b7.js",
    "revision": "772dfe2dbb7ce7a727429c82b16d05c2"
  },
  {
    "url": "/.nuxt/dist/79.33a7aa71901686361f98.js",
    "revision": "fb6076936ffa9d445055f32522b76842"
  },
  {
    "url": "/.nuxt/dist/8.ac1f51f9e9419d651903.js",
    "revision": "5412e094df3bef822eef2cd27ba7702c"
  },
  {
    "url": "/.nuxt/dist/80.290f12c76eac4c010fa1.js",
    "revision": "f66f5328aedfc325d12d03a653fc09f7"
  },
  {
    "url": "/.nuxt/dist/81.42e544d040a5057116e9.js",
    "revision": "b8f1d2131246dbfeffab762b68185230"
  },
  {
    "url": "/.nuxt/dist/82.70648ec476992eccdcec.js",
    "revision": "fcaf6be234ad74bd296b63687b9a2fe7"
  },
  {
    "url": "/.nuxt/dist/83.ac3bab00ce0cc6734a1b.js",
    "revision": "06f7a2ab422999a3adce738fdb02f012"
  },
  {
    "url": "/.nuxt/dist/84.94790468e64b1902f8ba.js",
    "revision": "3a3207f37378a7f6ec95c4db5dd1738c"
  },
  {
    "url": "/.nuxt/dist/85.4ac159a3c4b20499d86c.js",
    "revision": "56bcb13b28e411966de2fac2b9487a69"
  },
  {
    "url": "/.nuxt/dist/86.24bc88f3ccbbe9210555.js",
    "revision": "bde630189562646b8fc24a0f947b1ab7"
  },
  {
    "url": "/.nuxt/dist/87.bdc43930a7b5e3456d24.js",
    "revision": "550281b811bd45f2a6be5b3abc2946cd"
  },
  {
    "url": "/.nuxt/dist/88.66f3879e290b9f837b25.js",
    "revision": "218da41c47f3dba6ae0c21913e42eca8"
  },
  {
    "url": "/.nuxt/dist/89.98c46f07f5b4a72eabe2.js",
    "revision": "d3438233900e99f9cd697664a9d771bc"
  },
  {
    "url": "/.nuxt/dist/9.864f9f89f4920577ab4b.js",
    "revision": "6ca1434e213163c0e31fc897f313add5"
  },
  {
    "url": "/.nuxt/dist/90.2c15d9c741b63d5abc2e.js",
    "revision": "2d9e08263875b29e5f2424f7648642fb"
  },
  {
    "url": "/.nuxt/dist/91.edb02bd27ffacf592a69.js",
    "revision": "a78a95928227e87fdecc019221e525b8"
  },
  {
    "url": "/.nuxt/dist/94.c2fc6d22f1e912fda57e.js",
    "revision": "438f463cdb8893e9b558b712b13c9b4b"
  },
  {
    "url": "/.nuxt/dist/95.ae26f66a36f29e975b2d.js",
    "revision": "c275e3ce9a9b1a1395fe86478934964d"
  },
  {
    "url": "/.nuxt/dist/app.680b9c519ef9d0b2f0bb2d5a40de4e39.css",
    "revision": "680b9c519ef9d0b2f0bb2d5a40de4e39"
  },
  {
    "url": "/.nuxt/dist/app.9ca0bd263a54092c931b.js",
    "revision": "fd9b90b4715e66511b2a9f7b682a09ff"
  },
  {
    "url": "/.nuxt/dist/manifest.c7c3bb8c507e415120da.js",
    "revision": "ac0bf5d6e34ba67e9e5c7375a24c6396"
  },
  {
    "url": "/.nuxt/dist/vendor.545de929939bb5d42e56.js",
    "revision": "f18134e02bc4e11dddd21fc994ee7f05"
  }
])


workboxSW.router.registerRoute(new RegExp('/.nuxt/dist/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

