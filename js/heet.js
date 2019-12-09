//nav

var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}

//Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
  	slideIndex = 1
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4500); 
}
//slideshow end
function myMap() {
			var location = {lat: 43.653225, lng: -79.383186};
				var map = new google.maps.Map(document.getElementById("googleMap"),{zoom: 5,center: location});
		var marker = new google.maps.Marker({
				position:location,
				map: map
			});
}


//Feedback Page Js
function results(){
          let fn = document.getElementById("fname").value;
          let ln = document.getElementById("lname").value;
          let e = document.getElementById("email").value;

          if(document.getElementById('e').checked){
            fb = document.getElementById('e').value;
          }else if(document.getElementById('g').checked){
            fb = document.getElementById('g').value;
          }else if(document.getElementById('s').checked){
            fb = document.getElementById('s').value;
          }else{
            fb = document.getElementById('p').value;
          }

          if(document.getElementById('e1').checked){
            fb1 = document.getElementById('e1').value;
          }else if(document.getElementById('g1').checked){
            fb1 = document.getElementById('g1').value;
          }else if(document.getElementById('s1').checked){
            fb1 = document.getElementById('s1').value;
          }else{
            fb1 = document.getElementById('p1').value;
          }

          if(document.getElementById('e2').checked){
            fb2 = document.getElementById('e2').value;
          }else if(document.getElementById('g2').checked){
            fb2 = document.getElementById('g2').value;
          }else if(document.getElementById('s2').checked){
            fb2 = document.getElementById('s2').value;
          }else{
            fb2 = document.getElementById('p3').value;
          }

          if(document.getElementById('e3').checked){
            fb3 = document.getElementById('e3').value;
          }else if(document.getElementById('g3').checked){
            fb3 = document.getElementById('g3').value;
          }else if(document.getElementById('s3').checked){
            fb3 = document.getElementById('s3').value;
          }else{
            fb3 = document.getElementById('p3').value;
          }

          if(document.getElementById('e4').checked){
            fb4 = document.getElementById('e4').value;
          }else if(document.getElementById('g4').checked){
            fb4 = document.getElementById('g4').value;
          }else if(document.getElementById('s4').checked){
            fb4 = document.getElementById('s4').value;
          }else{
            fb4 = document.getElementById('p4').value;
          }

          let c = document.getElementById('t1').value;
          let c1 = document.getElementById('t2').value;
          let c2 = document.getElementById('t3').value;

            
              document.write("<div style='background-color: #D3D3D3;width:50%;border:2px solid Black;padding:50px;margin-left:25%;font-size:25px;'>")
              document.write("<center><h2>Thank You</h2></center>")
              document.write("<b>Name :</b>" + ' ' +  fn + ' ' +  ln + "<br>");
              document.write("<b>Email :</b>" + ' ' + e + "<br>");

              document.write("<b>Trip Feedback</b>" + "<br>");
              document.write("You have Chosen :" + ' ' + fb + "<br>");

              document.write("<b>The Comprehensiveness,clarity,and accuracy of the information provided on our website.</b>" + "<br>");
              document.write(" You Have Chosen :" + ' ' + fb1 + "<br>");

              document.write("<b>The Booking Process :</b>" + "<br>");
              document.write("You Have Chosen : " + ' ' + fb2 + "<br>");

              document.write("<b> The Transportation vehicle : </b>" + "<br>");
              document.write("You have Chosen :" + ' ' + fb3 + "<br>");

              document.write("<b>Your accommodations and Eqipment you were provided with,if applicable : </b>" + "<br>");
              document.write("You have Chosen :" + ' ' + fb4 + "<br>");
              
              document.write("<b>Other comments or Suggestion :</b>" + "<br>");
              document.write(c + "<br>");
              document.write("<b>What other trips would you like to see us organize? :</b>" + "<br>");
              document.write(c1 + "<br>");
              document.write("<b>Would you like to write a testimonial/review for other clients to read? :</b>" + "<br>");
              document.write(c2 + "<br>");
              document.write("<a href='feedback.html'><button style='background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;'>Want To Change</button></a>");
              document.write("<a href='feedback.html'><button style='background-color: RED;border: none;color: white;padding: 15px 32px;text-align: center text-decoration: none;display: inline-block;font-size: 16px;margin: 4px 2px;cursor: pointer;'>Submit</button></a>");
              document.write("</div>");
              }

//less Btn
function lessbtn1() {
  var x = document.getElementById("btn1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function lessbtn2() {
  var x = document.getElementById("btn2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function  lessbtn3() {
  var x = document.getElementById("btn3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function lessbtn4() {
  var x = document.getElementById("btn4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
//less Btn End

// // Storing data:
// myObj1 = {name: "<p>You can make a booking online through our website and complete your transaction using a variety of secure payment options that are available. If you would like to make a booking/enquiry on the phone, please contact our 24x7 Customer Support service.</p>"};
// myJSON1 = JSON.stringify(myObj1);
// localStorage.setItem("testJSON", myJSON1);

// // Retrieving data:
// text = localStorage.getItem("testJSON");
// obj = JSON.parse(text);
// document.getElementById("demo").innerHTML = obj.name;

//   var myObj2, myJSON2, text1, obj1;
//   //Storing data:
//  myObj2 = { name: "For International Hotels: 1-234-567 8910 (Charges Apply)<br>For International and Domestic Holidays: 1-234-567 890 (Charges Apply)<br>For International Air Tickets: 1-234-567 8910<br>For Domestic Hotels: Please logon to MakeMyTrip Website or App<br>For Domestic Air tickets: Please logon to Travel&Tourism Website or App"};
//   myJSON2 = JSON.stringify(myObj2);
//   localStorage.setItem("testJSON", myJSON2);

//  //Retrieving data:
//   text1 = localStorage.getItem("testJSON");
//    obj1 = JSON.parse(text1);
//    document.getElementById("demo1").innerHTML = obj1.name;

//     var myObj3, myJSON3, text2, obj2;
//   //Storing data:
//  myObj3 = { name: "<p>Retail Offices - You can walk in to any of our retail offices, which are present in more than 20 major cities in india, and our travel specialists will help you with your holiday and travel needs.</p><br><a href='#'>Click here for our Head Office and Retail Office Locations</a>"};
//   myJSON3 = JSON.stringify(myObj3);
//   localStorage.setItem("testJSON", myJSON3);

//  //Retrieving data:
//   text2 = localStorage.getItem("testJSON");
//    obj2 = JSON.parse(text2);
//    document.getElementById("demo2").innerHTML = obj2.name;
