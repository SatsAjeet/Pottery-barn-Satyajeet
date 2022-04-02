
let ele= JSON.parse(localStorage.getItem("product"));

console.log(ele);
    document.querySelector("#center").innerHTML="";
    document.querySelector("#right").innerHTML=null;
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src = ele.image;
    img.setAttribute("id","MainImage")
    let name1=document.createElement("h2");
name1.innerText = ele.title;
let para = document.createElement("p")
para.innerText = ele.overview.description
    let price=document.createElement("p");
    price.innerText=`$ ${ele.price}`;
    
    let btn=document.createElement("button");
    btn.setAttribute("id",'btn1')
    btn.innerText="ADD TO CART";
btn.addEventListener("click",function(){
    cartItem(ele);
})
   let btn1=document.createElement("button");
    btn1.setAttribute('class','btn2');
    btn1.innerText="MAKE A FREE DESIGN APPOINTMENT";

let btn2=document.createElement("button");
btn2.setAttribute('class','btn2');
btn2.innerText = "ADD TO REGISTRY";

let datadiv = document.createElement("div");
datadiv.setAttribute("id","datadiv")
let overview = document.createElement("p");
let overviewLable = document.createElement("h3")
overviewLable.innerText = "OverView : "
overview.innerText = ele.overview.description
let point1 = document.createElement("p")
let point2 = document.createElement("p")
let point3 = document.createElement("p")
point1.innerText = `* ${ele.overview.point1}`
point2.innerText = `* ${ele.overview.point2}`
point3.innerText = `* ${ele.overview.point3}`
let leftimage = document.createElement("img")
leftimage.src = ele.image

datadiv.append(overviewLable,overview,point1,point2,point3);
    document.querySelector("#center").append(img);
document.querySelector("#right").append(name1, price, btn, btn1, btn2,datadiv)
    document.querySelector("#para").append(para)
document.querySelector("#left").append(leftimage)
function cartItem(ele) {
    var flag=false
    let cart = JSON.parse(localStorage.getItem("cart_data")) || [];
    console.log(ele);
    for (var i = 0; i < cart.length; i++) {
        if (ele.title == cart[i].title) {
            cart[i].qty++
            localStorage.setItem("cart_data", JSON.stringify(cart));
            window.location.href = "./Pages/cart.html";
            flag = true
        }
    }
    if (flag == false) {
        cart.push(ele)
        localStorage.setItem("cart_data", JSON.stringify(cart));
        window.location.href = "./Pages/cart.html";
    }

}