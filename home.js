let allProducts =[]

async function fetchProduct(){
    let response = await fetch("https://dummyjson.com/products");
    let data = await response.json();
    allProducts=data.products;
   
   
    // displayProducts(allProducts);
    displayProductS(allProducts)
}
function displayProductS(product) {
    const container=document.getElementById("root");
    container.innerHTML="";
    console.log(product[0]);

    product.forEach((ele) => {

    container.innerHTML+= `

    <div class="cart">

    <div class  ="img_container">
    <img src ="${ele.thumbnail}"/>

    </div>
    <div class="main_container">

    <h2>${ele.title.slice(0,20).concat("...")}</h2>
    <p> <span>Brand</p>
    <p> category:${ele.category}</p>
    <p>price: ${(ele.price * 96.54).toFixed()} INR </p>
    <p>rating: ${"⭐" .repeat(ele.rating)} </p>

    <div class="viewcontainer">
    <a href="./viewmore.html" onclick="getproduct(${ele.id})"> view more..</a></div>


    </div>
    </div>
     `;   
    }); 
    };
fetchProduct();

// let pop=document.getElementById("popup");
// let btn=document.getElementById("btn");
// btn.addEventListener("click",()=> {
//     pop.remove();
// });

function getproduct(id){
localStorage.setItem("id",id)


}




let sea = document.querySelector('[name="searchproduct"]');

sea.addEventListener("input",(eve) => {
    let value=eve.target.value.tolowercase()

    let filterproduct=allProducts.filter((pro) => 
         pro.title.tolowercase().includes(value),
    );
    displayProductS(filterproduct);
});

// console.log(sea);



let popup = document.getElementById("popup");
let closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});






// Hide popup initially
popup.style.display = "none";

// Show popup after 2 seconds
setTimeout(function () {
    popup.style.display = "flex";
}, 1000);

// Close popup
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});


let inp= document.querySelector('[name="UserInput"]');
let h=document.querylistener("#Head");
console.dir(inp);
h.textcontent=eve.target.value

inp.addEventListener("input", (eve)=> {
    console.log(eve.target.value);
    console.log(inp.value);
});


