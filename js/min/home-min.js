!function(){"use strict";$(document).ready(function(){function n(){var n=$("body").height();$(".sectionCanvas").each(function(t,e){$(e).innerHeight()<=n&&$(e).innerHeight(n)})}function t(n){var t=n.find(".sectionContent"),e=n.offset().top,i=n.height(),o=t.height(),c=Math.abs(i-o)/2+e;t.offset({top:c})}$(window).trigger("hashchange"),n(),t($(".introduction")),t($(".coverage")),t($(".environmentallyFriendly")),t($(".experienced")),t($(".contactUs"))})}();
//# sourceMappingURL=./home-min.js.map