const icecream = {
    Arun: {
        flavor: "chocolate",
        price: 200,
        quantity: 50
    },
    amul: {
        flavor: "vanilla",
        price: 180,
        quantity: 40
    },
    Diaryday: {
        flavor: "strawberry",
        price: 220,
        quantity: 30
    }
};
icecream.amul= {flavor: "mango",price: 250,quantity: 45};
console.log(icecream);
let totalquantity=icecream.Arun.quantity+icecream.amul.quantity+icecream.Diaryday.quantity;
console.log(totalquantity);
let totalprice=icecream.Arun.price+icecream.amul.price+icecream.Diaryday.price;
console.log(totalprice);

