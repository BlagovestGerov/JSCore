/*Write Mocha unit tests to verify the functionality of a JavaScript implementation of the C# Console class. If you&#39;ve

 written some code in C#, you would know that you can format text using placeholders, an example would look like

 this:

 Console.WriteLine(&quot;The sum of {0} and {1} is {2}&quot;, 3, 4, 7);

 Here the first placeholder {0} is exchanged for the first parameter passed after the text template - 3. The second

 placeholder {1} for the second parameter - 4 and so on.

 You will be provied with a class Console which has similar functionality to the C# one. The Console should have a

 static method writeLine which supports the following:

  writeLine(string) - if only a single argument is passed and it is a string, the function should simply

 return it.

  writeLine(object) - if only a single parameter is passed and it is an object - return the JSON

 representation of the object.

  writeLine(templateString, parameters) - It should support the following:

 o If multiple arguments are passed, but the first is not a string - throw a TypeError.

 o If the number of parameters does not correspond to the number of placeholders in the template

 string - throw a RangeError.

 o If the placeholders have indexes not withing the parameters range(for instance we have a

 placeholder {13} and only 5 params) throw a RangeError.

 o if multiple arguments are passed and the first is a string, find all placeholders from the string and

 exchange them with the supplied parameters.

 Any cases not mentioned above, do not need to be checked.

 Constraints

  All arguments in the writeLine(templateString, parameters) will be strings.

  There will never be two placeholders with the same number.

 JS Code

 To ease you in the process, you are provided with an implementation which meets all of the specification

 requirements for the Console object:*/


