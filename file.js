let arr= JSON.parse(localStorage.getItem("data"))
 || [];
 console.log(arr);
let obj={
    image: "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202212/0020/velvet-handcrafted-box-stitch-quilt-shams-c.jpg",
    title: "Mesa Striped Handcrafted Cotton Quilt & Shams",
    price: 499,
    overview: {
        description: "Crafted of pure cotton that’s spun for softness and extra gentle against the skin, our Mesa Striped bedding gets its modern edge from its bold, graphic stripes and oversized tassels.",
        point1: "Hand quilted of 100% yarn-dyed cotton.",
        point2: "Reverses to plain white.",
        point3: "Quilt, sham and insert are sold separately.",
        point4: "Shams feature envelope closure.",
        point5: "We're a proud member of the Better Cotton Initiative (BCI). The Better Cotton Initiative trains farmers to care for the environment and respect workers’ rights and wellbeing. BCI cotton is not physically traceable to final products.",
        point6: "Machine wash.",
        point7: "250 gsm; 100% cotton fill.",
        point8: "Imported"
    }
}
    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr));