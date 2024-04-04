console.log('hello world!');

const myName = 'Sai Pavan Marlakunta';
console.log(myName);

// const h1 = document.querySelector('.heading-primary');

// h1.addEventListener('click', function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = 'red';
//   h1.style.padding = "5rem";
// });

// set currentYear
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work - Doing it the hard way.
// const navButton = document.querySelector('.icon-mobile-nav[name="menu-outline"]');
// navButton.addEventListener('click', function () {
//   var mainNav = document.querySelector('.header');
//   mainNav.classList.add("nav-open");
// });

// const navCloseButton = document.querySelector('.icon-mobile-nav[name="close-outline"]');
// navCloseButton.addEventListener('click', function () {
//   var mainNav = document.querySelector('.header');
//   mainNav.classList.remove("nav-open");
// });

// Make mobile navigation work - Doing it the easier way.
const header = document.querySelector('.header');
const navButton = document.querySelector('.btn-mobile-nav');

navButton.addEventListener('click', function () {
  header.classList.toggle("nav-open");
});


// // Scrolling View - By Sections
// const navLinks = document.querySelectorAll('.main-nav-link');

// // Iterate over each navigation link
// navLinks.forEach(function (navLink) {
//   // Add click event listener to each navigation link
//   navLink.addEventListener('click', function (event) {
//     // Prevent the default behavior of the anchor tag
//     event.preventDefault();

//     // Get the target section's class name from the href attribute
//     const targetClassName = this.getAttribute('href').substring(1); // Removing the '#' character

//     // Find all elements with the target class name
//     const targetSections = document.getElementsByClassName(targetClassName);

//     // Check if any target sections were found
//     if (targetSections.length > 0) {
//       // Scroll to the first target section found

//       // Different types of scrolling behaviours.
//       // targetSections[0].scrollIntoView({ behavior: 'smooth' });
//       // targetSections[0].scrollIntoView({ behavior: 'auto' });
//       // targetSections[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
//       targetSections[0].scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest', offsetTop: -100 });

//     } else {
//       console.error("Target section not found.");
//     }
//   });
// });

// Scrolling View - By Id

document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation links
  const navLinks = document.querySelectorAll('a:link');

  // Iterate over each navigation link
  navLinks.forEach(function (navLink) {
    // Add click event listener to each navigation link
    navLink.addEventListener('click', function (event) {
      // Prevent the default behavior of the anchor tag
      event.preventDefault();

      // Get the target section's ID from the href attribute
      const targetId = this.getAttribute('href').substring(1); // Removing the '#' character

      // console.log("The targetId is ==>" + targetId + "<===");


      if (targetId === "" || targetId === "#") {
        // Scroll to the top of the page
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // Optional: smooth scrolling animation
        });
      } else {
        // Scroll to the section with the specified ID
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth' // Optional: smooth scrolling animation
          });
        } else {
          console.log("Target section not found!");
        }
      }

      // Close mobile navigation
      if (navLink.classList.contains('main-nav-link')) {
        header.classList.toggle("nav-open");
      }

    });
  });
});



// Add sticky class

const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(function (entries) {
  const ent = entries[0];
  // console.log(ent);
  if (ent.isIntersecting === false) {
    // document.querySelector('.header').classList.add("sticky");
    document.body.classList.add("sticky");

  } else {
    // document.querySelector('.header').classList.remove("sticky");
    document.body.classList.remove("sticky");
  }
}, {
  // In the viewPort
  root: null,
  // Get the signal as soon as the hero section is out of the view port.
  threshold: 0,
  rootMargin: '-80px'
});
obs.observe(sectionHero);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
