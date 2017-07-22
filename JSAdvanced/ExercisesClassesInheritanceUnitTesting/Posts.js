/*Your need to create several classes for Posts.

 Implement a class Post, which is initialized with a title (String) and content (String). The 2 arguments should be

 public members.

 The Post class should also have toString() function which returns the following result:

 “Post: {postTitle}”

 “Content: {postContent}”

 Implement another class which is called SocialMediaPost, which inherits the Post class.

 The SocialMediaPost class should be initialized with 2 additional arguments – likes (Number) and dislikes

 (Number).

 © Software University Foundation (softuni.org). This work is licensed under the CC-BY- NC-SA license.

 Follow us: Page 12 of 12

 The SocialMediaPost class should hold an array of comments (Strings), and a function addComment(comment),

 which adds comments to that array.

 The SocialMediaPost class should extend the toString() function of the Post class, and should return the

 following result:

 “Post: {postTitle}”

 “Content: {postContent}”

 “Rating: {postLikes – postDislikes}”

 “Comments:”

 “ * {comment1}”

 “ * {comment2}”

 . . .

 In case there are no comments, return information only about the title, content and rating of the post.

 Implement another class which is called BlogPost, which inherits the Post class.

 The BlogPost class should be initialized with 1 additional arguments – views (Number).

 The BlogPost class should hold a function view(), which increments the views of the object with 1, every time it

 is called. The function should return the object, so that chaining is supported.

 The BlogPost class should extend the toString() function of the Post class, and should return the following

 result:

 “Post: {postTitle}”

 “Content: {postContent}”

 “Views: {postViews}”

 Example

 posts.js

 let post = new Post(&quot;Post&quot;, &quot;Content&quot;);

 console.log(post.toString());

 // Post: Post

 // Content: Content

 let scm = new SocialMediaPost(&quot;TestTitle&quot;, &quot;TestContent&quot;, 25, 30);

 scm.addComment(&quot;Good post&quot;);

 scm.addComment(&quot;Very good post&quot;);

 scm.addComment(&quot;Wow!&quot;);

 console.log(scm.toString());

 // Post: TestTitle

 // Content: TestContent

 // Rating: -5

 // Comments:

 // * Good post

 // * Very good post

 // * Wow!*/


