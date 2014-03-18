angular.module('viffReport')
  .directive('scrollToMapPosition', function ($window) {
    return function (scope, element, attributes) {

      var diffImageHeight;
      var diffVisualHeight = $(window).height() - (43 + 35 + 60);

      angular.element($window).bind("scroll", function () {
        var envImage = {
          height: element[0].height,
          parentHeight: element[0].parentElement.clientHeight
        };

        diffImageHeight = $(".diffImage img").get(0).height;
        setBlankHeight(envImage);
        var offsetY = $(document).scrollTop();
        var offsetValue = parseInt(offsetY / diffImageHeight * envImage.height);
        var envImageHeightDiff = envImage.height - envImage.parentHeight;

        if (envImageHeightDiff < offsetValue) {
          setElementTop(0 - envImageHeightDiff);
        } else {
          setElementTop(0 - offsetValue);
        }

        scope.$apply();
      });

      function setElementTop(imagePosition) {
        if (typeof imagePosition === 'number') {
          element[0].style.top = imagePosition + 'px';
        } else {
          element[0].style.top = imagePosition;
        }
      }

      function setBlankHeight(envImage) {
        var blankHeight = diffVisualHeight - (envImage.parentHeight * diffImageHeight / envImage.height);
        if ($(".blank").height() < blankHeight) {
          $(".blank").height(blankHeight);
        }
      }
    }
  });
