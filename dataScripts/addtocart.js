


let arrboth= JSON.parse(localStorage.getItem("cart1"));

console.log(arrboth);

arrboth.map(function(ele){
    document.querySelector("#center").innerHTML="";
    document.querySelector("#right").innerHTML=null;
    let div=document.createElement("div");
    

    let img=document.createElement("img");
    img.src=ele.image;
     


    let name=document.createElement("p");
    name.innerText=ele.title;

    let price=document.createElement("p");
    price.innerText=ele.price;

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
btn2.innerText="ADD TO REGISTRY";

    document.querySelector("#center").append(img);
    document.querySelector("#right").append(name,price,btn,btn1,btn2)
})
let cart= JSON.parse(localStorage.getItem("cart_data")) || [];
function cartItem(ele){
    console.log(ele);

    cart.push(ele);
    localStorage.setItem("cart_data",JSON.stringify(cart));
    window.location.href="cart.html";
}