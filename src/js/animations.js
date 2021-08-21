
//Diagram animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    // let diagramItems = entry.target.querySelectorAll('.diagram__item');

    if (entry.isIntersecting) {
      anime({
        targets: '.diagram__img',
        keyframes: [
          {
            opacity: 1,
            translateY: -100,
          },
        ],
        duration: 1900,
        easing: 'easeInOutCubic'
      });

      anime({
        targets: '.diagram__content',
        keyframes: [
          {
            opacity: 1,
            translateY: -140,
          },
        ],
        duration: 1900,
        easing: 'easeInOutCubic'
      });
      
      /*anime({
        targets: '.diagram__content',
        opacity: 1,
        translateY: -140,
        easing: 'easeInOutQuad'
      });*/
    return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    // square.classList.remove('square-animation');
  });
});
observer.observe(document.querySelector('.center-ct'));

// const contentObserver = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     const dContent = entry.target.querySelector('.diagram__content');

//     if (entry.isIntersecting) {
//       anime({
//         targets: '.diagram__content',
//         opacity 1,
//         easing: 'easeInOutQuad'
//       });
//       return; // if we added the class, exit the function
//     }

//     // We're not intersecting, so remove the class!
//     // square.classList.remove('square-animation');
//   });
// });
// contentObserver.observe(document.querySelector('.center-ct'));






