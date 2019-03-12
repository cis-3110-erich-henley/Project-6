var link0 = document.createElement('link');
  link0.rel = "stylesheet";
  link0.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
  document.head.appendChild(link0);

var link1 = document.createElement('link');
  link1.rel = 'stylesheet';
  link1.href = "style.css";
  document.head.appendChild(link1);

let p = window.location.pathname;
let pl = window.location.pathname.length;
let w = window.location.href;
let wl = window.location.href.length;

var images = ["Frylock.png", "Meatwad.jpg", "Shake.png", "Carl.png"];
var titles = ["Frylock","Meatwad","Master Shake","Carl"];
var descriptions = ["Frylock is one of the four main characters on Aqua Teen Hunger Force. He is the most rational and intelligent member of the Aqua Teens. He is also considered to be a scientist; although, some of his motives and means of doing scientific research are a bit shady at times.","Meatwad is one of the four main characters in Aqua Teen Hunger Force. His low intelligence, naivety, trusting nature, and sexual frustration often cause him to be abused and manipulated by others, most notably Master Shake and the Mooninites.","Master Shake (briefly known as Mocha Shake), usually referred to as simply Shake, is one of the four main characters on Aqua Teen Hunger Force. The self-proclaimed leader of the Aqua Teens, Shake is the most erratic, selfish, and idiotic of the group, delivering misfortune to those around him (most especially his next-door neighbor Carl) through his extreme stupidity and naivety frequently causes his various schemes to backfire on him.","Carl Brutananadilewski is one of the four protagonists in Aqua Teen Hunger Force, alongside Master Shake, Frylock, and Meatwad. He is the unfortunate neighbor of the Aqua Teens, a position that has caused him massive, untold amounts of grief over the course of several years."];

if(p.substring(pl - 13, pl) == "Project6.html"){
  createHomePage();
}

if(p.substring(pl - 10, pl) == "Page2.html"){
  let x = w.substring(wl - 1, wl);
  createPage2(x);
}

function createHomePage(){
  var headerDiv = document.createElement("div");
  headerDiv.setAttribute("class", "header");
  var headerImg = document.createElement("img");
  setAttributes(headerImg, {"class": "headerImg", "src": "carlhome.png"});
  var headerTitle = document.createElement("h1");
  headerTitle.innerHTML = "Erich Henley's Website - Project 6";
  headerDiv.appendChild(headerImg);
  headerDiv.appendChild(headerTitle);

  var dropdownDiv = document.createElement("div");
  setAttributes(dropdownDiv, {"class": "btn btn-secondary dropdown-toggle", "href":"#", "role":"button", "id":"dropdownMenuLink", "data-toggle":"dropdown", "aria-haspopup":"true", "aria-expanded":"false", "style":"position: fixed; top: 0; right: 0;"});
  dropdownDiv.innerHTML = "Menu";
  var dropdownMenu = document.createElement("div");
  setAttributes(dropdownMenu, {"class":"dropdown-menu", "id":"dropdownMenu", "aria-labelledby":"dropdownMenuLink"});
  dropdownDiv.appendChild(dropdownMenu);
  headerDiv.appendChild(dropdownDiv);
  document.body.appendChild(headerDiv);
  addItems();

  for(var i=0; i < images.length; i++)
  {
    let url = "" + images[i];
    var cardDiv = document.createElement("div");
    setAttributes(cardDiv, {"class": "card"});
    var imgInDiv = document.createElement("img");
    setAttributes(imgInDiv, {"class": "card-img-top", "src": url, "id": "ClickME" + i, "onclick": "changePage(" + i + ")"});
    cardDiv.appendChild(imgInDiv);
    var cardBodyDiv = document.createElement("div");
    setAttributes(cardBodyDiv, {"class": "card-body"});
    cardDiv.appendChild(cardBodyDiv);
    var favoriteButton = document.createElement("button");
    setAttributes(favoriteButton, {"type":"button", "id": "FavBtn" + i, "onclick": "daButtons(" + i + ")"});
    cardBodyDiv.appendChild(favoriteButton);
    document.body.appendChild(cardDiv);
  }

  var alertDiv = document.createElement("div");
  setAttributes(alertDiv, {"class":"myAlert-bottom alert alert-success", "style":"position: fixed; bottom: 0; right: 0; left: 0"});
  var alertInfo = document.createElement("a");
  setAttributes(alertInfo, {"class":"close", "id":"FavAlert", "href":"#", "data-dismiss":"alert", "aria-label":"close"});
  alertDiv.appendChild(alertInfo);
  document.body.appendChild(alertDiv);

  daButtons();
}

