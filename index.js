"use strict";
(function(){
  window.addEventListener('load',init);

  function init(){
    qs(".navButton").addEventListener('click', navButton);
  }

  /*nav button*/
  function navButton(){
    if (qs('#navBar').style.width == 0 || qs('#navBar').style.width == "0px") {
      qs('#navBar').setAttribute("style", "width: 101vw;");
    } else {
      qs('#navBar').setAttribute("style", "width: 0;");
    }
    console.log(qs('#navBar').style.width);
  }

  function id(idName){return document.getElementById(idName);}
  function qs(selector){return document.querySelector(selector);}
  function qsa(selector){return document.querySelectorAll(selector);}
})();