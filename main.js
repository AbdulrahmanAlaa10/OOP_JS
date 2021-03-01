/*
OOP OBJECT ORINTED PROGRAMMING
var User = {
	privilege: 'normal user',
	writeArticle: function(){
		console.log("I'm writing new article");
	}
};

var Moderator = {
	privilege: 'moderator',
	editArticle: function(){
		console.log("I'm editing existing article");
	}
};

var Admin = {
	privilege: 'admin',
	deleteArticle: function(){
		console.log("I'm deleting some articles");
	}
};

var User = {
	privilege: 'normal user',
	writeArticle: function(){
		console.log("I'm writing new article");
	}
};

var Moderator = Object.create(User, {
	privilege: {
		value: 'moderator',
	},
	editArticle: {
		value: function(){
			console.log("I'm editing existing article");
		},
	}
});

console.log(Moderator);
console.log(Moderator.editArticle);

var Admin = Object.create(Moderator, {
	privilege: {
		value: 'admin',
	},
	deleteArticle: {
		value: function(){
			console.log("I'm deleting some articles");
		},
	}
});

console.log(Admin);

Admin.writeArticle();

Admin.editArticle();

Admin.deleteArticle();

*/

/*
var object = {
    myName: "Alaa2"
}
console.log(object.hasOwnProperty('myName'));

var person = {
    myName: "Alaa",
    justFunc : function() {
        console.log('print');
    }
};
var object = {
    myName : "Alaa1"
}

object.__proto__ = person;
object.justFunc();
 */





// ==============================================================================

// window.document.getElementById("header");
// is the same as:
// document.getElementById("header");

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)

// var w = window.innerWidth
// var h = window.innerHeight

// var x = document.getElementById("demo");
// x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";


/*
<button onclick="openWin()">Open "myWindow"</button>
<button onclick="closeWin()">Close "myWindow"</button>

var myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=200,height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
}

function closeWin() {
  myWindow.close();
}


<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var myWindow = window.open("", "MsgWindow", "width=200,height=100");
  myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
}
*/
//document.getElementById("demo").innerHTML =
//"Screen Height: " + screen.height;
//document.getElementById("demo").innerHTML =
//"Screen Width: " + screen.width;
// document.getElementById("demo").innerHTML =
//"Available Screen Width: " + screen.availWidth;
//document.getElementById("demo").innerHTML =
//"Available Screen Height: " + screen.availHeight;
/*

*/


//window.location.href returns the href (URL) of the current page
//window.location.hostname returns the domain name of the web host
//window.location.pathname returns the path and filename of the current page
//window.location.protocol returns the web protocol used (http: or https:)
//window.location.assign() loads a new document

//document.getElementById("demo").innerHTML =
//"Page location is " + window.location.href;

//document.getElementById("demo").innerHTML =
//"Page hostname is " + window.location.hostname;

//document.getElementById("demo").innerHTML =
//"Page path is " + window.location.pathname;

//document.getElementById("demo").innerHTML =
//"Page protocol is " + window.location.protocol;

//document.getElementById("demo").innerHTML =
//"Port number is " + window.location.port;

/* inHTML */
// <input type="button" value="Load new document" onclick="newDoc()">

//function newDoc() {
//window.location.assign("https://www.w3schools.com")
//}

// The window.navigator object contains information about the visitor's browser.

// document.getElementById("demo").innerHTML =
// "cookiesEnabled is " + navigator.cookieEnabled;


// document.getElementById("demo").innerHTML =
// "navigator.appName is " + navigator.appName;

// Strange enough, "Netscape" is the application name for both IE11, Chrome, Firefox, and Safari.

// document.getElementById("demo").innerHTML =
// "navigator.appCodeName is " + navigator.appCodeName;

// document.getElementById("demo").innerHTML = navigator.appVersion;

//The platform property returns the browser platform (operating system):
// document.getElementById("demo").innerHTML = navigator.platform;

// document.getElementById("demo").innerHTML = navigator.language;
//document.getElementById("demo").innerHTML = navigator.onLine;

// document.getElementById("demo").innerHTML = navigator.javaEnabled();



/*
alert 
// alert("I am an alert box!");

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  alert("I am an alert box!");
}

// Confirm
<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var txt;
  if (confirm("Press a button!")) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}
// Prompt

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var txt;
  var person = prompt("Please enter your name:", "Harry Potter");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = txt;
}
*/

