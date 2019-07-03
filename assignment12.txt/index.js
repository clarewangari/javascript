var products = document.getElementsByClassName("PRODUCTS");
  var i;

  for (i = 0; i < products.length; i++) {
  products[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var products = this.nextElementSibling;
    if (product.style.display === "block") {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
});
}

function myFunction() {
  var fruits = document.getElementById("fruList");
  if (fruits.style.display === "none") {
    fruits.style.display = "block";
  } else {
    fruits.style.display = "none";
  }
}
