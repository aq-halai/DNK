const product = [
    {
        id: 0,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Nike Shoes',
        price: 120,
    },
    {
        id: 1,
        image: 'hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 2,
        image: 'ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 3,
        image: 'aa-1.jpg',
        title: 'Head Phones',
        price: 100,
    },
    {
        id: 4,
        image: 'bb-2.jpg',
        title: 'Apple Macbook',
        price: 900,
    },
    {
        id: 5,
        image: 'aa-2.jpg',
        title: 'Smart Watch',
        price: 250,
    },
    {
        id: 6,
        image: 'aa-3.jpg',
        title: 'Sunglasses',
        price: 23,
    },
    {
        id: 7,
        image: 'aa-4.jpg',
        title: 'Perfume',
        price: 340,
    },
    {
        id: 8,
        image: 'aa-9.jpg',
        title: 'Whey Protein',
        price: 450,
    },
    {
        id: 9,
        image: 'aa-6.jpg',
        title: 'Iphone 13 Pro Max',
        price: 990,
    },
    {
        id: 10,
        image: 'aa-7.jpg',
        title: 'Diamond Ring',
        price: 9999,
    },
    {
        id: 11,
        image: 'aa-8.jpg',
        title: 'School Bag',
        price: 50,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}