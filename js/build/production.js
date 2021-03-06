/*
 * jquery.infieldlabel
 * A simple jQuery plugin for adding labels that sit over a form field and fade away when the fields are populated.
 * 
 * Copyright (c) 2009 - 2013 Doug Neiner <doug@dougneiner.com> (http://code.dougneiner.com)
 * Source: https://github.com/dcneiner/In-Field-Labels-jQuery-Plugin
 * Dual licensed MIT or GPL
 *   MIT (http://www.opensource.org/licenses/mit-license)
 *   GPL (http://www.opensource.org/licenses/gpl-license)
 *
 * @version 0.1.4
 */
(function(e){e.InFieldLabels=function(n,i,t){var a=this;a.$label=e(n),a.label=n,a.$field=e(i),a.field=i,a.$label.data("InFieldLabels",a),a.showing=!0,a.init=function(){var n;a.options=e.extend({},e.InFieldLabels.defaultOptions,t),a.options.className&&a.$label.addClass(a.options.className),setTimeout(function(){""!==a.$field.val()?(a.$label.hide(),a.showing=!1):(a.$label.show(),a.showing=!0)},200),a.$field.focus(function(){a.fadeOnFocus()}).blur(function(){a.checkForEmpty(!0)}).bind("keydown.infieldlabel",function(e){a.hideOnChange(e)}).bind("paste",function(){a.setOpacity(0)}).change(function(){a.checkForEmpty()}).bind("onPropertyChange",function(){a.checkForEmpty()}).bind("keyup.infieldlabel",function(){a.checkForEmpty()}),a.options.pollDuration>0&&(n=setInterval(function(){""!==a.$field.val()&&(a.$label.hide(),a.showing=!1,clearInterval(n))},a.options.pollDuration))},a.fadeOnFocus=function(){a.showing&&a.setOpacity(a.options.fadeOpacity)},a.setOpacity=function(e){a.$label.stop().animate({opacity:e},a.options.fadeDuration,function(){0==e&&a.$label.hide()}),a.showing=e>0},a.checkForEmpty=function(e){""===a.$field.val()?(a.prepForShow(),a.setOpacity(e?1:a.options.fadeOpacity)):a.setOpacity(0)},a.prepForShow=function(){a.showing||(a.$label.css({opacity:0}).show(),a.$field.bind("keydown.infieldlabel",function(e){a.hideOnChange(e)}))},a.hideOnChange=function(e){16!==e.keyCode&&9!==e.keyCode&&(a.showing&&(a.$label.hide(),a.showing=!1),a.$field.unbind("keydown.infieldlabel"))},a.init()},e.InFieldLabels.defaultOptions={fadeOpacity:.5,fadeDuration:300,pollDuration:0,enabledInputTypes:["text","search","tel","url","email","password","number","textarea"],className:!1},e.fn.inFieldLabels=function(n){var i=n&&n.enabledInputTypes||e.InFieldLabels.defaultOptions.enabledInputTypes;return this.each(function(){var t,a,o=e(this).attr("for");o&&(t=document.getElementById(o),t&&(a=e.inArray(t.type,i),(-1!==a||"TEXTAREA"===t.nodeName)&&new e.InFieldLabels(this,t,n)))})}})(jQuery);
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, window, document, undefined) {


	// Nav toggle
    var $navToggle = $('#nav-toggle');
    $navToggle.click(function(e){
        $(this).toggleClass('active');
        $('#header').toggleClass('expanded');
        $('.menu-blocks', '#header').slideToggle();
        $('html, body').animate({
            scrollTop: $('#page').offset().top
        });
        e.preventDefault();
    });


    // Projects toggle
    var $projectToggle = $('#projects');
    $projectToggle.click(function(e){
        $(this).toggleClass('active');
        $('.projects-menu', '#header').slideToggle();
        e.preventDefault();
    });


    // Infield label
    $(function() {
        $("label.infield").inFieldLabels();
    });


})(jQuery, this, this.document);
