
/* Tuesday 16th of April 2019 Class Assignment JavaScript work can go here */

const assignment_title = "Tuesday 16th of April 2019 Class Assignment";











animateCSS('.logo', 'bounceInLeft');

var logo = document.querySelector('.logo');

logo.addEventListener('click', function(){
  animateCSS('.logo', 'bounce');
});


function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
















