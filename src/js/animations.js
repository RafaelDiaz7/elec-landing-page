
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



//Event listener to rewrite input.text__input value to empty string
let inputsArray = document.querySelectorAll('.text__input');


//Disapearing animation and then rewrite value with anime js
inputsArray.forEach(
function(elem) {
    elem.addEventListener("focus", 
        function() {

          // Code to move the cursor to the '0' character. 
          // (Not finished, for safari and chrome is a code and for firefox is another, different API's)
          /*if (window.getSelection()) {
            let selObj = window.getSelection();
            let range  = selObj.getRangeAt(0);
            console.log(range);
          }*/
          /*if (elem.createTextRange) {
              var part = elem.createTextRange();
              part.move("character", 0);
              part.select();
            } else if (elem.setSelectionRange) {
              elem.setSelectionRange(0, 0);
            }
            elem.focus();*/

          anime({
            targets: elem,
            keyframes: [
              {
                color: '#555',
              },
              {
                color: '#999',
              },
              {
                color: '#fff',
              },
            ],
            duration: 430,
            easing: 'easeInOutCubic'
          });
          
          setTimeout(function() {
            elem.value = '';
            anime({
              targets: elem,
              keyframes: [
                {
                  color: '#fff',
                },
                {
                  color: '#999',
                },
                {
                  color: '#444',
                },
              ],
              duration: 5,
              easing: 'easeInOutCubic'
            });
          }, 430);
        
        });
});

// When focusing out of each input, 
// put their value again to avoid user forgetting what input its each one 
inputsArray[0].addEventListener("focusout", function() {
      inputsArray[0].value = 'Nombre';
})

inputsArray[1].addEventListener("focusout", function() {
      inputsArray[1].value = 'Apellido';
})

inputsArray[2].addEventListener("focusout", function() {
      inputsArray[2].value = 'Email';
})




//Disapearing animation and then rewrite value without anime js
/*inputsArray.forEach(
  function(elem) {
    elem.addEventListener("focus", 
      function() {
        elem.classList.add('focused-animation');
        setTimeout(function() {elem.value = '';}, 100);
    });
});*/


//only rewrite text__input value
/*inputsArray.forEach(
  function(elem) {
    elem.addEventListener("focus", 
      function(event) {
        event.target.value = '';
    });
});*/


