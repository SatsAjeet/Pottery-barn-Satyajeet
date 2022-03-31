


let arrview= JSON.parse(localStorage.getItem("cart1"));

console.log(arrview);

arrview.map(function(ele){
    document.querySelector("#center").innerHTML="";
    let div=document.createElement("div");
    

    let img=document.createElement("img");
    img.src=ele.image;
     


    let name=document.createElement("p");
    name.innerText=ele.title;

    let price=document.createElement("p");
    price.innerText=ele.price;

    
    div.append(img,name,price);

    document.querySelector("#center").append(div);
})

