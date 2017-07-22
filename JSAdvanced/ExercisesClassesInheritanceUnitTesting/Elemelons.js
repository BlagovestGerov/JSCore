/*If Watermelons exist, Firemelons, Earthmelons and Airmelons should also exist. Create classes for The 4 Elemelons.

 Create an abstract class for the Elemelons. Name it Melon.

 The Melon class should be initialized with weight (Number), and melonSort (String). The 2 arguments should be

 public members.

 Create classes Watermelon, Firemelon, Earthmelon, Airmelon. Each of them should inherit the abstract class

 Melon and its functionality. Aside from the abstract functionality, each of the Elemelons should have property

 elementIndex (Number), which is equal to its weight * the string length of its melonSort. The property

 should have only a getter.

 All of the classes should hold a toString() function, which returns the following result for them:

 “Element: {Water/Fire/Earth/Air}”

 “Sort: {elemelonSort}”

 “Element Index: {elemelonElementIndex}”

 Create one more class which is called Melolemonmelon, which inherits one of the 4 elemelons, regardless of

 which.

 The Melolemonmelon has no element, but it can morph into any of the others. Implement a function morph(),

 which changes the current element of the Melolemonmelon, each time it is called.

 Upon initialization, the initial element is Water. From then it should go in the following order: Fire, Earth, Air,

 Water, Fire… and so on.

 The toString() function should remain the same as its parent class.

 To create an abstract class you must make sure that that class cannot be instantiated directly. Put the following code

 in the constructor of the Melon class, before all else.

 melon.js

 class Melon {

 constructor(weight, melonSort) {

 if (new.target === Melon) {

 throw new TypeError(&quot;Abstract class cannot be instantiated directly&quot;);

 }

 //TODO: initialize weight and melonSort properties

 }

 }

 Example

 scripts.js

 let test = new Melon(100, &quot;Test&quot;);

 //Throws error

 let watermelon = new Watermelon(12.5, &quot;Kingsize&quot;);

 console.log(watermelon.toString());

 // Element: Water

 // Sort: Kingsize

 // Element Index: 100*/


