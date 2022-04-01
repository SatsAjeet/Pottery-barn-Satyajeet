const data = [
    {
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202207/0005/abbott-indoor-outdoor-concrete-fsc-acacia-rectangular-coff-o.jpg",
        title: "Abbott Indoor/Outdoor Concrete & FSC® Acacia Rectangular Coffee Table",
        price: 1799,
        overview: {
            description: "An unlimited number of eligible items can be delivered directly into your home for one low, flat fee. We will:",
            point1: "Deliver every eligible piece to the room of your choice - regardless of number of items.",
            point2: "Unpack and assemble each piece.",
            point3: "Remove and recycle the packaging."
        }
    },
    {
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202209/1135/sloan-concrete-round-nesting-coffee-tables-o.jpg",
        title: "Sloan Concrete Round Nesting Coffee Tables",
        price: 2999,
        overview: {
            description: "Whether enjoying a drink or catching up on emails in the fresh air, these nesting coffee tables from our Sloan Collection provide a convenient surface right where it's needed. The clever design expands when extra space is needed, then quickly tucks back together when not in use for an easy, space-saving solution. A bold combination of solid concrete and blackened wrought iron within a minimal silhouette imparts fresh, contemporary style.",
            point1: "Top is hand crafted of glass fiber reinforced concrete; produced to combine the characteristics of strength, toughness and water resistance; wrought iron base.",
            point2: "Top is finished with a water based sealant; base features a matte black powder coat finish.",
            point3: "Adjustable levelers provide stability on uneven surfaces."
        }
    },
    {
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202209/1219/abbott-indoor-outdoor-concrete-fsc-acacia-side-table-o.jpg",
        title: "Abbott Indoor/Outdoor Concrete & FSC® Acacia Side Table",
        price: 1399,
        overview: {
            description: "Rugged concrete on a generous hardwood base brings casual, enduring style to outdoor entertaining. The durable hand-finished materials ensure the lasting beauty of our Abbot Side Table.",
            point1: "Adjustable levelers help with stability on uneven surfaces.",
            point2: "Touch-up kit available to conceal minor scratches, worn edges and other imperfections (sold separately).",
            point3: "Our concrete furniture features natural variations that change over time. Get care tips and see how our concrete naturally weathers "
        }
    },
    {
        image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202209/1220/frog-drum-indoor-outdoor-metal-side-table-o.jpg",
        title: "Frog Drum Indoor/Outdoor Metal Side Table",
        price: 1099,
        overview: {
            description: "Rain drums, named for the pleasing sound they make when hit by raindrops, have existed in Asian cultures for thousands of years. Our cast-aluminum version features a traditional relief pattern of a radiating sun surrounded by concentric rings of geometric patterns. Botanical motifs embellish the sides, and the top is detailed with three frogs.",
            point1: "Made of aluminum with a dark bronze finish.",
            point2: "Features botanical embellishments on the sides.",
            point3: "For indoor or outdoor use."
        }
    },
]

console.log("data",data);

localStorage.setItem("view",JSON.stringify(data));


const data2=[ 
    {
    image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202209/1110/terrazzo-15-round-side-table-o.jpg",
    title: "Terrazzo 15: Round Side Table",
    price: 1329,
    overview: {
        description: "Finding inspiration in mid-century modern style, the outdoor-friendly Terrazzo Round Side Table is both nostalgic and of-the-moment. With a hollow center, creamy white concrete is speckled with glass fragments in warm, earthy hues.",
        point1: "Handcrafted of concrete mixed with tempered glass and glass fiber",
        point2: "Adjustable levelers help with stability on uneven surfaces.",
        point3: "Features an oil based, hand painted finish."
    }
},
{
    image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202148/0645/malibu-metal-rectangular-coffee-table-with-nesting-stools-3-o.jpg",
    title: "Malibu Metal Rectangular Coffee Table with Nesting Stools",
    price: 1379,
    overview: {
        description: "Turn on your out of office, grab an ice-cold drink and take in the summer sun with our Malibu Metal Collection. Clean, unembellished surfaces help the collection fit in anywhere, in fair weather or foul. This coffee table frees up space by sheltering its two companion stools when not in use. Crafted from durable materials that make your easy, breezy summer living even easier and breezier.",
        point1: "Use a proper outdoor cover that allows for adequate ventilation without trapping moisture.",
        point2: "Expertly crafted of aluminum and finished with a Black powder coat.",
        point3: "Cover furniture with outdoor covers (sold separately) when left outside during inclement weather or when not in use."
    }
},
{
    image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202206/0140/avila-stamped-accent-table-1-o.jpg",
    title: "Avila Stamped Accent Table",
    price: 1299,
    overview: {
        description: "Soft edges and an antiqued bronze finished define the ancient look of this cast textured aluminum collection.Finished in a Fair Trade factory, the whole collection looks burnished by time.With their geometric forms and the charm of hand- made imperfections, the variously sized pieces work well together or stand alone.You may want to use them inside, but they're built to stand both the test of time and the elements outside.",
        point1: "We do not recommend using harsh household chemicals as they can damage the finish.",
        point2: "Handcrafted of aluminum in India. This product celebrates and preserves artisan handcraft traditions around the world.",
        point3: "Adjustable levelers provide stability on uneven surfaces."
    }
},
{
    image: "https://assets.pbimgs.com/pbimgs/ab/images/dp/wcm/202212/0074/malibu-18-metal-stackable-side-stool-set-of-2-black-1-o.jpg",
    title: "Malibu 18 Metal Stackable Side Stool, Set of 2, Black",
    price: 1799,
    overview: {
        description: "Turn on your out of office, grab an ice-cold drink and take in the summer sun with our Malibu Metal Collection. Scaled not too big and not too small (but just right), these side stools are designed with rust-proof aluminum and finished with a weather-resistant powder coating that’s made for easy, breezy summer living. The stackable design is always a plus, whether you need a space-saving solution or just want to store during the off-season.",
        point1: "Welded of 100% rust-proof aluminum frame.",
        point2: "Frame features powder coated finish in Black.",
        point3: "Imported."
    }
},
]

console.log("data2",data2);

localStorage.setItem("collection",JSON.stringify(data2));