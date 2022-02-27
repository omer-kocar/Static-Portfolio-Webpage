// FOR WORKS PAGE

const navToggle = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

navToggle.addEventListener("click",function(){
    // console.log(links.classList)
    // console.log(links.classList.contains("links"))   //true
    // console.log(links.classList.contains("random"))  //false
    if(links.classList.contains("show-links")){
        links.classList.remove("show-links")
    }
    else {
        links.classList.add("show-links")
    }

    // Another way to do that below
    // links.classList.toggle("show-links")

})


const plusIcon = document.querySelector(".plus-icon");
const questionsBtn = document.querySelector(".question-btn")
const body = document.querySelector("body")

let i=0;
let images = [];
let sliderTime = 2000;

images[0]= '/pictures/flag.png'
images[1]= '/pictures/lazienki.jpg'
images[2]= '/pictures/warsaw1.jpg'

let pic = ['/pictures/flag.png','/pictures/lazienki.jpg','/pictures/warsaw1.jpg']





questionsBtn.addEventListener("click", function(){
    let interval = setInterval(function changePicture(){
        if(i<images.length) {
        i++
        document.body.style.backgroundImage = images[i];
        } if (pic.length === 0 ) {
            clearInterval(interval)
        }
        
    },sliderTime) 
})




