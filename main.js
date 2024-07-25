const nav = document.querySelector(".header"),
    searhIcon = document.querySelector("#searchIcon"),
    searhClose = document.querySelector("#searchClose");

searchIcon.addEventListener("click", event =>{
    nav.classList.toggle("openSearch"),
    nav.classList.toggle("close-searh-icon");
    nav.classList.toggle("close-close-icon");
});
searchClose.addEventListener("click", event =>{
    nav.classList.toggle("openSearch"),
    nav.classList.toggle("close-searh-icon");
    nav.classList.toggle("close-close-icon");
    document.getElementById('searhBox').value = '';
});

function scrollToButtom(){
    window.scrollTo(0 , 3004);
}

function openAboutPanel(){
    nav.classList.add("openAbout");
    nav.classList.remove("close-about-icon");
}
function closeAboutPanel(){
    nav.classList.remove("openAbout");
    nav.classList.add("close-about-icon");
}
function openCatalogPanel(){
    nav.classList.add("openCatalog");
    nav.classList.remove("close-catalog-icon");
}
function closeCatalogPanel(){
    nav.classList.remove("openCatalog");
    nav.classList.add("close-catalog-icon");
}

function sedanCatalog(){
    nav.classList.add("open_sedan");
    nav.classList.remove("open_cupe");
    nav.classList.remove("open_vn");
}
function cupeCatalog(){
    nav.classList.add("open_cupe");Ы
    nav.classList.remove("open_vn");
    nav.classList.remove("open_sedan");
}
function vnCatalog(){
    nav.classList.add("open_vn");
    nav.classList.remove("open_sedan");
    nav.classList.remove("open_cupe");
}

function openCall(){
    nav.classList.add("openCall");
}
function closeCall(){
    nav.classList.remove("openCall");
    document.getElementById('phoneBox').value = '';
    document.getElementById('nameBox').value = '';
}
const element = document.getElementById('phoneBox');
const maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: true,
};
const mask = IMask(element, maskOptions);

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider()
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(rightSlide, 10000);
    }

}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function leftSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function rightSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
        console.log(scrollPosition);
        if (scrollPosition >= 750)
    {
        nav.classList.add("show_head");
    }
    else {
        nav.classList.remove("show_head");
    }
    
    if (scrollPosition >= 130)
    {
        nav.classList.add("show_head");
    }
    else {
        nav.classList.remove("show_head");
    }
  });

let products = {
    data:[
        {
            productName: "S-КЛАСС S 580 4MATIC L PREMIUM",
            model: "S-класс",
            price: "28 490 000",
            image: "css/img/cars/Component 9.png",
            color_car: "Черный",
            state: "new"
        },
        {
            productName: "Mercedes-Benz E-Класс E220d 4MATIC",
            model: "E-класс",
            price: "14 892 769",
            image: "css/img/cars/Component 10.png",
            color_car: "Синий",
            state: "new"
        },
        {
            productName: "Mercedes-Benz GLE купе 450d 4matic",
            model: "G-класс",
            price: "18 400 000",
            image: "css/img/cars/Component 11.png",
            color_car: "Черный",
            state: "new"
        },
        {
            productName: "GLB 22D 4MATIC",
            model: "G-класс",
            price: "7 419 790",
            image: "css/img/cars/Component 12.png",
            color_car: "Черный",
            state: "new"
        },
        {
            productName: "Mercedes-AMG G-КЛАСС G 63 SQUARED",
            model: "G-класс",
            price: "48 386 000",
            image: "css/img/cars/Component 13.png",
            color_car: "Черный",
            state: "new"
        },
        {
            productName: "Mercedes-AMG G-КЛАСС G 63",
            model: "G-класс",
            price: "48 386 000",
            image: "css/img/cars/Component 14.png",
            color_car: "Серый",
            state: "new"
        },
    ],
};

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.model, i.color_car, "hide");
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase(); 
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerText = i.price + " ₽";
    container.appendChild(price);
    card.appendChild(container);

    let color = document.createElement("h7");
    color.innerText = i.color_car;
    document.getElementById("products").appendChild(card);
}
let wichActive;
function filterProduct(value) {
    wichActive = value;
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
       if(value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
       } else {
        button.classList.remove("active");
       }
    });
    
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(value == "Все модели") {
            element.classList.remove("hide");
        } else {
            if(element.classList.contains(value)) {
                element.classList.remove("hide");
            } else {
                element.classList.add("hide");
            }
        }
    });
}

