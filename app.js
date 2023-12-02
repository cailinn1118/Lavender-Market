let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: '100Plus Original Isotonic Drink 500ml',
        image: '100Plus Original Isotonic Drink 500ml.PNG',
        price: 3.50
    },
    {
        id: 2,
        name: 'A cup of coffee 500ml',
        image: 'A cup of coffee 500ml.PNG',
        price: 8.90
    },
    {
        id: 3,
        name: 'Ayam Brand Sardines in Tomato Sauce 425g',
        image: 'Ayam Brand Sardines in Tomato Sauce 425g.PNG',
        price: 5.60
    },
    {
        id: 4,
        name: 'Bega Cheese Cheddar 500g',
        image: 'Bega Cheese Cheddar 500g.PNG',
        price: 14.50
    },
    {
        id: 5,
        name: 'Brightfields Medium Eggs with Vitamin E 15pcs',
        image: 'Brightfields Medium Eggs with Vitamin E 15pcs.PNG',
        price: 17.80
    },
    {
        id: 6,
        name: 'Brown Sugar Fresh Milk Tea 750ml',
        image: 'Brown Sugar Fresh Milk Tea 750ml.PNG',
        price: 13.90
    }, 
    {
        id: 7,
        name: 'Campbells Cream Of MUshroom Condensed Soup 420g',
        image: 'Campbells Cream Of MUshroom Condensed Soup 420g.PNG',
        price: 5.70
    }, 
    {
        id: 8,
        name: 'Ceylon Cinnamon Stick Large',
        image: 'Ceylon Cinnamon Stick Large.PNG',
        price: 14.80
    }, 
    {
        id: 9,
        name: 'Club House Ground Black pepper 135g',
        image: 'Club House Ground Black pepper 135g.PNG',
        price: 5.90
    }, 
    {
        id: 10,
        name: 'Coke Bottle(L)',
        image: 'Coke Bottle (L).PNG',
        price: 6.50
    }, 
    {
        id: 11,
        name: 'Farm Fresh Cows Milk 1L',
        image: 'Farm Fresh Cows Milk 1L.PNG',
        price: 6.50
    }, 
    {
        id: 12,
        name: 'French Enchire Butter Salted 2packs',
        image: 'French Enchire Butter Salted 2packs.PNG',
        price: 15.00
    }, 
    {
        id: 13,
        name: 'Fresh Boneless Goat Meat 1kg',
        image: 'Fresh Boneless Goat Meat 1kg.PNG',
        price: 35.00
    }, 
    {
        id: 14,
        name: 'Fruit tea Kemasan Pet 500ml All Varian',
        image: 'Fruit tea Kemasan Pet 500ml All Varian.PNG',
        price: 12.50
    }, 
    {
        id: 15,
        name: 'Livada Peach Compote 680g',
        image: 'Livada Peach Compote 680g.PNG',
        price: 5.80
    }, 
    {
        id: 16,
        name: 'Livada Strawberry Preserve 370g',
        image: 'Livada Strawberry Preserve 370g.PNG',
        price: 5.90
    }, 
    {
        id: 17,
        name: 'Lowicz Chokeberry Jam 280g',
        image: 'Lowicz Chokeberry Jam 280g.PNG',
        price: 6.50
    }, 
    {
        id: 18,
        name: 'Naturel Pure Olive Oil 250ml',
        image: 'Naturel Pure Olive Oil 250ml.PNG',
        price: 19.90
    }, 
    {
        id: 19,
        name: 'Rex Baked Beans in Tomato Sauce 425g',
        image: 'Rex Baked Beans in Tomato Sauce 425g.PNG',
        price: 5.90
    }, 
    {
        id: 20,
        name: 'Rex Tuna Flakes in Oil 185g',
        image: 'Rex Tuna Flakes in Oil 185g.PNG',
        price: 4.90
    }, 
    {
        id: 21,
        name: 'Haribo Happy Gummy Candy 175g',
        image: 'S&S 1-Haribo Happy Gummy Candy 175g.PNG',
        price: 4.50
    },
    {
        id: 22,
        name: 'Chupa Chups Single Lollipop 12g',
        image: 'S&S1-Chupa Chups Single Lollipop 12g.PNG',
        price: 1.00
    }, 
    {
        id: 23,
        name: 'Mentos Chewy Candy 360pcs Assorted Flavoured',
        image: 'S&S1-Mentos Chewy Candy 360pcs Assorted Flavoured.PNG',
        price: 8.50
    }, 
    {
        id: 24,
        name: 'Mister Potato Potato Chips 125g',
        image: 'S&S1-Mister Potato Potato Chips 125g.PNG',
        price: 5.50
    }, 
    {
        id: 25,
        name: 'Oreo Original 133g',
        image: 'S&S1-Oreo Original 133g.PNG',
        price: 4.50
    }, 
    {
        id: 26,
        name: 'Super Ring 60g',
        image: 'S&S1-Super Ring 60g.PNG',
        price: 6.70
    }, 
    {
        id: 27,
        name: 'TWINFISH MAGIC CHEW CANDY MIX 15S SOUR TIES',
        image: 'S&S1-TWINFISH MAGIC CHEW CANDY MIX 15S SOUR TIES.PNG',
        price: 6.50
    }, 
    {
        id: 28,
        name: 'Twisties 60g',
        image: 'S&S1-Twisties 60g.PNG',
        price: 6.90
    }, 
    {
        id: 29,
        name: 'Supreme Frozen Chicken Breast Boneless (1kg)',
        image: 'Supreme Frozen Chicken Breast Boneless (1kg).PNG',
        price: 39.80
    }, 
    {
        id: 30,
        name: 'Supreme Frozen Fresh Salmon Slice',
        image: 'Supreme Frozen Fresh Salmon Slice.PNG',
        price: 15.00
    }, 
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}