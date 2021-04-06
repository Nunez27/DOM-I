const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let title = document.querySelector('title')
title.textContent = 'Great Idea!'

let navBar = document.querySelectorAll('nav > a')
navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6']
const link = document.createElement('a');
link.textContent = 'Click here'
document.querySelector('nav').appendChild(link)
const link2 = document.createElement('a')
link2.textContent = 'Awesome'
document.querySelector('nav').prepend(link2)

const color = document.querySelectorAll('nav a')

color.forEach(item => item.style.color = 'green')

//Header
const h1 = document.querySelector('h1');
h1.textContent = siteContent.cta['h1'];

//Button
const button = document.querySelector('button');
button.textContent = siteContent.cta['button'];

//Img
const firstImg = document.querySelector('#cta-img');
firstImg.setAttribute('src', siteContent['cta']['img-src']);

const textButton = document.querySelector('.cta-text button');
textButton.textContent = siteContent['cta']['button'];

//Main
const features = document.querySelector('.top-content .text-content:nth-of-type(1) h4')
features.innerText = siteContent['main-content']['features-h4']
const featuresText = document.querySelector('.top-content .text-content:nth-of-type(1) p');
featuresText.textContent = siteContent['main-content']['features-content'];
const about = document.querySelector('.text-content:nth-of-type(2) h4')
about.innerText = siteContent["main-content"]["about-h4"]
const aboutText = document.querySelector('.text-content:nth-of-type(2) p')
aboutText.innerText = siteContent["main-content"]["about-content"]
const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//Bottom
const service = document.querySelector('.bottom-content .text-content h4')
service.innerText = siteContent["main-content"]["services-h4"]
const serviceText = document.querySelector('.bottom-content .text-content p')
serviceText.innerText = siteContent["main-content"]["services-content"]
const product = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4')
product.innerText = siteContent["main-content"]["product-h4"]
const productText = document.querySelector('.bottom-content .text-content:nth-of-type(2) p')
productText.innerText = siteContent["main-content"]["product-content"]
const vision = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4')
vision.innerText = siteContent["main-content"]["vision-h4"]
const visionText = document.querySelector('.bottom-content .text-content:nth-of-type(3) p')
visionText.innerText = siteContent["main-content"]["vision-content"]

//Contact
const contact = document.querySelector('.contact h4')
contact.innerText = siteContent['contact']["contact-h4"]
const contactAddress = document.querySelector('.contact p')
contactAddress.innerText = siteContent['contact']['address']
const contactPhone = document.querySelector('.contact p:nth-of-type(2)')
contactPhone.innerText = siteContent['contact']['phone']
const contactEmail = document.querySelector('.contact p:nth-of-type(3)')
contactEmail.innerText = siteContent['contact']['email']

//Footer
const footer = document.querySelector('footer p')
footer.innerText = siteContent['footer']['copyright']
