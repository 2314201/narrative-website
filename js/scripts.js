/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }

        

        });
    });
    
});

 /* CAROUSEL https://github.com/Vetrivel-VP/expandable_carousel_flex/commit/ */

$(".option").click(function () {
  $(".option").removeClass("active");
  $(this).addClass("active");
});

 /* CAROUSEL /*/


/* NAVIGATION https://github.com/hakimel/css/tree/master/progress-nav */

 window.onload = function() {

	var toc = document.querySelector( '.toc' );
	var tocPath = document.querySelector( '.toc-marker path' );
	var tocItems;

	// Factor of screen size that the element must cross
	// before it's considered visible
	var TOP_MARGIN = 0.1,
		BOTTOM_MARGIN = 0.2;

	var pathLength;

	var lastPathStart,
		lastPathEnd;

	window.addEventListener( 'resize', drawPath, false );
	window.addEventListener( 'scroll', sync, false );

	drawPath();

	function drawPath() {

		tocItems = [].slice.call( toc.querySelectorAll( 'li' ) );

		
		tocItems = tocItems.map( function( item ) {
			var anchor = item.querySelector( 'a' );
			var target = document.getElementById( anchor.getAttribute( 'href' ).slice( 1 ) );

			return {
				listItem: item,
				anchor: anchor,
				target: target
			};
		} );

		
		tocItems = tocItems.filter( function( item ) {
			return !!item.target;
		} );

		var path = [];
		var pathIndent;

		tocItems.forEach( function( item, i ) {

			var x = item.anchor.offsetLeft - 5,
				y = item.anchor.offsetTop,
				height = item.anchor.offsetHeight;

			if( i === 0 ) {
				path.push( 'M', x, y, 'L', x, y + height );
				item.pathStart = 0;
			}
			else {
				
				if( pathIndent !== x ) path.push( 'L', pathIndent, y );

				path.push( 'L', x, y );

				
				tocPath.setAttribute( 'd', path.join( ' ' ) );
				item.pathStart = tocPath.getTotalLength() || 0;

				path.push( 'L', x, y + height );
			}

			pathIndent = x;

			tocPath.setAttribute( 'd', path.join( ' ' ) );
			item.pathEnd = tocPath.getTotalLength();

		} );

		pathLength = tocPath.getTotalLength();

		sync();

	}

	function sync() {

		var windowHeight = window.innerHeight;

		var pathStart = pathLength,
			pathEnd = 0;

		var visibleItems = 0;

		tocItems.forEach( function( item ) {

			var targetBounds = item.target.getBoundingClientRect();

			if( targetBounds.bottom > windowHeight * TOP_MARGIN && targetBounds.top < windowHeight * ( 1 - BOTTOM_MARGIN ) ) {
				pathStart = Math.min( item.pathStart, pathStart );
				pathEnd = Math.max( item.pathEnd, pathEnd );

				visibleItems += 1;

				item.listItem.classList.add( 'visible' );
			}
			else {
				item.listItem.classList.remove( 'visible' );
			}

		} );


		if( visibleItems > 0 && pathStart < pathEnd ) {
			if( pathStart !== lastPathStart || pathEnd !== lastPathEnd ) {
				tocPath.setAttribute( 'stroke-dashoffset', '1' );
				tocPath.setAttribute( 'stroke-dasharray', '1, '+ pathStart +', '+ ( pathEnd - pathStart ) +', ' + pathLength );
				tocPath.setAttribute( 'opacity', 1 );
			}
		}
		else {
			tocPath.setAttribute( 'opacity', 0 );
		}

		lastPathStart = pathStart;
		lastPathEnd = pathEnd;

	}

};

/* NAVIGATION */




