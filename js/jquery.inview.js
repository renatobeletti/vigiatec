!function(e){function n(){var n=window.innerHeight,t=document.compatMode;return!t&&e.support.boxModel||(n="CSS1Compat"==t?document.documentElement.clientHeight:document.body.clientHeight),n}e(window).scroll(function(){var t=n(),o=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop,i=[];e.each(e.cache,function(){this.events&&this.events.inview&&i.push(this.handle.elem)}),i.length&&e(i).each(function(){var n=e(this),i=n.offset().top,c=n.height(),d=n.data("inview")||!1;o>i+c||o+t<i?d&&(n.data("inview",!1),n.trigger("inview",[!1])):o<i+c&&(d||(n.data("inview",!0),n.trigger("inview",[!0])))})}),e(function(){e(window).scroll()})}(jQuery);