/*
<button onclick="setTimeout(myFunction, 3000)">Try it</button>

<script>
function myFunction() {
  alert('Hello');
}

<button onclick="myVar = setTimeout(myFunction, 3000)">Try it</button>

<button onclick="clearTimeout(myVar)">Stop it</button>

*/


/*

setIntravel

var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


<p id="demo"></p>

<button onclick="clearInterval(myVar)">Stop time</button>

<script>
var myVar = setInterval(myTimer, 1000);
function myTimer() {
  var d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

 */
// ==============================================================================


function foo() {
    var a = 1;
    function inner() {
        return a;
    }
    return inner;

}

var getFunc = foo();

console.log(getFunc());


/*
function makeFunc() {
    var name = "Js Abdulrahman";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();

myFunc()

*/

function myFuncnnn(a, b) {
    return a * b; 
}
document.getElementById("demo").innerHTML = myFuncnnn(2, 3);



var x = function(a,b) {
    return a * b;

}
document.getElementById("demo").innerHTML = x(9, 3);


(function() {
    document.getElementById("demo").innerHTML = "hello js";
})();


function  myFunction (a , b) {
    return a * b;
}

var x = myFunction(2 , 3) * 4;

document.getElementById("demo").innerHTML = x;


/*



function foo() {
    var b = 1;
    function inner() {
        return b;
    }
    return inner;

};

var getFunCInner = foo();
console.log(getFunCInner());



function fooo(outer) {
    function inner(innerr) {
        return outer * innerr;
    }
    return inner;
}

var getFunc = fooo(5);

console.log(getFunc(4));

 */

 
document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#submit").disabled = true;

    document.querySelector("#task").onkeyup = function () {
        if(document.querySelector("#task").value.length > 5) {
            document.querySelector("#submit").disabled = false;
        } else {
            document.querySelector("#submit").disabled = true;
        }
    };

    document.querySelector("form").onsubmit = function() {
        var task = document.querySelector("#task").value;

        var li = document.createElement("li");

        li.innerHTML = task;

        document.querySelector('#tasks').appendChild(li);
        document.querySelector("#task").value = "";
        document.querySelector("#submit").disabled = true;
        return false;

    }

});





/*document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("#red").onclick = function() {

        document.querySelector("#hello").style.backgroundColor = "red";
    }

    document.querySelector("#blue").onclick = function() {

        document.querySelector("#hello").style.backgroundColor = "blue";
    }

    document.querySelector("#green").onclick = function() {

        document.querySelector("#hello").style.backgroundColor = "green";
    }

});
*/
/*
document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll("button").forEach(function(button) {

        button.onclick = function() {
            document.querySelector("#hello").style.color = button.dataset.color;
        }
    })


});
*/




/*var button = document.getElementById("button").addEventListener("mousemove", buttonClick);

function buttonClick(e) {
    console.log(e.type);

};
*/

/*var newDiv = document.createElement("div"); //create element 
newDiv.className = "LisTs"; // add class 
newDiv.id = "howwL"; // add id 
console.log(newDiv); // show in consloe


var newDivText = document.createTextNode("Zizo and menna and noran and Sajy"); // create text node 
newDiv.appendChild(newDivText); // add to your div 



var div = document.querySelector("#divv"); // hold your parent node 
var h1 = document.querySelector("#h1"); // hold space 
div.insertBefore(newDiv, h1); // 
*/

/*

var myDiv = document.createElement("div");

document.body.appendChild(myDiv);

 var myText = document.createTextNode("hello ja and Html And css");

 myDiv.appendChild(myText);

 */

/*
var x = document.querySelector(".divvv");

x.firstElementChild = "hooww";

var x = document.querySelector("#main");

console.log(x.parentElement);

x.parentElement.style.color = "red";
*/


/*
var x = document.getElementById("woww");

console.log(x);

console.log(x.textContent);

x.style.borderBottom = "1px solid red";
*/
/*
var x = document.getElementsByTagName("h2");

console.log(x);
console.log(x[2]);

console.log(x[1].getAttribute("class"));

x[1].setAttribute("id", "how");

console.log(x[1]);

for(var i = 0; i < x.length; i++) {
    x[i].style.color = "red";
}


var submit = document.querySelectorAll('p');

for(var x = 0; x < submit.length; x++) {
    submit[x].style.color = "red"; 
}
 */