const myQuestions = [
    {
      title: "Question 1 - Unusual Working Hours",
      question: "If you plan to work on weekends or public holidays, a prior written authorization by your supervisor is required and the BIOCON coordinator should be notified...<p>Select your answer then Confirm.</p>",
      background: "<img src='./img/bg_slide1.jpg'>",
      answers: {
        a: "when you arrive and leave iDiv.",
        b: "when you arrive at iDiv.",
        c: "only in case of emergency."
      },
      correctAnswer: "a",
      correctAnswerText: "That is correct.<p>For safety reasons, the BIOCON coordinator should be notified when you arrive and leave iDiv on weekends or public holidays.</p>",
      falseAnswerText: "That's not correct.<p>The BIOCON coordinator should be informed in any case!</p>"
    },
    {
      title: "Question 2 - Major Accidents",
      question: "In the event of a serious accident which requires a doctor you must submit an accident report to your university and a copy to the iDiv H&S coordinator. Accident reports must be filled in German. How many days after the accident you must submit the report?<p>Select your answer then Confirm.</p>",
      background: "<img src='./img/bg_slide2.jpg'>",
      answers: {
        a: "Submit within 2 days of the accident",
        b: "Submit within 3 days of the accident",
        c: "Submit within 5 days of the accident"
      },
      correctAnswer: "b",
      correctAnswerText: "That is correct.<p>Submit accident report to MLU within 3 days of the accident – send a copy to iDiv H&S coordinator (forms can be downloaded from the intranet).</p>",
      falseAnswerText: "That is wrong.<p>Submit this form within 3 days of the accident!</p>"
    },
    {
      title: "Question 3 - Outside the office",
      question: "You are planning a field trip to Peneda Geres? Remember: A business trip form has to be submitted.<p>It's lunchtime, you are planning to go to the HIT market to catch some food. Are you health insured inside HIT?</p><p>Select your answer then Confirm.</p>",
      background: "<img src='./img/bg_slide3.jpg'>",
      answers: {
        a: "Yes, I'm full covered for sure.",
        b: "No coverage through employer‘s health insurance.",
        c: "No, the way to HIT is not covered but inside HIT for sure!"
      },
      correctAnswer: "b",
      correctAnswerText: "That is correct.<p>No coverage through employer‘s health/liability insurance at HIT or cafeteria. The way to HIT is covered, but not inside HIT!</p>",
      falseAnswerText: "That´s wrong!<p>You are not health insured inside HIT, only the way to the supermarket is covered by your health insurance.</p>"
    },
    {
      title: "Question 4 - Assembly point",
      question: "Do you know our assembly point of Interim II?<p>Select your answer then Confirm.</p>",
      background: "<img src='./img/bg_slide4.gif'>",
      answers: {
        a: "X1",
        b: "X2",
        c: "X3"
      },
      correctAnswer: "a",
      correctAnswerText: "That is correct.<p>Our assembly point is opposite the main entrance next to the trees.</p>",
      falseAnswerText: "That is not correct.<p>X2 is no assembly point and X3 is the assembly point for Interim III.</p>"
    },
    {
      title: "Question 5 - Fire alarm",
      question: "Almost there...<p>In case of fire. Alarm & warn people in the building! Fire alarms are located always different per department! Do you know the location of the fire alarms in BIOCON?</p><p>Select your answer then Confirm.</p>",
      background: "<img src='./img/bg_slide5.jpg'>",
      answers: {
        a: "Main entrance door",
        b: "Next to Resilience room",
        c: "Opposite of woman restroom"
      },
      correctAnswer: "c",
      correctAnswerText: "That is correct.<p>The fire alarm is located opposite of woman restroom. Call fire service - 112! Focus on main questions: WHO is calling? WHAT happened? WHERE did it happen? HOW many are injured? WAIT for questions!</p>",
      falseAnswerText: "That is not correct.<p>Check the floor before you try again.</p>"
    }
  ];

  /*! WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT */
