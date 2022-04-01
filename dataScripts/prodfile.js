let collec=JSON.parse(localStorage.getItem("collection"));
//console.log(collec);

collec.map(function(ele){
    let div=document.createElement("div");
    div.addEventListener("click",function(){
        productcoll(ele);
    })

    let img=document.createElement("img");
    img.src=ele.image;

    let name=document.createElement("p");
    name.innerText=ele.title;

    let price=document.createElement("p");
    price.innerText=ele.price;

    div.append(img,name,price);

    document.querySelector("#coll").append(div);
})
let arr= JSON.parse(localStorage.getItem("cart1")) || [];


function productcoll(ele){
    console.log(ele);
    arr.push(ele);

localStorage.setItem("cart1",JSON.stringify(arr));

    window.location.href="prodetail.html";
}




/// viwed 
let view=JSON.parse(localStorage.getItem('view'));
//console.log(view);

view.map(function(ele){
    let div=document.createElement("div");

    div.addEventListener("click",function(){
        productview(ele);
    })

    let img=document.createElement("img");
    img.src=ele.image;

    let name=document.createElement("p");
    name.innerText=ele.title;

    let price=document.createElement("p");
    price.innerText=ele.price;

    div.append(img,name,price);

    document.querySelector("#view").append(div);
})

let arr1= JSON.parse(localStorage.getItem("cart1"));



function productview(ele) {
console.log(ele);

arr1.push(ele);
localStorage.setItem("cart1",JSON.stringify(arr1));

window.location.href="prodetail.html";
}















