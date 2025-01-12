// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// Navigation Bar
navigationBarContainer = document.querySelector("#navigationBarContainer");

function navigationBarContainerF(navigationBarContainer) {
  if (navigationBarContainer != null) {
    // Define navigation bar content:
    navigationBarContainer.innerHTML += `
    <div class="nav-scroller py-1 mb-4 border-bottom">
      <nav class="nav nav-underline justify-content-around">
        <a class="nav-item nav-link link-body-emphasis active" href="#">World</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Country</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Technology</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Design</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Culture</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Business</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Politics</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Science</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Health</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Style</a>
        <a class="nav-item nav-link link-body-emphasis" href="#">Travel</a>
      </nav>
    </div>
  </div>
      `
  }
}
navigationBarContainerF(navigationBarContainer);

// Scroll to Top Button
class ToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="#" aria-label="Scroll to top" title="Scroll to top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    `
  }
}
customElements.define("to-top", ToTop);

const toTop = document.querySelector("body").appendChild(document.createElement("to-top"));
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})

// Check Circle
class CheckCircle extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <img alt="Check circle" title="Included" id="check-circle" name="check-circle" src="assets/check-circle.svg" />
    `
  }
}
customElements.define("check-circle", CheckCircle);

// Footer
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define footer content:
    footerContainer.innerHTML += `
    <div class="container pt-1 mt-1">
      <footer class="pt-1 mt-5 mb-3">
        <ul class="nav justify-content-center pb-3 mb-3">
        </ul>
        <p class="text-center pt-3 border-top text-body-secondary">Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${year}</p>
      </footer>
    </div>
      `
  }
}
footerContainerF(footerContainer);

console.log("elements.js is completed");
