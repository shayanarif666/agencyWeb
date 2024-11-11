import pages from "./pagination.js";

// Variables
const blogsContainer = document.querySelector("#blogs .container");

const handleBlogs = () => {
    blogsContainer.innerHTML += `
       <div class="row g-5">
           <div class="col-lg-8 order-lg-1 order-2">
               
           </div>
       </div>
    `
}

window.addEventListener("load", handleBlogs);