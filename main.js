(function () {
  "use strict";

  /* Reach into the document and get the element by the template ID */

  console.log(data);

  console.log(data.results);

  /* The source is used as the template. Outline the setup of the etsy picture, info, etc. */
  const source = document.getElementById("etsy-item-template").innerHTML;

  /* Can reference a compile method on the Handlebars object. This const will be a function */
  const template = Handlebars.compile(source);

  /* This is a javascript object */

  const context = data;

  const html = template(context);

  console.log(html);
  /* Now target and insert that html. Injecting it into your browser. */

  document
    .getElementById("loadCardsHere")
    .insertAdjacentHTML("afterbegin", html);
})();
