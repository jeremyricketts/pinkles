
$(function() {

	// Fixes longstanding iOS bug related to text size on orientation switching.
	// The only other way fix this is to add "maximum-scale=1" to the viewpost meta tag
	// which sucks because it prevents user zooming.
	// See: http://paulstamatiou.com/responsive-retina-blog-development-part-1 
	// AND https://github.com/scottjehl/iOS-Orientationchange-Fix
	/*! A fix for the iOS orientationchange zoom bug. Script by @scottjehl, rebound by @wilto.MIT / GPLv2 License.*/(function(a){function m(){d.setAttribute("content",g),h=!0}function n(){d.setAttribute("content",f),h=!1}function o(b){l=b.accelerationIncludingGravity,i=Math.abs(l.x),j=Math.abs(l.y),k=Math.abs(l.z),(!a.orientation||a.orientation===180)&&(i>7||(k>6&&j<8||k<8&&j>6)&&i>5)?h&&n():h||m()}var b=navigator.userAgent;if(!(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(b)&&b.indexOf("AppleWebKit")>-1))return;var c=a.document;if(!c.querySelector)return;var d=c.querySelector("meta[name=viewport]"),e=d&&d.getAttribute("content"),f=e+",maximum-scale=1",g=e+",maximum-scale=10",h=!0,i,j,k,l;if(!d)return;a.addEventListener("orientationchange",m,!1),a.addEventListener("devicemotion",o,!1)})(this); 


	// =======================================
	// Wire up "view full site" links to override the media queries.
	// =======================================

	// Set 1200 to whatever the largest width is. See _media-queries.scss.
	function fullSite() { $('meta[name="viewport"]').attr('content', 'width=1200,initial-scale=.5'); }

	if ($.cookie('view-full-site')) { fullSite(); }

	$('.view-full-site').click( function(){
		// Fire function
		fullSite();
		// Set cookie
		$.cookie('view-full-site', true);
		return false;
	});

	$('.view-mobile-site').click( function(){
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
		// Remove cookie
		$.removeCookie('view-full-site');
		return false;
	});

});



// $(window).load(function () {

	//js here

// });