! function(a, b) { if ("function" == typeof define && define.amd) define(["module", "exports"], b);
else if ("undefined" != typeof exports) b(module, exports);
else { var c = { exports: {} };
    b(c, c.exports), a.WOW = c.exports } }(this, function(a, b) { "use strict";

function c(a, b) { if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function") }

function d(a, b) { return b.indexOf(a) >= 0 }

function e(a, b) { for (var c in b)
        if (null == a[c]) { var d = b[c];
            a[c] = d }
    return a }

function f(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }

function g(a) { var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
        c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
        d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
        e = void 0; return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }

function h(a, b) { null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]() }

function i(a, b, c) { null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }

function j(a, b, c) { null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }

function k() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight } Object.defineProperty(b, "__esModule", { value: !0 }); var l, m, n = function() {
        function a(a, b) { for (var c = 0; c < b.length; c++) { var d = b[c];
                d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d) } } return function(b, c, d) { return c && a(b.prototype, c), d && a(b, d), b } }(),
    o = window.WeakMap || window.MozWeakMap || function() {
        function a() { c(this, a), this.keys = [], this.values = [] } return n(a, [{ key: "get", value: function(a) { for (var b = 0; b < this.keys.length; b++) { var c = this.keys[b]; if (c === a) return this.values[b] } } }, { key: "set", value: function(a, b) { for (var c = 0; c < this.keys.length; c++) { var d = this.keys[c]; if (d === a) return this.values[c] = b, this } return this.keys.push(a), this.values.push(b), this } }]), a }(),
    p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
        function a() { c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")) } return n(a, [{ key: "observe", value: function() {} }]), a }(), l.notSupported = !0, m),
    q = window.getComputedStyle || function(a) { var b = /(\-([a-z]){1})/g; return { getPropertyValue: function(c) { "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function(a, b) { return b.toUpperCase() }); var d = a.currentStyle; return (null != d ? d[c] : void 0) || null } } },
    r = function() {
        function a() { var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            c(this, a), this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null, resetAnimation: !0 }, this.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass) } return n(a, [{ key: "init", value: function() { this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = [] } }, { key: "start", value: function() { var a = this; if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                    if (this.disabled()) this.resetStyle();
                    else
                        for (var b = 0; b < this.boxes.length; b++) { var c = this.boxes[b];
                            this.applyStyle(c, !0) }
                if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) { var d = new p(function(b) { for (var c = 0; c < b.length; c++)
                            for (var d = b[c], e = 0; e < d.addedNodes.length; e++) { var f = d.addedNodes[e];
                                a.doSync(f) } });
                    d.observe(document.body, { childList: !0, subtree: !0 }) } } }, { key: "stop", value: function() { this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval) } }, { key: "sync", value: function() { p.notSupported && this.doSync(this.element) } }, { key: "doSync", value: function(a) { if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) { a = a.parentNode || a; for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) { var e = b[c];
                        d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0) } } } }, { key: "show", value: function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a } }, { key: "applyStyle", value: function(a, b) { var c = this,
                    d = a.getAttribute("data-wow-duration"),
                    e = a.getAttribute("data-wow-delay"),
                    f = a.getAttribute("data-wow-iteration"); return this.animate(function() { return c.customStyle(a, b, d, e, f) }) } }, { key: "resetStyle", value: function() { for (var a = 0; a < this.boxes.length; a++) { var b = this.boxes[a];
                    b.style.visibility = "visible" } } }, { key: "resetAnimation", value: function(a) { if (a.type.toLowerCase().indexOf("animationend") >= 0) { var b = a.target || a.srcElement;
                    b.className = b.className.replace(this.config.animateClass, "").trim() } } }, { key: "customStyle", value: function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a } }, { key: "vendorSet", value: function(a, b) { for (var c in b)
                    if (b.hasOwnProperty(c)) { var d = b[c];
                        a["" + c] = d; for (var e = 0; e < this.vendors.length; e++) { var f = this.vendors[e];
                            a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d } } } }, { key: "vendorCSS", value: function(a, b) { for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) { var f = this.vendors[e];
                    d = d || c.getPropertyCSSValue("-" + f + "-" + b) } return d } }, { key: "animationName", value: function(a) { var b = void 0; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = q(a).getPropertyValue("animation-name") } return "none" === b ? "" : b } }, { key: "cacheAnimationName", value: function(a) { return this.animationNameCache.set(a, this.animationName(a)) } }, { key: "cachedAnimationName", value: function(a) { return this.animationNameCache.get(a) } }, { key: "scrollHandler", value: function() { this.scrolled = !0 } }, { key: "scrollCallback", value: function() { if (this.scrolled) { this.scrolled = !1; for (var a = [], b = 0; b < this.boxes.length; b++) { var c = this.boxes[b]; if (c) { if (this.isVisible(c)) { this.show(c); continue } a.push(c) } } this.boxes = a, this.boxes.length || this.config.live || this.stop() } } }, { key: "offsetTop", value: function(a) { for (; void 0 === a.offsetTop;) a = a.parentNode; for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop; return b } }, { key: "isVisible", value: function(a) { var b = a.getAttribute("data-wow-offset") || this.config.offset,
                    c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                    d = c + Math.min(this.element.clientHeight, k()) - b,
                    e = this.offsetTop(a),
                    f = e + a.clientHeight; return d >= e && f >= c } }, { key: "disabled", value: function() { return !this.config.mobile && f(navigator.userAgent) } }]), a }();
b["default"] = r, a.exports = b["default"] });