'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e6930e840ec20f908a0cbf5247b0de79",
"assets/AssetManifest.bin.json": "f04056987a37efba05ee0e7c73fe2e25",
"assets/AssetManifest.json": "8720b83a9fd86a20a072452725f104c5",
"assets/assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/urbanist/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/urbanist/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/icons/brands/acer_logo.png": "bad7e6dfd1e493a0eec7dbd17b5bf6d5",
"assets/assets/icons/brands/adidas-logo.png": "0f3f8389194ed1ed241d0da8aed2ce2a",
"assets/assets/icons/brands/apple-logo.png": "c4ce4053659c3a3207eeaf371aaee3ef",
"assets/assets/icons/brands/herman-miller-logo.png": "10bd8ec8cd0c4bba565dbfb0ba0b4f30",
"assets/assets/icons/brands/ikea_logo.png": "70ad6aefc75ec6deedf62d9b74e5574c",
"assets/assets/icons/brands/jordan-logo.png": "078952fb9bd15104711c95000edd6b3d",
"assets/assets/icons/brands/kenwood-logo.png": "36915090dde165ce64e0c31fa17c9ac3",
"assets/assets/icons/brands/nike.png": "09160ccfb59f529bf6cdf86bcff0282d",
"assets/assets/icons/brands/puma-logo.png": "d84012c7d498634fe1da2984df8ab479",
"assets/assets/icons/brands/zara-logo.png": "c086ea236c5db660c37165324ef6f8da",
"assets/assets/icons/categories/icons8-bowling-64.png": "27b8ade208244c61a480b6a9cbe0fcfa",
"assets/assets/icons/categories/icons8-cosmetics-64.png": "91350d3fcc3d90819ffe88983c3043f3",
"assets/assets/icons/categories/icons8-dining-chair-64.png": "865ccdf081530ac9b25d1a9c003da8d2",
"assets/assets/icons/categories/icons8-dog-heart-64.png": "b95f05b8890b2a08d246f28a86ec0317",
"assets/assets/icons/categories/icons8-school-uniform-64.png": "71731bca60ec390b9b3d0d6054de1162",
"assets/assets/icons/categories/icons8-shoes-64.png": "7fa3c6c1d2c4f98e96a6b6ad3f48f9f3",
"assets/assets/icons/categories/icons8-smartphone-64.png": "02e78f9f0bd8515f9ab4154bacbd77fd",
"assets/assets/icons/categories/icons8-sparkling-diamond-64.png": "95242a50bd94777c2ed5d912038cf45f",
"assets/assets/icons/categories/icons8-tailors-dummy-64.png": "a4866e0356d01573df25c6954b57cb93",
"assets/assets/icons/categories/icons8-wooden-toy-car-50.png": "96e4a06369b3a1817ffc80c8583db072",
"assets/assets/icons/payment_methods/apple-pay.png": "3c1f533a24ae1a3ea3c7ac9104820b21",
"assets/assets/icons/payment_methods/credit-card.png": "6ffbf260c19fde171b618ce6fb48314a",
"assets/assets/icons/payment_methods/google-pay.png": "5a02c53580e0bd0b61a30e03c886bab4",
"assets/assets/icons/payment_methods/master-card.png": "647f4f9e11f4fa27fc415b1190a1d9e0",
"assets/assets/icons/payment_methods/paypal.png": "1597d2e2a75ec5d8f9ea4fbc40ff7e3d",
"assets/assets/icons/payment_methods/paystack.png": "4a7ac4e8e0a890715d732e007a79864d",
"assets/assets/icons/payment_methods/paytm.png": "a5f0f450edb5fd5512efc780b067d39d",
"assets/assets/icons/payment_methods/successful_payment_icon.png": "c6ecac5e4a7b5ab35be124e482287cd4",
"assets/assets/icons/payment_methods/visa.png": "dcd36d867f0f60f1ddf675f28b460981",
"assets/assets/images/animations/104368-thank-you.json": "cb41def8492745f6da17aa174f24bc18",
"assets/assets/images/animations/110052-paper-plane.json": "f37753fd6490213aafe42c28ce082860",
"assets/assets/images/animations/120978-payment-successful.json": "23257c5bfbb6517be2883084bac86fe7",
"assets/assets/images/animations/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/images/animations/140429-pencil-drawing.json": "ad496d8fba433f392cac58a28f592c5a",
"assets/assets/images/animations/141397-loading-juggle.json": "18cd80a46915ce96176088f6de32cc17",
"assets/assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/assets/images/animations/53207-empty-file.json": "798eedcbdacc86b43851c8f678c4eb83",
"assets/assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/animations/72785-searching.json": "42d6b09696a19c24719a8102a4f093c9",
"assets/assets/images/animations/98783-packaging-in-progress.json": "ad95f6974da0dbcbb295e6ca62997668",
"assets/assets/images/animations/cloud-uploading-animation.json": "1cd38deb1399a0368a650d21dc2fdcab",
"assets/assets/images/animations/congratulation.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"assets/assets/images/animations/default-loader-animation.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/images/animations/lady-adding-product-in-cart-animation.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/assets/images/animations/loader-animation.json": "2f4d8873f57c144c9c1cc001c19fd2fd",
"assets/assets/images/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/assets/images/animations/sammy-line-come-back-later.png": "bb489d0ad837808917ed0b3bd2c17d97",
"assets/assets/images/animations/sammy-line-man-receives-a-mail.png": "05ecfa9b154cb7fe1d4f4339119a3b45",
"assets/assets/images/animations/sammy-line-sale.png": "c8cf76d47496487772f231d41e3673ed",
"assets/assets/images/animations/sammy-line-success.png": "4aaf57cacb9b7514f345bd45cea880e1",
"assets/assets/images/animations/sammy-line-travel-backpack-with-passport-and-air-ticket.gif": "a691c26c3c08c432f68ce4b117dcb6a0",
"assets/assets/images/animations/sammy-line-workout.gif": "32c3916fc369a730a7aa7a6c24b9583e",
"assets/assets/images/animations/tick-confetti.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/uploading-document.json": "a7c973378012ac7a2857955b8c7e6e32",
"assets/assets/images/animations/uploading-done.json": "684c443c716f99421747aae5a9c6ebbe",
"assets/assets/images/animations/uploading-files-from-computer-to-cloud-storage.gif": "ee0de1d1b3bbaeaf6413fe55e8e1dbdc",
"assets/assets/images/content/default-image-icon.png": "adc3e03ee76f67785309b761c731a0c7",
"assets/assets/images/content/default-images-icon.png": "d891e5ee15e14498bdb690461e14d974",
"assets/assets/images/content/default_image.png": "79794da0bf39e1aa1ed0d76ca08ddfde",
"assets/assets/images/content/tiny-color-palette.png": "b7e756302d4e0b3ce3d7ba87fa5b555c",
"assets/assets/images/content/tiny-man-maintaining-a-work-life-balance.png": "4276412c3f27426077b7e8e6dcec184e",
"assets/assets/images/content/user.jpg": "7af9f2268e64db0f9efdcfa42da7de5c",
"assets/assets/images/content/user.png": "f9e447f2bebc53ca0294824e2db43c82",
"assets/assets/images/products/acer_laptop_1.png": "5162ec21900cfbd59441b5a52ffa45d8",
"assets/assets/images/products/acer_laptop_2.png": "e9728cf5d7ee2ac7805a34989fe1dfee",
"assets/assets/images/products/acer_laptop_3.png": "4262c8e2f6c0d597fda1b1db1b9de8ae",
"assets/assets/images/products/acer_laptop_4.png": "c2c817627463bf61911f923776be3c4a",
"assets/assets/images/products/acer_laptop_var_1.png": "45e0321e4736c1619fcc9c76d879dfdf",
"assets/assets/images/products/acer_laptop_var_2.png": "fca743e45a8cf3e84af226ac2c24a248",
"assets/assets/images/products/acer_laptop_var_3.png": "efce66489ddf691917afc5bf3a430f81",
"assets/assets/images/products/acer_laptop_var_4.png": "4d82d562c4f3f17a16eeee0f59aba1b5",
"assets/assets/images/products/Adidas_Football.png": "b08209863366011805369ddc95ea1d5d",
"assets/assets/images/products/baseball_bat.png": "d0a12c739ad77cc4ce1c7e6c755e1e7e",
"assets/assets/images/products/bedroom_bed.png": "8615a6f295d4cd38a455187b7506a054",
"assets/assets/images/products/bedroom_bed_black.png": "84e76c22f17cc7fca89801b2bc0ed30e",
"assets/assets/images/products/bedroom_bed_grey.png": "1320df637c3997d1962db0aa15756c1a",
"assets/assets/images/products/bedroom_bed_simple_brown.png": "c99238ddefa6a884945a8d3b2fd71507",
"assets/assets/images/products/bedroom_bed_with_comforter.png": "e1a9af714a93ba8a83e821f814fd9a48",
"assets/assets/images/products/bedroom_lamp.png": "7cfee5d3636dc54282b0f33d512ed6bc",
"assets/assets/images/products/bedroom_sofa.png": "8061ce7d3013320b3348bed5cf05e0be",
"assets/assets/images/products/bedroom_wardrobe.png": "af1d6def36a9562491bd7bfe8fcf67a7",
"assets/assets/images/products/cricket_bat.png": "0288f2ee5dc6cbb800fc5fa3bc05a0b6",
"assets/assets/images/products/iphone8_mobile.png": "ea9f5da347b0ec05b1363880680afa02",
"assets/assets/images/products/iphone8_mobile_back.png": "45b0015f9334ef2367f2af8c733d7f49",
"assets/assets/images/products/iphone8_mobile_dual_side.png": "db6cb8a14edfdce12c40f4a38df45f6d",
"assets/assets/images/products/iphone8_mobile_front.png": "9d628396c8c4f06a27ae72f56da611ef",
"assets/assets/images/products/iphone_12_black.png": "c9df98972758965738972a16b53823a9",
"assets/assets/images/products/iphone_12_blue.png": "58fe2734d63fea7f04b2f141f190f326",
"assets/assets/images/products/iphone_12_green.png": "2963118ad1cd8a0f8ef9b5ea525caabb",
"assets/assets/images/products/iphone_12_red.png": "91dfa768f07ca1358c58c548923610ee",
"assets/assets/images/products/iphone_13_pro.png": "485067d9570ba3f9a3cfd9c80dd38924",
"assets/assets/images/products/iphone_14_pro.png": "3576790ef245f852039fddd430581818",
"assets/assets/images/products/iphone_14_white.png": "e5b219677558e5c7ee725679bc00b4bd",
"assets/assets/images/products/kitchen_counter.png": "fe503d56288d1d1876bbc3fc3f06f87e",
"assets/assets/images/products/kitchen_dining%2520table.png": "ee14f25e7fc17cb29ed5093cb97f47df",
"assets/assets/images/products/kitchen_refrigerator.png": "2797e33ae0421a08f83dabd2381eeef8",
"assets/assets/images/products/leather_jacket_1.png": "c363183c826ac1a91ae5ee5df9d9789c",
"assets/assets/images/products/leather_jacket_2.png": "e06410e1702b7bd04db39a858dba9079",
"assets/assets/images/products/leather_jacket_3.png": "df9a9d04da02bf76affa49afdbf9078a",
"assets/assets/images/products/leather_jacket_4.png": "9ca610120c84bbbe1f90bdb4ee01b0f5",
"assets/assets/images/products/nike-shoes.png": "7bd206fd5ea8a583f29774ba5056944c",
"assets/assets/images/products/NikeAirJOrdonBlackRed.png": "62836c841955892701605ef6c5dc6612",
"assets/assets/images/products/NikeAirJOrdonOrange.png": "78e8bca4541629b61c3fe1211177d29b",
"assets/assets/images/products/NikeAirJordonSingleBlue.png": "fba60de4d4fa39779f7d7a9b43d544d4",
"assets/assets/images/products/NikeAirJordonSingleOrange.png": "f8da270a32f8c759e7e2fb6fb9d8d9a7",
"assets/assets/images/products/NikeAirJordonwhiteMagenta.png": "3c64acb015147ca8ca7e4d7a0839cf10",
"assets/assets/images/products/NikeAirJOrdonWhiteRed.png": "d21fd5ef93da27bce7680f46a98b2f46",
"assets/assets/images/products/NikeAirMax.png": "b49423c5b2d145a12df41e0e079e3a90",
"assets/assets/images/products/NikeBasketballShoeGreenBlack.png": "50a9c131400adc9e2171d76baf811ad9",
"assets/assets/images/products/NikeWildhorse.png": "3f2f75f7a1e4da9fdb5b5a4da227874c",
"assets/assets/images/products/office_chair_1.png": "8b46ba6783c5c42ad13da4f72006f126",
"assets/assets/images/products/office_chair_2.png": "3b472bc0394ba888414af6d11c11fa22",
"assets/assets/images/products/office_desk_1.png": "e5acf637970d438fbe00e1a441668224",
"assets/assets/images/products/office_desk_2.png": "a37ee0f678a67d81d1cd1649b8baa927",
"assets/assets/images/products/product-1.png": "8bd5480d89513e42dad85960621a76e3",
"assets/assets/images/products/product-jacket.png": "3af047f07f1f2dec7021e2cf60eeebd3",
"assets/assets/images/products/product-jeans.png": "0f9545ffdfb32542cdee54a1c083d291",
"assets/assets/images/products/product-shirt.png": "22e2bbed59ccbffdeaacece15ac9b496",
"assets/assets/images/products/product-shirt_blue_1.png": "60e6ddf074236caa6d8e1ee4e20b32fa",
"assets/assets/images/products/product-shirt_blue_2.png": "8b214a9929a4ff6f8abc40e50bb1e17c",
"assets/assets/images/products/product-slippers.png": "ec06f3094fb68c606b408322db1fe235",
"assets/assets/images/products/promo-banner-1.png": "3782cfad0a8c18afe3315fa8c56f6071",
"assets/assets/images/products/promo-banner-2.png": "3fecbd4c54aef7fc52ae0897a5a0702f",
"assets/assets/images/products/promo-banner-3.png": "2d4ac1598b12eac6fb143a9feebf58c2",
"assets/assets/images/products/samsung_s9_mobile.png": "c3db5a401883d892b4ffbe62faba274c",
"assets/assets/images/products/samsung_s9_mobile_back.png": "7d9737a6ad722d52d37637cb5745140d",
"assets/assets/images/products/samsung_s9_mobile_withback.png": "c7a44a9f1c4292b5a53acea0ee8b6147",
"assets/assets/images/products/slipper-product-1.png": "98160d2d7ede8ab64c7fb16d2d87a739",
"assets/assets/images/products/slipper-product-2.png": "24bf8ca9348b13d793b65205ff12423c",
"assets/assets/images/products/slipper-product-3.png": "78dd2748424969a42cc421dabc368330",
"assets/assets/images/products/slipper-product.png": "f2149f6876d00100d03fa1bab83859a5",
"assets/assets/images/products/tennis_racket.png": "4fe6977e7353b811af7f5bd5d0327e81",
"assets/assets/images/products/tomi_dogfood.png": "55ff890a538a0bec50b0d91ec91c5156",
"assets/assets/images/products/tracksuit_black.png": "1d9f76f3a76f5b19b5de11e8856a75fb",
"assets/assets/images/products/tracksuit_blue.png": "2a10c5b40dca985980bf94759b086a2f",
"assets/assets/images/products/tracksuit_red.png": "d46dea613576b70dad985c5161be9d9e",
"assets/assets/images/products/trcksuit_parrotgreen.png": "0bb7dbf17b8b79fafe3167fed93f5d3d",
"assets/assets/images/products/tshirt_blue_collar.png": "bd0126997b19e8e127fcc915540e8d34",
"assets/assets/images/products/tshirt_blue_without_collar_back.png": "44150d4089dc02516019cf87e88f2c90",
"assets/assets/images/products/tshirt_blue_without_collar_front.png": "381043a231ccc51df76ef1d3013f188e",
"assets/assets/images/products/tshirt_green_collar.png": "6809de3f21284124b379a45322a61876",
"assets/assets/images/products/tshirt_red_collar.png": "c7f3500a789e657ecca9b409b8f31eb4",
"assets/assets/images/products/tshirt_yellow_collar.png": "5b12aa9420bc77169ea27ebf973796b6",
"assets/assets/images/products/user_img.jpg": "dfcdd01b16056d60c5ad844d5c4f3566",
"assets/assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/logos/logo.png": "243ad7bfb82b373097c5ab3445b26845",
"assets/assets/logos/pharmacy-ecommerce-logo.jpeg": "f57d43bdc39a37487e12f2143c78c601",
"assets/assets/logos/pharmacy-ecommerce-logo.png": "fdb4192528305fd473b5acf8de4a7ca6",
"assets/FontManifest.json": "38cb77e090d68c1abf721235a36a5a3e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "51e1e39b8b38883e35db65c17b0414ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d2ba5f3a276adc3a2d5305424ab541c3",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "d8e813302498c7ee01e7a46ebb7443b1",
"icons/Icon-192.png": "9cc729e02f5e0d7e258d6b8c15b9a330",
"icons/Icon-512.png": "a3e57f6b887b5afaff8812e7d2e15fa0",
"index.html": "11960d2e58069d0967891d3e893ed04c",
"/": "11960d2e58069d0967891d3e893ed04c",
"main.dart.js": "af4158a849b1a587ce37003911b86324",
"manifest.json": "9a9e36b377abbd50ab933c1169083ad7",
"version.json": "eefd3b2dbab8d008ec3e644d2b21a68c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
