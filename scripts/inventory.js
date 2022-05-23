var products=JSON.parse(localStorage.getItem("products"));
var all_products=document.getElementById("all_products");
// ********function for mdisplaying product data
products.forEach(function(elem,index){
  var div=document.createElement("div")
  var image=document.createElement("img")
  image.src=elem.image
  var h2=document.createElement("h2")
  h2.innerText=elem.type
  var desc=document.createElement("p")
  desc.innerText=elem.desc
  var price= document.createElement("p")
  price.innerText=elem.price
  var remove=document.createElement("button")
  remove.setAttribute("id","remove_product")
  remove.innerText="Remove"
//   -------for delete individual product
  remove.addEventListener("click",function(){
      removeFun(index)

  })
//   ---------appendig here for displaying
  div.append(image,h2,desc,price,remove)
  all_products.append(div)

   

})


// **********remove product function--------
function removeFun(i){
    products=products.filter(function(elem,index){
        return i!=index

    })
    localStorage.setItem("products",JSON.stringify(products))
    window.location.reload();

}