let buttongray = document.getElementById("fluency2");
let buttonblue = document.getElementById("fluency1");
let buttonblack = document.getElementById("fluency");

function addfilterProductGray(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
    } else {
        buttonblue.classList.remove("active");
        buttonblack.classList.remove("active");
    }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(wichActive == "Все модели" && element.classList.contains(value) ) {
            element.classList.remove("hide");
        }else {
            if (element.classList.contains(value) && element.classList.contains(wichActive))
        {
            element.classList.remove("hide");
        }else {
            element.classList.add("hide");
        }
        }
    });
}

function addfilterProductBlack(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
    } else {
        buttonblue.classList.remove("active");
        buttongray.classList.remove("active");
    }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(wichActive == "Все модели" && element.classList.contains(value) ) {
            element.classList.remove("hide");
        }else {
            if (element.classList.contains(value) && element.classList.contains(wichActive))
        {
            element.classList.remove("hide");
        }else {
            element.classList.add("hide");
        }
        }
    });
}

function addfilterProductBlue(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
    } else {
        buttongray.classList.remove("active");
        buttonblack.classList.remove("active");
    }
    });
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if(wichActive == "Все модели" && element.classList.contains(value) ) {
            element.classList.remove("hide");
        }else {
            if (element.classList.contains(value) && element.classList.contains(wichActive))
        {
            element.classList.remove("hide");
        }else {
            element.classList.add("hide");
        }
        }
    });
}

document.getElementById("search_btn").addEventListener("click", () => {
    let searchInput = document.getElementById("searhBox").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInput.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
});
function changePage(){
    let searchInpuut = document.getElementById("searhBox").value;
    localStorage.setItem("searchInpuut", searchInpuut);
    window.location = 'catalog.html';
}
function cho(){
    let searchInpuut = localStorage.getItem("searchInpuut");
    console.log(searchInpuut);  
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
        if(element.innerText.includes(searchInpuut.toUpperCase())) {
            cards[index].classList.remove("hide");
        } else {
            cards[index].classList.add("hide");
        }
    });
};
function allInCatalog(){
    let wichCatalog = "Все модели";
    localStorage.setItem("wichCatalog", wichCatalog);
    window.location = 'catalog.html';
}
function SInCatalog(){
    let wichCatalog = "S-класс";
    localStorage.setItem("wichCatalog", wichCatalog);
    window.location = 'catalog.html';
}
function EInCatalog(){
    let wichCatalog = "E-класс";
    localStorage.setItem("wichCatalog", wichCatalog);
    window.location = 'catalog.html';
}
function GInCatalog(){
    let wichCatalog = "G-класс";
    localStorage.setItem("wichCatalog", wichCatalog);
    window.location = 'catalog.html';
}
function GLEInCatalog(){
    let searchInpuut = "GLE";
    localStorage.setItem("searchInpuut", searchInpuut);
    window.location = 'catalog.html';
}
function GLBInCatalog(){
    let searchInpuut = "GLB";
    localStorage.setItem("searchInpuut", searchInpuut);
    window.location = 'catalog.html';
}
window.onload = () => {
    let loadCatalog = localStorage.getItem("wichCatalog");
    if (loadCatalog == "Все модели")
    {
        filterProduct("Все модели");
        localStorage.clear();
    } 
    if (loadCatalog == "S-класс")
    {
        filterProduct("S-класс");
        localStorage.clear();
    } 
    if (loadCatalog == "E-класс")
    {
        filterProduct("E-класс");
        localStorage.clear();
    } 
    if (loadCatalog == "G-класс")
    {
        filterProduct("G-класс");
        localStorage.clear();
    } 
    if (loadCatalog != "Все модели" && loadCatalog != "S-класс" && loadCatalog != "E-класс" && loadCatalog != "G-класс"){
        filterProduct("Все модели");
        cho();
        localStorage.clear();
    }
}
