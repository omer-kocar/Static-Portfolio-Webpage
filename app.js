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