function createPage2(cl){

  let url = "" + images[cl];
  var cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  cardDiv.setAttribute("style", "width: 32rem;");
  var imgInDiv = document.createElement("img");
  setAttributes(imgInDiv, {"class": "card-img-top", "src": url, "id": "pic" + cl});
  cardDiv.appendChild(imgInDiv);
  var cardBodyDiv = document.createElement("div");
  setAttributes(cardBodyDiv, {"class": "card-body"});
  cardDiv.appendChild(cardBodyDiv);
  var cardTitle = document.createElement("H1");
  setAttributes(cardTitle, {"class": "card-title", "id": "titleInDiv"});
  var cardText = document.createElement("p");
  setAttributes(cardText, {"class": "card-text", "id": "descriptionInDiv"});
  var backButton = document.createElement("button");
  setAttributes(backButton, {"class": "backButton", "id": "backButton"});
  backButton.innerHTML = "Back";
  backButton.setAttribute("onclick", "changePage()");
  cardBodyDiv.appendChild(cardTitle);
  cardBodyDiv.appendChild(cardText);
  cardBodyDiv.appendChild(backButton);
  if (getCookie() == cl){
    cardTitle.innerHTML = "<i class=\"fa fa-star\"></i>" + " " + titles[cl];
  } else {
    cardTitle.innerHTML = titles[cl];
  }
  cardText.innerHTML = descriptions[cl];
  document.body.appendChild(cardDiv);
}

function daButtons(x){

  for (k = 0; k < images.length; k++){
    let c = getCookie();
    let w = x && c;
    let t = document.getElementById('FavBtn' + k);
    if (k != w && k == c) {
      t.innerHTML = "<i class=\"fa fa-close fa-2x\"></i>" + " Unfavorite";
      continue;
    } else if (k == x && k != c){
      t.innerHTML = "<i class=\"fa fa-close fa-2x\"></i>" + " Unfavorite";
      setCookie(k);
      continue;
    } else if(k == x && c != null){
      setCookie(k);
    }
    t.innerHTML = "<i class=\"fa fa-star fa-2x\"></i>" + " Make Favorite";
  }
}

function createAlert(x){
  console.log("createAlert");
  if (x == null){
    document.getElementById("FavAlert").innerHTML = "You dont have a favorite character";
  } else {
    document.getElementById("FavAlert").innerHTML = "Your New Favorite Character is " + titles[x];
  }
  myAlertBottom();
}


function changePage(x){
  if (x == null){
    window.history.back();
  } else {
    document.location.href = "Page2.html" + "?value=" + x;
  }
}

function setAttributes(elm, attr) {
  for(let key in attr) {
    elm.setAttribute(key, attr[key]);
  }
}

function addItems() {
  for (var i = 0; i < titles.length; i++) {
    var item = document.createElement("a");
    item.setAttribute("class", "dropdown-item");
    item.setAttribute("onclick", "changePage(" + i + ")");
    item.innerHTML = titles[i];
    document.getElementById('dropdownMenu').appendChild(item);
  }
}

function setCookie(j) {
  var r;
  if(j == getCookie()){
    r = null;
  }else{
    r = j;
  }
  document.cookie = "c00kie" + "=" + r + ";path=/";
  createAlert(r);
}

function getCookie() {
  var name = "c00kie" + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function myAlertBottom(){
  $(".myAlert-bottom").show();
  setTimeout(function(){
    $(".myAlert-bottom").hide();
  }, 2000);
}
