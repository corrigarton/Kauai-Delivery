"use strict";
(function() {
  window.addEventListener('load', init);

  /*main ting*/
  function init(){

    qs(".navButton").addEventListener('click', navButton);

    restaurantInfo("Kauai Juice", "677629eb-4862-40e4-bc66-f6b45e30f7f2", "e858a914-5e60-473e-8153-bee92b78f6b6", "#breakfast", "kauai-juice.jpg", "Juice bar with fresh juice and a variety of light fare made with local, organic produce.", "8:00AM-4:00PM");

    restaurantInfo("Java Kai", "beabdc8e-9063-44ef-b8a1-4628ed56efc7", "ed0b8ba0-f6e3-4ef8-a233-5209114b6543", "#breakfast", "java-kai.jpg", "Coffeehouse serving espresso, smoothies & bowls, breakfast, lunch, and dessert.", "8:00AM-1:00PM");

    restaurantInfo("Eat Healthy, Kauai", "463631f6-0f3d-4883-bbc7-0fa15031a283", "fdc2a906-5c43-4572-84a7-31a316a4d796", "#breakfast", "eathealthy.jpg", "Cafe featuring vegan & gluten-free offerings. Serving breakfast, lunch & dinner.", "9AM-2:30PM & 5PM-8PM", "Closed Sun 5-8 & all-day Mon");

    restaurantInfo("Kountry Style Kitchen", "5c155421-7594-4c0d-8d35-a1f8dd2cbf5e", "5f0295db-d25c-4f13-aeb5-9b5388f07fa3", "#breakfast", "kountry-kitchen.jpg", "Brunch eatery with full coffee menu. Known for their plate-sized mac nut pancakes.", "8:00AM-12:00PM");

    restaurantInfo("Olympic Cafe Breakfast", "67a3bb32-a34f-43d2-830c-87917c4091b6", "6339bc32-b414-4f81-9b25-9f2cddda9c71", "#breakfast", "Olympic-cafe-bfast.jpg", "Local restaurant with diverse menu, from diner classics to Hawaiian fare.", "8:00AM-11:30AM");

    restaurantInfo("Kenji Burger", "dfa29fb5-668a-4de4-a8e6-01f392e7a333", "221449fd-d038-42fd-b8b9-092118993d39", "#burgers", "kenjiburger.jpg", "Kauai grass fed beef, sushi burritos and poke bowls. Japanese/Hawaiian ingredients.", "11:30AM-7:00PM", "closed Tuesday");

    restaurantInfo("Avalon Gastropub", "c215e566-8c3d-484c-bcf6-aacc8cd9ca86", "0d0fe022-cf84-4076-9343-626708f21da9", "#burgers", "avalonburger.jpg", "Comfort food with a twist. We take pride in our high quality, local ingredients.", "3:30PM-8:00PM", "closed Sun & Mon");

    restaurantInfo("Olympic Cafe", "21b134b9-d774-4fc3-8268-95a12d2ae217", "c89ea0f3-adb7-4297-b847-38e31c1e7f55", "#burgers", "olympicburger.jpg", "Local restaurant with diverse menu, from diner classics to Hawaiian fare.", "11:00AM-8:00PM");

    restaurantInfo("Anatta's Thai", "9311a7ba-aacd-4b87-8579-dee61685145f", "f0b6f85d-144a-42b0-93d9-246a945404f4", "#asianFood", "anattasyums.jpg", "Quality, cooked to order, authentic Thai food. Vegan options, diverse menu, family owned.", "10:00AM-6:00PM", "closed Sun");

    restaurantInfo("Coconut Thai & Chinese", "7a03caeb-65ce-4d62-b9e4-a4e78000fd80", "3851fe2f-7f37-44c7-8b3f-1b95a02b6d39", "#asianFood", "coconutthai.jpg", "Authentic Thai and Chinese food made with fresh, local seafood.", "11:00AM-6:30PM");

    restaurantInfo("Scorpacciata", "54acf9e2-b0be-48a9-930f-b05c5aa39f9c", "1d0e5cc4-c1bc-4859-a0b5-cc7627badec8", "#pizza", "scorpacciata.jpeg", "Pizza truck with fresh, local ingredients, specializing in Neapolitan Style Pizza.", "11:00AM-7:30PM", "Sun 12:00PM-7:30PM");

    restaurantInfo("Bobby V's Italian", "ba48f358-606a-4a8a-abdb-e6e3e8c77d98", "f814512e-42f8-45f4-946f-9f2699afec37", "#pizza", "bobbyv.jpg", "Our sauces are all homemade and we use only 100% real mozzarella cheese.", "3:00PM-7:30PM", "closed sun");
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

  /* add yum box*/
  function restaurantInfo(name, cuid, ruid, location, photo, description, hours, hoursXtra){
    /*big container*/
    let container = document.createElement("span");
    container.className = "restaurant";

    let photoE = document.createElement("img");
    photoE.setAttribute("src", photo);
    container.appendChild(photoE);

    /*restaurant name*/
    let nameE = document.createElement("h2");
    nameE.textContent = name;
    nameE.className = "info";
    container.appendChild(nameE);

    /*box w hours and glf button */
    let stuff = document.createElement("div");
    stuff.className = "stuff";

    /*box w hours making them vertical bc in a horizontal flex*/
    let infoBox = document.createElement("div");
    infoBox.className = "info-box";

    let hoursE = document.createElement("h3");
    hoursE.textContent = hours;
    hoursE.className = "info";
    infoBox.appendChild(hoursE);

    let hoursXtraE = document.createElement("h3");
    hoursXtraE.textContent = hoursXtra;
    hoursXtraE.className = "info xtra";
    infoBox.appendChild(hoursXtraE);

    /*add hours to stuff div*/
    stuff.appendChild(infoBox);

    /*glf button*/
    let glfButton = document.createElement("span");
    glfButton.setAttribute("class", "glf-button stl");
    glfButton.textContent = "Order Now";
    glfButton.setAttribute("style", "color: #ffffff !important; background-color: #000000; height: 85%; max-height: 35px; width: 30%; min-width: 100px; padding: 2%; padding-top: 8px; padding-bottom: 8px; font-size: 95%; margin-left: auto; margin-right: 20px; font-family: 'Montserrat', sans-serif;");
    glfButton.setAttribute("data-glf-cuid", cuid);
    glfButton.setAttribute("data-glf-ruid", ruid);
    stuff.appendChild(glfButton);

    let scriptE = document.createElement("script");
    scriptE.setAttribute("src", "https://www.fbgcdn.com/embedder/js/ewm2.js");
    scriptE.setAttribute("defer", "defer");
    scriptE.setAttribute("async", "async")
    stuff.appendChild(scriptE);

    /*add stuff(div) to container(span)*/
    container.appendChild(stuff);

    /*box with description*/
    let descriptionE = document.createElement("p");
    descriptionE.className = "info";
    descriptionE.textContent = description;
    container.appendChild(descriptionE);

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
