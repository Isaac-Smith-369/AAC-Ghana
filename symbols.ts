import Pizza from "./assets/Symbols/Food/pizza.svg";
import Bread from "./assets/Symbols/Food/bread.svg";
import Cheese from "./assets/Symbols/Food/cheese.svg";
import Milk from "./assets/Symbols/Food/milk.svg";
import Cake from "./assets/Symbols/Food/cake.svg";
import Butter from "./assets/Symbols/Food/butter.svg";
import Rice from "./assets/Symbols/Food/rice.svg";
import Ice_cream from "./assets/Symbols/Food/ice_cream.svg";
import Chocolate from "./assets/Symbols/Food/chocolate.svg";
import Egg from "./assets/Symbols/Food/egg.svg";
import Soup from "./assets/Symbols/Food/soup.svg";
import Chicken from "./assets/Symbols/Food/chicken.svg";
import Ball from "./assets/Symbols/Toys/ball.svg";
import Mobile_phone from "./assets/Symbols/Toys/mobile_phone.svg";
import Teddy_bear from "./assets/Symbols/Toys/teddy_bear.svg";
import Doll from "./assets/Symbols/Toys/doll.svg";
import Lego from "./assets/Symbols/Toys/lego.svg";
import Toy_car from "./assets/Symbols/Toys/toy_car.svg";
import Large from "./assets/Symbols/Words/large.svg";
import How from "./assets/Symbols/Words/how.svg";
import Apple from "./assets/Symbols/Fruits/apple.svg";
import Banana from "./assets/Symbols/Fruits/banana.svg";
import Strawberry from "./assets/Symbols/Fruits/strawberry.svg";
import Cherry from "./assets/Symbols/Fruits/cherry.svg";
import Grapes from "./assets/Symbols/Fruits/grapes.svg";
import Grapefruit from "./assets/Symbols/Fruits/grapefruit.svg";
import Kiwi from "./assets/Symbols/Fruits/kiwi.svg";
import Lemon from "./assets/Symbols/Fruits/lemon.svg";
import Watermelon from "./assets/Symbols/Fruits/watermelon.svg";
import Orange from "./assets/Symbols/Fruits/orange.svg";
import Pear from "./assets/Symbols/Fruits/pear.svg";
import Peach from "./assets/Symbols/Fruits/peach.svg";
import Sister from "./assets/Symbols/People/sister.svg";
import Brother from "./assets/Symbols/People/brother.svg";
import Grandmother from "./assets/Symbols/People/grandmother.svg";
import Grandfather from "./assets/Symbols/People/grandfather.svg";
import Red from "./assets/Symbols/Colors/red.svg";
import Black from "./assets/Symbols/Colors/black.svg";
import White from "./assets/Symbols/Colors/white.svg";
import Blue from "./assets/Symbols/Colors/blue.svg";
import Green from "./assets/Symbols/Colors/green.svg";
import Purple from "./assets/Symbols/Colors/purple.svg";
import Brown from "./assets/Symbols/Colors/brown.svg";
import Pink from "./assets/Symbols/Colors/pink.svg";
import Yellow from "./assets/Symbols/Colors/yellow.svg";
import OrangeColor from "./assets/Symbols/Colors/orange.svg";
import School from "./assets/Symbols/Places/school.svg";
import Trousers from "./assets/Symbols/Clothes/trousers.svg";
import Shorts from "./assets/Symbols/Clothes/shorts.svg";
import Socks from "./assets/Symbols/Clothes/socks.svg";
import Cap from "./assets/Symbols/Clothes/cap.svg";
import Coat from "./assets/Symbols/Clothes/coat.svg";
import Glasses from "./assets/Symbols/Clothes/glasses.svg";
import Scarf from "./assets/Symbols/Clothes/scarf.svg";
import Hot from "./assets/Symbols/Feeling/hot.svg";
import One from "./assets/Symbols/Numbers/one.svg";
import Two from "./assets/Symbols/Numbers/two.svg";
import Three from "./assets/Symbols/Numbers/three.svg";
import Four from "./assets/Symbols/Numbers/four.svg";
import Five from "./assets/Symbols/Numbers/five.svg";
import Six from "./assets/Symbols/Numbers/six.svg";
import Seven from "./assets/Symbols/Numbers/seven.svg";
import Eight from "./assets/Symbols/Numbers/eight.svg";
import Nine from "./assets/Symbols/Numbers/nine.svg";
import A from "./assets/Symbols/Letters/A.svg";
import B from "./assets/Symbols/Letters/B.svg";
import C from "./assets/Symbols/Letters/C.svg";
import D from "./assets/Symbols/Letters/D.svg";
import E from "./assets/Symbols/Letters/E.svg";
import F from "./assets/Symbols/Letters/F.svg";
import G from "./assets/Symbols/Letters/G.svg";
import H from "./assets/Symbols/Letters/H.svg";
import I from "./assets/Symbols/Letters/I.svg";
import J from "./assets/Symbols/Letters/J.svg";
import K from "./assets/Symbols/Letters/K.svg";
import L from "./assets/Symbols/Letters/L.svg";
import M from "./assets/Symbols/Letters/M.svg";
import N from "./assets/Symbols/Letters/N.svg";
import O from "./assets/Symbols/Letters/O.svg";
import P from "./assets/Symbols/Letters/P.svg";
import Q from "./assets/Symbols/Letters/Q.svg";
import R from "./assets/Symbols/Letters/R.svg";
import S from "./assets/Symbols/Letters/S.svg";
import T from "./assets/Symbols/Letters/T.svg";
import U from "./assets/Symbols/Letters/U.svg";
import V from "./assets/Symbols/Letters/V.svg";
import W from "./assets/Symbols/Letters/W.svg";
import X from "./assets/Symbols/Letters/X.svg";
import Y from "./assets/Symbols/Letters/Y.svg";
import Z from "./assets/Symbols/Letters/Z.svg";
import Avocado from "./assets/Symbols/Vegetables/avocado.svg";
import Aubergine from "./assets/Symbols/Vegetables/aubergine.svg";
import Cucumber from "./assets/Symbols/Vegetables/cucumber.svg";
import Carrot from "./assets/Symbols/Vegetables/carrot.svg";
import Celery from "./assets/Symbols/Vegetables/celery.svg";
import Cabbage from "./assets/Symbols/Vegetables/cabbage.svg";
import Tomato from "./assets/Symbols/Vegetables/tomato.svg";
import Garlic from "./assets/Symbols/Vegetables/garlic.svg";
import Potato from "./assets/Symbols/Vegetables/potato.svg";

