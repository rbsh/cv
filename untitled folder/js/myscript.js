$(function() {

	"use strict";


//======= CAROUSEL ========
	var slideqty = $('#featured .item').length;
	var wheight = $(window).height(); //get the height of the window
	var randSlide = Math.floor(Math.random()*slideqty);

	//Automatically generate carousel indicators
	for (var i=0; i < slideqty; i++) {
		var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
		if (i === randSlide) {
			insertText += ' class="active" ';
		}
		insertText += '></li>';
		$('#featured ol').append(insertText);
	}

	$('.fullheight').css('height', wheight); //set to window tallness 
	//adjust height of .fullheight elements on window resize
	$(window).resize(function() {
		wheight = $(window).height(); //get the height of the window
		$('.fullheight').css('height', wheight); //set to window tallness  
	});

	$('#featured .item').eq(randSlide).addClass('active');

	//replace IMG inside carousels with a background image
	$('#featured .item img').each(function() {
		var imgSrc = $(this).attr('src');
		$(this).parent().css({'background-image': 'url('+imgSrc+')'});
		$(this).remove();
	});

	$('.carousel').carousel({
		interval: 5000,
		pause: false
	});



//========== NAVIGATION ===========
	// var topoffset = 70; //variable for menu height

	//Activate Scrollspy
	// $('body').scrollspy({
	// 	target: 'header .navbar',
	// 	offset: topoffset
	// });


//============= collapsible menu disappear when user clicks on any of the item he wants
	$("#header nav ul li a").on("click", function(){
		$("nav #collapse").removeClass("in");
	});







//========== SMOOTH SCROLLING ===========
	$('.navbar a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') === 
	  this.pathname.replace(/^\//,'') && 
	  location.hostname === this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html,body').animate({
	      scrollTop: target.offset().top-topoffset+2
	    }, {
                duration: 'slow',
                easing: 'easeInCirc'
            });
	    return false;
	  } //target.length
	} //click function
	}); //smooth scrolling








// =========== dashboard_page selecting main navigation
	$(".dashboardPage .navbar-left li a").on("click", function(){

		$(".dashboardPage .navbar-left li").removeClass("active");
		var getTheParent = $(this).parent();
		getTheParent.addClass("active");

		var getTheConvertedId = getTheParent.text().toLowerCase().replace(" ","");
		console.log(getTheConvertedId);
		if(getTheConvertedId === "training"){
			$("#account").addClass("displayingOff").removeClass("displayingOn");
			$("#candidatefeedback").addClass("displayingOff").removeClass("displayingOn");
			$("#training").removeClass("displayingOff").addClass("displayingOn");
		} else if(getTheConvertedId === "account"){
			$("#candidatefeedback").addClass("displayingOff").removeClass("displayingOn");
			$("#training").addClass("displayingOff").removeClass("displayingOn");
		 	$("#account").removeClass("displayingOff").addClass("displayingOn");
		 } else{
	 		$("#training").addClass("displayingOff").removeClass("displayingOn");
		 	$("#account").addClass("displayingOff").removeClass("displayingOn");
		 	$("#candidatefeedback").removeClass("displayingOff").addClass("displayingOn");	
		 }

	});




// =========== dashboard_page selecting #account tab page contents
	$("#dashboard #account .row.row8 .leftLinks ul li a").on("click", function(){

		$("#dashboard #account .row.row8 .leftLinks ul li").removeClass("active");
		var getTheParent1 = $(this).parent();
		getTheParent1.addClass("active");

		var getTheConvertedId1 = getTheParent1.text().toLowerCase().replace(" ","");
		console.log(getTheConvertedId1);
		if(getTheConvertedId1 === "contactinfo"){
			$("#changepassword").addClass("displayingOff").removeClass("displayingOn");
			$("#affiliates").addClass("displayingOff").removeClass("displayingOn");
			$("#changepaypalemail").addClass("displayingOff").removeClass("displayingOn");
			$("#contactinfo").removeClass("displayingOff").addClass("displayingOn");
		} else if(getTheConvertedId1 === "changepassword"){
			$("#contactinfo").addClass("displayingOff").removeClass("displayingOn");
			$("#affiliates").addClass("displayingOff").removeClass("displayingOn");
			$("#changepaypalemail").addClass("displayingOff").removeClass("displayingOn");
			$("#changepassword").removeClass("displayingOff").addClass("displayingOn");
		 } else if(getTheConvertedId1 === "affiliates"){
			$("#contactinfo").addClass("displayingOff").removeClass("displayingOn");
			$("#changepassword").addClass("displayingOff").removeClass("displayingOn");
			$("#changepaypalemail").addClass("displayingOff").removeClass("displayingOn");
			$("#affiliates").removeClass("displayingOff").addClass("displayingOn");
		 } else {
			$("#contactinfo").addClass("displayingOff").removeClass("displayingOn");
			$("#changepassword").addClass("displayingOff").removeClass("displayingOn");
			$("#affiliates").addClass("displayingOff").removeClass("displayingOn");
			$("#changepaypalemail").removeClass("displayingOff").addClass("displayingOn");
		 }

	});





















});
