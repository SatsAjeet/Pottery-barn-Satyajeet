let collec=JSON.parse(localStorage.getItem("collection"));
//console.log(collec);

collec.map(function(ele){
    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.image;

    let name=document.createElement("p");
    name.innerText=ele.title;

    let price=document.createElement("p");
    price.innerText=ele.price;

    div.append(img,name,price);

    document.querySelector("#coll").append(div);
})






/// viwed 
let view=JSON.parse(localStorage.getItem('view'));
//console.log(view);

view.map(function(ele){
    let div=document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.image;

    let name=document.createElement("p");
    name.innerText=ele.title;

    let price=document.createElement("p");
    price.innerText=ele.price;

    div.append(img,name,price);

    document.querySelector("#view").append(div);
})