import React from "react";
import { SvgProps } from "react-native-svg";

const categories = [
  "Main",
  "Food",
  "Toys",
  "Verbs",
  "Words",
  "Fruits",
  "People",
  "Colors",
  "Places",
  "Clothes",
  "Feelings",
  "Numbers",
  "Letters",
  "Vegetables",
];

type Symbols = {
  [index: string]: any;
};

// type Thumbnails = {
//   [index: string]: React.ReactElement | null;
// };

// const symbols: Symbols = {
//   Main: [
//     {

//       Bread({ width: 90, height: 50 }),
//     }
//     Butter({ width: 90, height: 50 }),
//     Cake({ width: 90, height: 50 }),
//     Cheese({ width: 90, height: 50 }),
//     Chicken({ width: 90, height: 50 }),
//   ],
//   Food: [
//     Bread({ width: 90, height: 50 }),
//     Butter({ width: 90, height: 50 }),
//     Cake({ width: 90, height: 50 }),
//     Cheese({ width: 90, height: 50 }),
//     Chicken({ width: 90, height: 50 }),
//     Chocolate({ width: 90, height: 50 }),
//     Egg({ width: 90, height: 50 }),
//     Ice_cream({ width: 90, height: 50 }),
//     Milk({ width: 90, height: 50 }),
//     Pizza({ width: 90, height: 50 }),
//     Rice({ width: 90, height: 50 }),
//     Soup({ width: 90, height: 50 }),
//   ],
//   Toys: [
//     Ball({ width: 90, height: 50 }),
//     Doll({ width: 90, height: 50 }),
//     Lego({ width: 90, height: 50 }),
//     Mobile_phone({ width: 90, height: 50 }),
//     Teddy_bear({ width: 90, height: 50 }),
//     Toy_car({ width: 90, height: 50 }),
//   ],
//   Verbs: [
//     Bread({ width: 90, height: 50 }),
//     Butter({ width: 90, height: 50 }),
//     Cake({ width: 90, height: 50 }),
//     Cheese({ width: 90, height: 50 }),
//     Chicken({ width: 90, height: 50 }),
//   ],
//   Words: [How({ width: 90, height: 50 }), Large({ width: 90, height: 50 })],
//   Fruits: [
//     Apple({ width: 90, height: 50 }),
//     Banana({ width: 90, height: 50 }),
//     Cherry({ width: 90, height: 50 }),
//     Grapefruit({ width: 90, height: 50 }),
//     Grapes({ width: 90, height: 50 }),
//     Kiwi({ width: 90, height: 50 }),
//     Lemon({ width: 90, height: 50 }),
//     Orange({ width: 90, height: 50 }),
//     Peach({ width: 90, height: 50 }),
//     Pear({ width: 90, height: 50 }),
//     Strawberry({ width: 90, height: 50 }),
//     Watermelon({ width: 90, height: 50 }),
//   ],
//   People: [
//     Brother({ width: 90, height: 50 }),
//     Grandfather({ width: 90, height: 50 }),
//     Grandmother({ width: 90, height: 50 }),
//     Sister({ width: 90, height: 50 }),
//   ],
//   Colors: [
//     Black({ width: 90, height: 50 }),
//     Blue({ width: 90, height: 50 }),
//     Brown({ width: 90, height: 50 }),
//     Green({ width: 90, height: 50 }),
//     OrangeColor({ width: 90, height: 50 }),
//     Pink({ width: 90, height: 50 }),
//     Purple({ width: 90, height: 50 }),
//     Red({ width: 90, height: 50 }),
//     White({ width: 90, height: 50 }),
//     Yellow({ width: 90, height: 50 }),
//   ],
//   Places: [School({ width: 90, height: 50 })],
//   Clothes: [
//     Cap({ width: 90, height: 50 }),
//     Coat({ width: 90, height: 50 }),
//     Glasses({ width: 90, height: 50 }),
//     Scarf({ width: 90, height: 50 }),
//     Shorts({ width: 90, height: 50 }),
//     Socks({ width: 90, height: 50 }),
//     Trousers({ width: 90, height: 50 }),
//   ],
//   Feelings: [Hot({ width: 90, height: 50 })],
//   Numbers: [
//     Eight({ width: 90, height: 50 }),
//     Five({ width: 90, height: 50 }),
//     Four({ width: 90, height: 50 }),
//     Nine({ width: 90, height: 50 }),
//     One({ width: 90, height: 50 }),
//     Seven({ width: 90, height: 50 }),
//     Six({ width: 90, height: 50 }),
//     Three({ width: 90, height: 50 }),
//     Two({ width: 90, height: 50 }),
//   ],
//   Letters: [
//     A({ width: 90, height: 50 }),
//     B({ width: 90, height: 50 }),
//     C({ width: 90, height: 50 }),
//     D({ width: 90, height: 50 }),
//     E({ width: 90, height: 50 }),
//     F({ width: 90, height: 50 }),
//     G({ width: 90, height: 50 }),
//     H({ width: 90, height: 50 }),
//     I({ width: 90, height: 50 }),
//     J({ width: 90, height: 50 }),
//     K({ width: 90, height: 50 }),
//     L({ width: 90, height: 50 }),
//     M({ width: 90, height: 50 }),
//     N({ width: 90, height: 50 }),
//     O({ width: 90, height: 50 }),
//     P({ width: 90, height: 50 }),
//     Q({ width: 90, height: 50 }),
//     R({ width: 90, height: 50 }),
//     S({ width: 90, height: 50 }),
//     T({ width: 90, height: 50 }),
//     U({ width: 90, height: 50 }),
//     V({ width: 90, height: 50 }),
//     W({ width: 90, height: 50 }),
//     X({ width: 90, height: 50 }),
//     Y({ width: 90, height: 50 }),
//     Z({ width: 90, height: 50 }),
//   ],
//   Vegetables: [
//     Aubergine({ width: 90, height: 50 }),
//     Avocado({ width: 90, height: 50 }),
//     Cabbage({ width: 90, height: 50 }),
//     Carrot({ width: 90, height: 50 }),
//     Celery({ width: 90, height: 50 }),
//     Cucumber({ width: 90, height: 50 }),
//     Garlic({ width: 90, height: 50 }),
//     Potato({ width: 90, height: 50 }),
//     Tomato({ width: 90, height: 50 }),
//   ],
// };

