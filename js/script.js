//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
 
var navList = document.getElementById("nav-lists");
function Show() {
navList.classList.add("_Menus-show");
}

function Hide(){
navList.classList.remove("_Menus-show");
}

//Alert when the user inactive
var timeout;

document.onmousemove = resetTimer;
document.onclick = resetTimer;

function resetTimer() {
  clearTimeout(timeout);
  timeout = setTimeout(function(){
    alert("You have beed inactive for 3 minutes. If you need our help you can always contact us.");
  }, 3*60*1000);
}

//FAQ page
let faqArray = [{
  h3: "What do you sell on the site?",
  p: 'We sell travel packages of leading tour operators online. We show you the same thing that travel agency managers see. You can choose your own tour that you like, get acquainted with the information and book it. Also, you immediately see all the newly appearing “burning” offers and you don’t have to waste your time, come to the travel agency’s office to book it. You instantly book a trip on the site and wait for confirmation by phone.' 
 
},
{
  h3: "What do you get the money for?",
  p: 'We earn on agency fees from tour operators. The amount of remuneration depends on the tour operator and the volume of sales.' 
 
},
{
  h3: "What is included in the price of the tour?",
  p: 'We always show the final cost of the tour, which may change during actualization, but this entirely depends on the tour operator. The cost of the tour usually includes: a voucher for hotel accommodation, a flight to the host country and back, a transfer from the airport to the hotel and back, medical insurance. In addition, fuel surcharges may be added - it depends on the airline that you choose. If you want to improve the conditions of your trip, for example, book a business class flight, you will also need to pay extra for this.' 
 
},
{
   h3: "Is the payment for a child the same as for an adult?",
  p: 'It depends on the hotel and airline. In most cases, hotels and airlines request a lower amount per child, but this is always individual. There are several age groups of children, in our system you can enter the age of the child and the system will give you the final cost, taking into account all the discounts. For babies, only a boarding pass is usually paid.' 
 
},
{
   h3: "If changed my mind for any reason, and the tour has already been confirmed, what should I do?",
  p: 'You need to write an email, after that we will inform you of the amount of penalties for cancellation of the reservation. If you agree, we will cancel your contract and return you money minus a fine.' 
 
},
{
   h3: "How to pay for the selected tour?",
  p: 'On our site, the tour can only be paid by credit card. We accept bank cards issued both to individuals and legal entities. You can also pay for the tour in cash at the office, but then we can’t book the tour you have chosen right away, which means its cost may change.' 
 
},
{
   h3: "What types of cards are accepted for payment?",
  p: 'We accept cards of international systems Visa, Maestro and MasterCard of any type (Classic, Gold, Platinum, World and others) and any type (debit, credit, virtual, prepaid) of all banks.' 
 
},
{
  h3: "How secure is card payment on your site?",
  p: 'We use the latest technology at the moment. This is a completely safe procedure, all your data is encrypted and encrypted, payment processing is performed on the bank server.' 
 
},
{
   h3: "Why does my payment fail?",
  p: 'Your card may not have enough funds to pay for the order. In addition, make sure that:' 
 
},
{
   h3: "Is it possible to exchange or return the tour?",
  p: 'You can cancel the tour by following our instructions. You need to write an email, after that we will inform you of a possible penalty for canceling a reservation. If you agree, we will cancel your contract and return the money to you, minus a fine.' 
 
} ]
$(function () {
    let faq = '<li> <h3>' + faqArray[0].h3 +'</h3><p>' + faqArray[0].p +'</p></li><li> <h3>' + faqArray[1].h3 +'</h3><p>' + faqArray[1].p +'</p></li><li> <h3>' + faqArray[2].h3 +'</h3><p>' + faqArray[2].p +'</p></li><li> <h3>' + faqArray[3].h3 +'</h3><p>' + faqArray[3].p +'</p></li><li> <h3>' + faqArray[4].h3 +'</h3><p>' + faqArray[4].p +'</p></li><li> <h3>' + faqArray[5].h3 +'</h3><p>' + faqArray[5].p +'</p></li><li> <h3>' + faqArray[6].h3 +'</h3><p>' + faqArray[6].p +'</p></li><li> <h3>' + faqArray[7].h3 +'</h3><p>' + faqArray[7].p +'</p></li><li> <h3>' + faqArray[8].h3 +'</h3><p>' + faqArray[8].p +'</p><ul> <li>You were not mistaken when entering data from your card</li> <li>Your bank did not set limits on the volume of card transactions during the day</li> <li>Your bank does not prohibit online payments</li> </ul></li><li> <h3>' + faqArray[9].h3 +'</h3><p>' + faqArray[9].p +'</p></li>';
    $(' ul.faq_list').html(faq); 
});

//Dynamic page title changing
jQuery(document).ready(function( $ ){
  // Get page title
  var pageTitle = $("title").text();

  // Change page title when leaving the page
  $(window).blur(function() {
    $("title").text("Travel & Tourism | We missing you");
  });

 // Change page title back on focus
  $(window).focus(function() {
    $("title").text(pageTitle);
  });
});
