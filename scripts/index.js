//store the products array in localstorage as "products"
var form=document.getElementById("products")
var btn=document.getElementById("add_product")
btn.addEventListener("click",myFun)
function myFun(){
    event.preventDefault()

   // console.log("checked");

    var type=document.getElementById("type").value
    var desc=document.getElementById("desc").value
    var price=document.getElementById("price").value
    var image=document.getElementById("image").value
    // ..........constructor fun for object
    if(type==""|| desc=="" || price=="" || image==""){
        alert("Please enter all the values")
    }
    else{
        var products_arr= JSON.parse(localStorage.getItem("products")) || []
        var product_obj = new Productsfun(type,desc,price,image)
        products_arr.push(product_obj)
        localStorage.setItem("products",JSON.stringify(products_arr))
     
        //console.log(products_arr)
        window.location.reload();
    }


  
}
// construcor nfun*******
function Productsfun(type,desc,price,image){
   this.type = type;
   this.desc =desc;
   this.price=price;
   this.image=image;
}
var show=document.getElementById("show_products");
show.addEventListener("click",showFun)
function showFun(){
    window.location.href="inventory.html"
}