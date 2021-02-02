"use strict";
(function() {
  window.addEventListener('load', init);

  /*main ting*/
  function init(){

    qs(".navButton").addEventListener('click', navButton);

    restaurantInfo("Kauai Juice", "74221aec-2006-4706-9176-3988bfde0b10", "d15798ee-403a-437d-82d8-309a757f423e", "#breakfast", "url('kauai-juice.jpg')", "Juice bar with fresh juice and a variety of light fare made with local, organic produce.", "8:00AM-4:00PM");

    restaurantInfo("Java Kai", "8597e28b-2081-4b3d-a54d-006828158572", "654f575b-ec86-4580-b0e5-8fbc0244b5eb", "#breakfast", "url('java-kai.jpg')", "Coffeehouse serving espresso, smoothies & bowls, breakfast, lunch, and dessert.", "8:00AM-1:00PM");

    restaurantInfo("Eat Healthy, Kauai", "dfd08e9a-1673-4847-b895-becb22cfbba7", "fdc2a906-5c43-4572-84a7-31a316a4d796", "#breakfast", "url('eathealthy.jpg')", "Cafe featuring vegan & gluten-free offerings. Serving breakfast, lunch & dinner.", "9AM-2:30PM & 5PM-8PM", "Closed Sun 5-8 & all-day Mon");

    restaurantInfo("Kountry Kitchen", "5c155421-7594-4c0d-8d35-a1f8dd2cbf5e", "a9ef2d91-3511-4f2b-8bf7-da4eaa841633", "#breakfast", "url('kountry-kitchen.jpg')", "Brunch eatery with full coffee menu. Known for their plate-sized mac nut pancakes.", "8:00AM-12:00PM");

    restaurantInfo("Olympic Cafe", "9767f046-7ca8-423f-99a2-f008ab0581f3", "52dc9601-9051-495a-9254-90d5fa7410cb", "#breakfast", "url('olympic-cafe-bfast.jpg')", "Local restaurant with diverse menu, from diner classics to Hawaiian fare.", "8:00AM-11:30AM");

    restaurantInfo("Kenji Burger", "dfa29fb5-668a-4de4-a8e6-01f392e7a333", "221449fd-d038-42fd-b8b9-092118993d39", "#burgers", "url('kenjiburger.jpg')", "Kauai grass fed beef, sushi burritos and poke bowls. Japanese/Hawaiian ingredients.", "11:30AM-7:00PM", "closed Tuesday");

    restaurantInfo("Avalon Gastropub", "1bda4f12-8324-4e45-86c4-8797217b63b9", "52dc9601-9051-495a-9254-90d5fa7410cb", "#burgers", "url('avalonburger.jpg')", "Comfort food with a twist. We take pride in our high quality, local ingredients.", "3:30PM-8:00PM", "closed Sun & Mon");

    restaurantInfo("Olympic Cafe", "21b134b9-d774-4fc3-8268-95a12d2ae217", "c89ea0f3-adb7-4297-b847-38e31c1e7f55", "#burgers", "url('olympicburger.jpg')", "Local restaurant with diverse menu, from diner classics to Hawaiian fare.", "11:00AM-8:00PM");

    restaurantInfo("Anatta's Thai", "e23fba36-c348-4ca4-959c-f1b3d9f0ddaa", "b3824c31-12ed-4638-8bb7-5fda0f60ee7e", "#asianFood", "url('anattasyums.jpg')", "Quality, cooked to order, authentic Thai food. Vegan options, diverse menu, family owned.", "10:00AM-6:00PM", "closed Sun");

    restaurantInfo("Coconut Thai & Chinese", "7a03caeb-65ce-4d62-b9e4-a4e78000fd80", "3851fe2f-7f37-44c7-8b3f-1b95a02b6d39", "#asianFood", "url('coconutthai.jpg')", "Authentic Thai and Chinese food made with fresh, local seafood.", "11:00AM-6:30PM");

    restaurantInfo("First Light", "7a03caeb-65ce-4d62-b9e4-a4e78000fd80", "3851fe2f-7f37-44c7-8b3f-1b95a02b6d39", "#breakfast", "url('coconutthai.jpg')", 'Serving tons of light breakfast options as well as a variety of custom coffee drinks.", "8:00AM-10AM");
    
    restaurantInfo("The Crooked Surf", "7a03caeb-65ce-4d62-b9e4-a4e78000fd80", "3851fe2f-7f37-44c7-8b3f-1b95a02b6d39", "#americanFood", "url('coconutthai.jpg')", "Restaurant featuring a menu of light fare including burgers, sandwiches & salads.", "11:00AM-8:00PM");

    restaurantInfo("Kauai Boil", "7a03caeb-65ce-4d62-b9e4-a4e78000fd80", "3851fe2f-7f37-44c7-8b3f-1b95a02b6d39", "#asianFood", "url('coconutthai.jpg')", "Locally owned food truck serving Cajun style seafood boils.", “3PM-7:30PM (3-6:30 Sun)");

    restaurantInfo("The Pineapple Room", "7a03caeb-65ce-4d62-b9e4-a4e78000fd80", "3851fe2f-7f37-44c7-8b3f-1b95a02b6d39", "#asianFood", "url('coconutthai.jpg')", "Serving authentic Cuban cuisine 5 nights a week.", "5:00PM-7:30PM (closed Mon & Tues");

  /*nav button*/
  function navButton(){
    if (qs('#navBar').style.width == 0 || qs('#navBar').style.width == "0px") {
      qs('#navBar').setAttribute("style", "width: 101vw;");
    } else {
      qs('#navBar').setAttribute("style", "width: 0;");
    }
    console.log(qs('#navBar').style.width);
  }

  /* add yum box*/
  function restaurantInfo(name, cuid, ruid, location, photo, description, hours, hoursXtra){
    /*big container*/
    let container = document.createElement("span");
    container.className = "restaurant";

    /*glf button*/
    let glfButton = document.createElement("span");
    glfButton.setAttribute("class", "glf-button stl");
    glfButton.setAttribute("data-glf-cuid", cuid);
    glfButton.setAttribute("data-glf-ruid", ruid);

    if (window.screen.width > 500) {
      glfButton.setAttribute("style", "align-self: center; display: flex; flex-direction: column-reverse; border-radius: 0px; width: 25vw; height: 18.75vw; background-size: cover; text-align: left;");
      glfButton.style["background-image"] = photo;
    } else {
      glfButton.setAttribute("style", "display: flex; flex-direction: column-reverse; border-radius: 0px; width: 75vw; height: 56.25vw; background-size: cover; text-align: left;");
      glfButton.style["background-image"] = photo;
    }
    container.appendChild(glfButton);

    let scriptE = document.createElement("script");
    scriptE.setAttribute("src", "https://www.fbgcdn.com/embedder/js/ewm2.js");
    scriptE.setAttribute("defer", "defer");
    scriptE.setAttribute("async", "async")
    container.appendChild(scriptE);

    /*box w hours making them vertical bc in a horizontal flex*/
    let infoBox = document.createElement("div");
    infoBox.className = "info-box";

    /*restaurant name*/
    let nameE = document.createElement("h2");
    nameE.textContent = name;
    nameE.className = "info";
    infoBox.appendChild(nameE);

    let hoursE = document.createElement("h3");
    hoursE.textContent = hours;
    hoursE.className = "info";
    hoursE.id = "hours";
    infoBox.appendChild(hoursE);

    let hoursXtraE = document.createElement("h3");
    hoursXtraE.textContent = hoursXtra;
    hoursXtraE.className = "info xtra";
    infoBox.appendChild(hoursXtraE);

    /*add hours to glf button*/
    container.appendChild(infoBox);



    /*box with description
    let descriptionE = document.createElement("p");
    descriptionE.className = "info";
    descriptionE.textContent = description;
    glfButton.appendChild(descriptionE);*/

    /*add big container to end of body*/
    qs(location).appendChild(container);
  }

  /*useful functions*/
  function id(idName) {
    return document.getElementById(idName);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function gen(tagName){
    return document.createElement(tagName);
  }

})();
