(function () {
  "use strict";

  /* Reach into the document and get the element by the template ID */

  console.log(data);

  console.log(data.results[0]);

  /* The source is used as the template. Outline the setup of the etsy picture, info, etc. */
  const source = document.getElementById("etsy-item-template").innerHTML;

  /* Can reference a compile method on the Handlebars object. This const will be a function 
  const template = Handlebars.compile(source);

  /* This is a javascript object 

  I already have these values. How do I poke into the title?



const etsyListing = {
  results: [{title: data.results.0.description, url: }]
}
  
  
  const context = {
    results: [
      { title: "My New Post", body: "this is my first post" },
      { title: "My Second Post", body: "this is my second post" },
      { title: "My Third Post", body: "this is my third post" },
    ],
  };

  const html = template(context);

  console.log(html);
  /* Now target and insert that html. Injecting it into your browser. 

  document.getElementById("news").insertAdjacentHTML("afterbegin", html);

  */
})();
