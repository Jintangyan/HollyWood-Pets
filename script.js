    //looping images in gallery container
    var images = [
      "images/before&after/315552192_571028285025421_3382647228743310304_n.jpeg",
      "images/before&after/316688529_574066481388268_5039149725219494825_n.jpeg",
      "images/before&after/316821641_578524574275792_3284985987637984131_n.jpeg",
      "images/before&after/style2.webp",
      "images/before&after/style3.jpeg",
      "images/before&after/style4.jpeg",
      "images/before&after/style5.jpeg",
      "images/before&after/style6.jpeg",
      "images/before&after/style7.jpeg",

    ];
    var gcurrentIndex = 0;
    // Initialize the gallery with the first image
    document.getElementById("gallery-image").src = images[gcurrentIndex];
    function move(step) {
      gcurrentIndex += step;
      if (gcurrentIndex < 0) gcurrentIndex = images.length - 1;
      if (gcurrentIndex >= images.length) gcurrentIndex = 0;
      document.getElementById("gallery-image").src = images[gcurrentIndex];
    }

    //looping images in social container
    const carouselImages = document.getElementById('scarousel-images');
    let currentIndex = 0;
    const imagesCount = carouselImages.children.length;

    function moveCarousel(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = imagesCount - 1;
      }
      if (currentIndex >= imagesCount) {
        currentIndex = 0;
      }
      carouselImages.style.transform = `translateX(${-currentIndex * 300}px)`;
    }


    $(document).ready(function () {
      // Add smooth scrolling to all links in navbar + footer link
      $(".navbar a, footer a[href='#myPage']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();

          // Store hash
          var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      $(window).scroll(function () {
        $(".slideanim").each(function () {
          var pos = $(this).offset().top;

          var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
        });
      });
    })
