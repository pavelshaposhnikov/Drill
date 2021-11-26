/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {
	slowmo.dispatchEvent(clickEvent);
	burger.dispatchEvent(clickEvent);
	
	setTimeout(function(){
		burger.dispatchEvent(clickEvent);
		
		setTimeout(function(){
			slowmo.dispatchEvent(clickEvent);
		}, 3500);
	}, 5500);
});



/* **** MINT TIMER **** */

let nextMonth = new Date(new Date().getFullYear(),
                         (new Date().getMonth() + 1) % 12);

if (nextMonth.getMonth() == 0) {
  nextMonth.setFullYear(nextMonth.getFullYear() + 1);
}

let nextMonthString = nextMonth.toISOString();
window.setInterval(() => {
  const timeRemaining = getTimeRemaining(nextMonth);
  $('.days').text(('0' + timeRemaining.days).slice(-2));
  $('.hours').text(('0' + timeRemaining.hours).slice(-2));
  $('.minutes').text(('0' + timeRemaining.minutes).slice(-2));
  $('.seconds').text(('0' + timeRemaining.seconds).slice(-2));
}, 1000);

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

/* **** FAQ ACCORDION **** */

let accordion = document.querySelector('.faq__accordion');
let items = accordion.querySelectorAll('.faq__accordion-item');
let title = accordion.querySelectorAll('.faq__accordion-title');

function toggleAccordion() {
  let thisItem = this.parentNode;
  
  items.forEach(item => {
    if (thisItem == item ) {
      // if this item is equal to the clicked item, open it.
      thisItem.classList.toggle('active');
      return;
    } 
    // otherwise, remove the open class
    item.classList.remove('active');
  });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));


/* **** SMOOTH SCROLL **** */

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 25
  }, 600);
});