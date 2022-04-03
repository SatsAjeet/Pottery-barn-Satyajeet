showproductdetails()
function showproductdetails() {
    let ele = JSON.parse(localStorage.getItem("product"));

    console.log(ele);
    document.querySelector("#center").innerHTML = "";
    document.querySelector("#right").innerHTML = null;
    let img = document.createElement("img");
    img.src = ele.image;
    img.setAttribute("id", "MainImage")
    let name1 = document.createElement("h2");
    name1.innerText = ele.title;
    let para = document.createElement("p")
    para.innerText = ele.overview.description
    let price = document.createElement("p");
    price.innerText = `$ ${ele.price*ele.qty}`;
    


    let quantitydiv = document.createElement("div")
    quantitydiv.setAttribute("id", "quantitydiv")
    let addbutton = document.createElement("button")
    addbutton.innerText = "+"
    addbutton.addEventListener("click", () => {
        ele.qty++
        localStorage.setItem("product", JSON.stringify(ele))
        showproductdetails()
    })
    let showdiv = document.createElement("div")
    showdiv.innerHTML = ele.qty
    let subtractbutton = document.createElement("button")
    subtractbutton.innerText = "-"
    subtractbutton.addEventListener("click", () => {
        ele.qty--
        if (ele.qty == 0)
        {
            localStorage.removeItem("product")
            alert("Please select some Item to continue")
            window.location.href = "/index.html"
        }
        else {
            localStorage.setItem("product", JSON.stringify(ele))
            showproductdetails()
        }
        
    })
    quantitydiv.append(addbutton, showdiv, subtractbutton)
    


    let btn = document.createElement("button");
    btn.setAttribute("id", 'btn1')
    btn.innerText = "ADD TO CART";
    btn.addEventListener("click", function () {
        cartItem(ele);
    })
    let btn1 = document.createElement("button");
    btn1.setAttribute('class', 'btn2');
    btn1.innerText = "MAKE A FREE DESIGN APPOINTMENT";

    let btn2 = document.createElement("button");
    btn2.setAttribute('class', 'btn2');
    btn2.innerText = "ADD TO REGISTRY";

    let datadiv = document.createElement("div");
    datadiv.setAttribute("id", "datadiv")
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

    datadiv.append(overviewLable, overview, point1, point2, point3);
    document.querySelector("#center").append(img);
    document.querySelector("#right").append(name1, price, quantitydiv, btn, btn1, btn2, datadiv)
    let paraappenddiv = document.querySelector("#para")
    paraappenddiv.innerHTML= null
    paraappenddiv.append(para)
    let leftdiv = document.querySelector("#left")
    leftdiv.innerHTML= null
    leftdiv.append(leftimage)
    function cartItem(ele) {
        var flag = false
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
}