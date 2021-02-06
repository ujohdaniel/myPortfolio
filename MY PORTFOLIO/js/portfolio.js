// variables
const handBugger = document.getElementsByClassName('handbugger')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];
const svg = document.querySelector('svg');
const bars = document.getElementsByClassName('bars');
const navbar = document.querySelector('.navbar')
const sectionOne = document.querySelector('#hero')
const header = document.getElementsByTagName('title');
const form = document.querySelector('.form');
let menuOpen = false;


// form style
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log('yep');
});

// scroll animation vars
const sliders = document.querySelectorAll('.slide-in')
const faders = document.querySelectorAll('.fade-in');
const apearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -100px 0px'
};

// logic
const apearOnScroll = new IntersectionObserver(function
    (entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add('appear');
                apearOnScroll.unobserve(entry.target)
            }
        })
    },apearOptions)

    faders.forEach(fader => {
        apearOnScroll.observe(fader)
    })



    sliders.forEach(slider => {
        apearOnScroll.observe(slider)
    })
// end of scroll animation vars




// end of variables


// scroll observer
const sectionOneOptions = {
    rootMargin: '-600px 0px 0px 0px'
};
const sectionOneObserver =  new IntersectionObserver(function (
    entries,
    sectionOneObserver
    
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            navbar.classList.add('navbar-scrolled');
        }else{
            navbar.classList.remove('navbar-scrolled')
        }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);
// end of scroll observer



// nav bar logic
handBugger.addEventListener('click',()=> {
    navLinks.classList.toggle('active')
    if(!menuOpen) {
        handBugger.classList.add('open');
   
        handBugger.classList.remove('close');
        svg.classList.add('cancel');
        svg.classList.remove('hide');
        menuOpen = true;
    }else {
        handBugger.classList.remove('open');
        handBugger.classList.add('close');
        svg.classList.remove('cancel');
        svg.classList.add('hide');

        menuOpen = false
    }
} );
// end of navbar logic


