// The Library of Custom Reusable Web Elements
// This file is the library containing my collection of custom, reusable web elements
// that can be used across different parts of the project. These elements go beyond what browsers provide,
// allowing for expanded capabilities and functionality in the project.

// The Navigation Bar
navigationBarContainer = document.querySelector("#navigationBarContainer");

function navigationBarContainerF(navigationBarContainer) {
  if (navigationBarContainer != null) {
    // Define the navigation bar content:
    navigationBarContainer.innerHTML += `
    <div class="nav-scroller py-1 mb-4 border-bottom">
      <nav class="nav nav-underline justify-content-around">
        <a class="nav-item nav-link active" href="#">World</a>
        <a class="nav-item nav-link" href="#">Country</a>
        <a class="nav-item nav-link" href="#">Technology</a>
        <a class="nav-item nav-link" href="#">Design</a>
        <a class="nav-item nav-link" href="#">Culture</a>
        <a class="nav-item nav-link" href="#">Business</a>
        <a class="nav-item nav-link" href="#">Politics</a>
        <a class="nav-item nav-link" href="#">Science</a>
        <a class="nav-item nav-link" href="#">Health</a>
        <a class="nav-item nav-link" href="#">Style</a>
        <a class="nav-item nav-link" href="#">Travel</a>
      </nav>
    </div>
  </div>
      `;
  }
}
navigationBarContainerF(navigationBarContainer);

// The Scroll to Top Button
class ToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML += `
    <a href="#" id="to-top" aria-label="Scroll to top" title="Scroll to top">
      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>
    `;
  }
}
customElements.define("to-top", ToTop);

const toTop = document
  .querySelector("body")
  .appendChild(document.createElement("to-top"));
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

// The Footer
footerContainer = document.querySelector("#footerContainer");
const year = new Date().getFullYear();
const month = new Date().getMonth();
const day = new Date().getUTCDate();
for (let x of document.querySelectorAll("year")) {
  x.textContent = year;
}
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
for (let x of document.querySelectorAll("month")) {
  x.textContent = monthNames[month];
}
for (let x of document.querySelectorAll("day")) {
  x.textContent = day;
}

function footerContainerF(footerContainer) {
  if (footerContainer != null) {
    // Define the footer content:
    footerContainer.innerHTML += `
    <div class="container pt-1 mt-1">
      <footer class="pt-1 mt-5 mb-3">
        <ul class="nav justify-content-center pb-3 mb-3">
        </ul>
        <p class="text-center pt-3 border-top text-body-secondary">Copyright © <a href="https://primesolar.github.io/web-developer/">Vladislav Kazantsev</a> ${new Date().getFullYear()}</p>
      </footer>
    </div>
      `;
  }
}
footerContainerF(footerContainer);

console.log("elements.js is completed");
