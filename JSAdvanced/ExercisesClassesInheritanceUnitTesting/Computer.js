/*You need to implement the class hierarchy for a computer business, here are the classes you should create and

 support:

  Keyboard - concrete class that contains:

 o manufacturer - string property for the name of the manufacturer.

 o responseTime - number property for the response time of the Keyboard.

  Monitor - concrete class that contains:

 o manufacturer - string property for the name of the manufacturer.

 o width - number property for the width of the screen.

 o height - number property for the height of the screen.

  Battery - concrete class that contains:

 o manufacturer - string property for the name of the manufacturer.

 o expectedLife - number property for the expected years of life of the Battery.

  Computer - abstract class that contains:

 o manufacturer - string property for the name of the manufacturer.

 o processorSpeed - a number property containing the speed of the processor in GHz.

 © Software University Foundation (softuni.org). This work is licensed under the CC-BY- NC-SA license.

 Follow us: Page 12 of 12

 o ram - a number property containing the RAM of the computer in Gigabytes.

 o hardDiskSpace - a number property containing the hard disk space in Terabytes.

  Laptop - concrete class extending the Computer class that contains:

 o weight - a number property containing the weight of the Laptop in Kilograms.

 o color - a string property containing the color of the Laptop.

 o battery - an instance of the Battery class containing the Laptop&#39;s battery. There should be a

 getter and a setter for the property and validation that the passed in argument is actually an

 instance of the Battery class.

  Desktop - concrete class extending the Computer class that contains:

 o keyboard - an instance of the Keyboard class containing the Desktop PC&#39;s Keyboard. There should

 be a getter and a setter for the property and validation that the passed in argument is actually

 an instance of the Keyboard class.

 o monitor - an instance of the Monitor class containing the Desktop PC&#39;s Monitor. There should be

 a getter and a setter for the property and validation that the passed in argument is actually an

 instance of the Monitor class.

 Attempting to instantiate an abstract class should throw an Error, attempting to pass an object that is not of the

 expected instance (ex. an object that is not an instance of Battery to the laptop as a battery) should throw a

 TypeError.

 Example

 template.js

 function createComputerHierarchy() {

 //TODO

 return {

 Battery,

 Keyboard,

 Monitor,

 Computer,

 Laptop,

 Desktop

 }

 }*/


