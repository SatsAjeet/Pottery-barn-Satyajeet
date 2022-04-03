
// color image code start
let img_class = "img_class"
let container = document.querySelector("#layer4")
let inner_div = document.querySelector("#inner_div")
var img_url1 = "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202211/0501/img6b.jpg"
var img_url2 = "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202211/0501/img3b.jpg"
var img_url3 = "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202211/0501/img1b.jpg"
var img_url4 = "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202211/0503/img2b.jpg"

// mapping of products code start
var count = 0;

let data1 = JSON.parse(localStorage.getItem("productData")) || []
let bed_data = data1[0]

append(bed_data)
function append(bed_data) {
    inner_div.innerHTML = ""
    bed_data.map(function (elem) {
        var product = elem
        var main_div = document.createElement("div")
        main_div.className = "main_divv"


        let img_div = document.createElement("div")
        var image = document.createElement("img")
        image.className = "product_img"
        image.src = elem.image
        img_div.append(image)

        count++

        // color image div start code
        var color_img_div = document.createElement("div")
        color_img_div.className = "color_img_div"

        var img_div1 = document.createElement("div")
        var color_image1 = document.createElement("img")
        color_image1.className = img_class
        color_image1.src = img_url1;
        img_div1.append(color_image1)

        var img_div2 = document.createElement("div")
        var color_image2 = document.createElement("img")
        color_image2.className = img_class
        color_image2.src = img_url2;
        img_div2.append(color_image2)

        var img_div3 = document.createElement("div")
        var color_image3 = document.createElement("img")
        color_image3.className = img_class
        color_image3.src = img_url3;
        img_div3.append(color_image3)

        var img_div4 = document.createElement("div")
        var color_image4 = document.createElement("img")
        color_image4.className = img_class
        color_image4.src = img_url4;
        img_div4.append(color_image4)

        color_img_div.append(color_image1, color_image2, color_image3, color_image4)
        // color image div code end

        var name = document.createElement("p")
        name.innerText = elem.title

        var price = document.createElement("p")
        price.innerText = `$${elem.price}`

        var desc = document.createElement("p")
        desc.className = "desc"
        desc.innerText = "BESTSELLER"


        main_div.append(img_div, color_img_div, name, price, desc)
        main_div.addEventListener("click", function (elem) {

            localStorage.setItem("product", JSON.stringify(product))
            window.location.href = "/prodetail.html"
        })
        inner_div.append(main_div)
        container.append(inner_div)

    })
}

let total_items = document.querySelector("#items")
total_items.innerText = `${count} Items`

function sorted() {

    let value = document.querySelector("#select").value
    console.log("value :", value)
    if (value == "h2l") {
        bed_data.sort(function (a, b) {
            return b.price - a.price;
        })
        append(bed_data)
    }
    if (value == "l2h") {
        bed_data.sort(function (a, b) {
            return a.price - b.price;
        })
        append(bed_data)
    }

}