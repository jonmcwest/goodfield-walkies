  const slideshows = document.querySelectorAll('.slideshow__container');

  // Applies JS to all slideshows
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`.slideshow__slide`); // declare array of slides

    var index = 0,
      time = 5000;
    slides[index].classList.add('active');

    setInterval(() => {
      slides[index].classList.remove('active');

      //Go over each slide incrementing the index
      index++;

      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0;

      slides[index].classList.add('active');

    }, time);
  }