const w = 90;
const h = 50;

const symbols: Symbols = [
  {
    Main: {
      Apple: Apple({ width: w, height: h }),
      Banana: Banana({ width: w, height: h }),
      Cherry: Cherry({ width: w, height: h }),
    },
    Food: {
      Bread: Bread({ width: w, height: h }),
      Butter: Butter({ width: w, height: h }),
      Cake: Cake({ width: w, height: h }),
      Cheese: Cheese({ width: w, height: h }),
      Chicken: Chicken({ width: w, height: h }),
      Chocolate: Chocolate({ width: w, height: h }),
      Egg: Egg({ width: w, height: h }),
      Ice_cream: Ice_cream({ width: w, height: h }),
      Milk: Milk({ width: w, height: h }),
      Pizza: Pizza({ width: w, height: h }),
      Rice: Rice({ width: w, height: h }),
      Soup: Soup({ width: w, height: h }),
    },
    Toys: {
      Ball: Ball({ width: w, height: h }),
      Doll: Doll({ width: w, height: h }),
      Lego: Lego({ width: w, height: h }),
      Mobile_phone: Mobile_phone({ width: w, height: h }),
      Teddy_bear: Teddy_bear({ width: w, height: h }),
      Toy_car: Toy_car({ width: w, height: h }),
    },
    Verbs: {
      Apple: Apple({ width: w, height: h }),
      Banana: Banana({ width: w, height: h }),
      Cherry: Cherry({ width: w, height: h }),
    },
    Words: {
      How: How({ width: w, height: h }),
      Large: Large({ width: w, height: h }),
    },
    Fruits: {
      Apple: Apple({ width: w, height: h }),
      Banana: Banana({ width: w, height: h }),
      Cherry: Cherry({ width: w, height: h }),
      Grapefruit: Grapefruit({ width: w, height: h }),
      Grapes: Grapes({ width: w, height: h }),
      Kiwi: Kiwi({ width: w, height: h }),
      Lemon: Lemon({ width: w, height: h }),
      Orange: Orange({ width: w, height: h }),
      Peach: Peach({ width: w, height: h }),
      Pear: Pear({ width: w, height: h }),
      Strawberry: Strawberry({ width: w, height: h }),
      Watermelon: Watermelon({ width: w, height: h }),
    },
    People: {
      Brother: Brother({ width: w, height: h }),
      Grandfather: Grandfather({ width: w, height: h }),
      Grandmother: Grandmother({ width: w, height: h }),
      Sister: Sister({ width: w, height: h }),
    },
    Colors: {
      Black: Black({ width: w, height: h }),
      Blue: Blue({ width: w, height: h }),
      Brown: Brown({ width: w, height: h }),
      Green: Green({ width: w, height: h }),
      Orange: Orange({ width: w, height: h }),
      Pink: Pink({ width: w, height: h }),
      Purple: Purple({ width: w, height: h }),
      Red: Red({ width: w, height: h }),
      White: White({ width: w, height: h }),
      Yellow: Yellow({ width: w, height: h }),
    },
    Places: {
      School: School({ width: w, height: h }),
    },
    Clothes: {
      Cap: Cap({ width: w, height: h }),
      Coat: Coat({ width: w, height: h }),
      Glasses: Glasses({ width: w, height: h }),
      Scarf: Scarf({ width: w, height: h }),
      Shorts: Shorts({ width: w, height: h }),
      Socks: Socks({ width: w, height: h }),
      Trousers: Trousers({ width: w, height: h }),
    },
    Feelings: {
      Hot: Hot({ width: w, height: h }),
    },
    Numbers: {
      One: One({ width: w, height: h }),
      Two: Two({ width: w, height: h }),
      Three: Three({ width: w, height: h }),
      Four: Four({ width: w, height: h }),
      Five: Five({ width: w, height: h }),
      Six: Six({ width: w, height: h }),
      Seven: Seven({ width: w, height: h }),
      Eight: Eight({ width: w, height: h }),
      Nine: Nine({ width: w, height: h }),
    },
    Letters: {
      A: A({ width: w, height: h }),
      B: B({ width: w, height: h }),
      C: C({ width: w, height: h }),
      D: D({ width: w, height: h }),
      E: E({ width: w, height: h }),
      F: F({ width: w, height: h }),
      G: G({ width: w, height: h }),
      H: H({ width: w, height: h }),
      I: I({ width: w, height: h }),
      J: J({ width: w, height: h }),
      K: K({ width: w, height: h }),
      L: L({ width: w, height: h }),
      M: M({ width: w, height: h }),
      N: N({ width: w, height: h }),
      O: O({ width: w, height: h }),
      P: P({ width: w, height: h }),
      Q: Q({ width: w, height: h }),
      R: R({ width: w, height: h }),
      S: S({ width: w, height: h }),
      T: T({ width: w, height: h }),
      U: U({ width: w, height: h }),
      V: V({ width: w, height: h }),
      W: W({ width: w, height: h }),
      X: X({ width: w, height: h }),
      Y: Y({ width: w, height: h }),
      Z: Z({ width: w, height: h }),
    },
    Vegetables: {
      Aubergine: Aubergine({ width: w, height: h }),
      Avocado: Avocado({ width: w, height: h }),
      Cabbage: Cabbage({ width: w, height: h }),
      Carrot: Carrot({ width: w, height: h }),
      Celery: Celery({ width: w, height: h }),
      Cucumber: Cucumber({ width: w, height: h }),
      Garlic: Garlic({ width: w, height: h }),
      Potato: Potato({ width: w, height: h }),
      Tomato: Tomato({ width: w, height: h }),
    },
  },
];

const thumbnails = {
  Main: Brother({ width: 90, height: 50 }),
  Food: Bread({ width: 90, height: 50 }),
  Toys: Ball({ width: 90, height: 50 }),
  Verbs: How({ width: 90, height: 50 }),
  Words: How({ width: 90, height: 50 }),
  Fruits: Apple({ width: 90, height: 50 }),
  People: Brother({ width: 90, height: 50 }),
  Colors: Black({ width: 90, height: 50 }),
  Places: School({ width: 90, height: 50 }),
  Clothes: Cap({ width: 90, height: 50 }),
  Feelings: Hot({ width: 90, height: 50 }),
  Numbers: Eight({ width: 90, height: 50 }),
  Letters: A({ width: 90, height: 50 }),
  Vegetables: Cabbage({ width: 90, height: 50 }),
};

// const symbolMap = new Map(Object.entries(symbols));
const thumbnailMap = new Map(Object.entries(thumbnails));

export { symbols, categories, thumbnails, thumbnailMap };
