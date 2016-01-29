(function () {
  'use strict';

  /**
    * Execute once DOM has been loaded
    */
  $(document).ready(function(){

    /* fix vertical when content doesn't overflow */
    function fullscreenFix(){
      var pageHeight = $('body').height();
      // set sections' height size
      $(".sectionCanvas").each(function(index, item){
        if($(item).innerHeight() <= pageHeight){
          $(item).innerHeight(pageHeight);
        }
      });
    }

    /* centralize an image if the image doesn't overflow */
    function vCentalize ( container ) {
      var content = container.find('.sectionContent');
      var containerTopPosition = container.offset().top;
      var containerHeight = container.height();
      var contentHeight = content.height();
      var contentTopPosition = (Math.abs(containerHeight - contentHeight) / 2) + containerTopPosition;
      content.offset({ 'top': contentTopPosition });
    }

    $(window).trigger('hashchange');

    // set window size
    fullscreenFix();
    // vertically-centralize sections
    vCentalize (  $('.introduction') );
    vCentalize (  $('.coverage') );
    vCentalize (  $('.environmentallyFriendly') );
    vCentalize (  $('.experienced') );
    vCentalize (  $('.contactUs') );

  });

}());
