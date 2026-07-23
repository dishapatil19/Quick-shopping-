const id = localStorage.getItem("id");

async function getproducts() {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();

        let details = document.getElementById("product");
        let reviews = document.getElementById("reviews");

        details.innerHTML = `
        <div class="box">
            <div class="leftbox">
                <img src="${product.thumbnail}" alt="${product.title}">
            </div>

            <div class="rightbox">
                <h1>${product.title}</h1>

                <p><span class="producttitle">Brand:</span> ${product.brand}</p>

                <p><span class="producttitle">Category:</span> ${product.category}</p>

                <p><span class="producttitle">Price:</span> ₹${(product.price * 96.54).toFixed(0)}</p>

                <p><span class="producttitle">Rating:</span>
                    ${"⭐".repeat(Math.round(product.rating))}
                </p>

                <p><span class="producttitle">Description:</span> ${product.description}</p>

                <button>Add To Cart</button>
                <button>Add To Wishlist ❤️</button>
            </div>
        </div>
        `;

        // Reviews
        reviews.innerHTML = "";

        if (product.reviews) {
            product.reviews.forEach((ele) => {
                reviews.innerHTML += `
                <div class="review_card">
                    <div class="reviewHead">
                        <h3>${ele.reviewerName}</h3>
                        <p>${"⭐".repeat(ele.rating)}</p>
                    </div>
                    <p>${ele.comment}</p>
                </div>
                `;
            });
        }

        reviews.innerHTML += `
            <input id="newreview" type="text" placeholder="Write your review">
            <button>Submit Feedback</button>
        `;

    } catch (error) {
        console.log("Error:", error);
    }
}


getproducts();