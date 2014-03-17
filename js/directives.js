angular.module('viffReport')
  .directive('scrollToMapPosition', function ($window) {
    return function (scope, element, attributes) {

      angular.element($window).bind("scroll", function () {
        var DIFF_IMAGE_SELECTOR = $(".diffImage img");
        var WINDOW_HEIGHT = $(window).height();
        var DIFF_VISUAL_HEIGHT = WINDOW_HEIGHT - (43 + 35 + 60);

        var offset_y = $(document).scrollTop();
        var diffImageHeight = DIFF_IMAGE_SELECTOR.get(0).height;
        var envImage = {
          height: element[0].height,
          parentHeight: element[0].parentElement.clientHeight
        };
        var offset_value = parseInt(offset_y / diffImageHeight * envImage.height);

        // when scroll bar at the top of window
        if (offset_y <= 10 || envImage.parentHeight > envImage.height) {
          return element[0].style.top = 0;
        }

        // when scroll bar at the bottom of window
        var offset_to_bottom = $(document).height() - ($(window).height() + offset_y);
        if (offset_to_bottom < 30 || (envImage.height - envImage.parentHeight) < offset_value) {
          imagePosition = parseInt(envImage.parentHeight - envImage.height);
          return element[0].style.top = integerToPixel(imagePosition);
        }

        var blankHeight = DIFF_VISUAL_HEIGHT - (envImage.parentHeight * diffImageHeight / envImage.height);
        $(".blank").height(blankHeight);

        element[0].style.top = integerToPixel(0 - offset_value);
        scope.$apply();
      });

      function integerToPixel(imagePosition) {
        if (typeof imagePosition === 'number') {
          return imagePosition + 'px';
        }

        return imagePosition;
      }
    }
  });
