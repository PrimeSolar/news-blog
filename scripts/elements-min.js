function navigationBarContainerF(n){null!=n&&(n.innerHTML+='\n    <div class="nav-scroller py-1 mb-3 border-bottom">\n      <nav class="nav nav-underline justify-content-between">\n        <a class="nav-item nav-link link-body-emphasis active" href="#">World</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Country</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Technology</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Design</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Culture</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Business</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Politics</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Opinion</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Science</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Health</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Style</a>\n        <a class="nav-item nav-link link-body-emphasis" href="#">Travel</a>\n      </nav>\n    </div>\n  </div>\n      ')}navigationBarContainer=document.querySelector("#navigationBarContainer"),navigationBarContainerF(navigationBarContainer);class ToTop extends HTMLElement{connectedCallback(){this.innerHTML+='\n    <a href="#" aria-label="Scroll to top" title="Scroll to top">\n      <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M6 15L12 9L18 15" stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>\n      </svg>\n    </a>\n    '}}customElements.define("to-top",ToTop);const toTop=document.querySelector("body").appendChild(document.createElement("to-top"));window.addEventListener("scroll",(()=>{window.pageYOffset>100?toTop.classList.add("active"):toTop.classList.remove("active")}));class CheckCircle extends HTMLElement{connectedCallback(){this.innerHTML+='\n    <img alt="Check circle" title="Included" id="check-circle" name="check-circle" src="assets/check-circle.svg" />\n    '}}function footerContainerF(n){null!=n&&(n.innerHTML+='\n    <div class="container pt-1 mt-1">\n      <footer class="pt-1 mt-5 mb-3">\n        <ul class="nav justify-content-center pb-3 mb-3">\n        </ul>\n        <p class="text-center pt-3 border-top text-body-secondary">Copyright © <a href="https://firstsolar.github.io/web-developer/">Vladislav Kazantsev</a> 2024</p>\n      </footer>\n    </div>\n      ')}customElements.define("check-circle",CheckCircle),footerContainer=document.querySelector("#footerContainer"),footerContainerF(footerContainer);
