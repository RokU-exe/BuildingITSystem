import instagramIcon from './instagram.png';
import twitterIcon from './twitter.png';
import pinterestIcon from './pinterest.png';
import facebookIcon from './facebook.svg';
import banner from './banner.png';
import icon1 from './Icon.png';
import icon2 from './Icon-1.png';
import icon3 from './Icon-2.png';
import icon4 from './Icon-3.png';
import cart from './Cart.png';
import user from './user.png';
import phoneCall from './PhoneCall 1.png';

//categories
import bakingNeeds from './bakingneeds.png';
import breadBakery from './breadbakery.png';
import cooking from './cooking.png';
import diabeticFood from './diabeticfood.png';
import fruits from './fruits.png';
import meatfish from './meatfish.png';
import oil from './oil.png';
import vegetables from './vegetables.png';


//display example img
import cookingImg from './cooking.jpg';
import breadImg from './bread.jpg';
import fruitImg from './apple.jpg';
import oilImg from './avocado-oil.jpg';
import bakingImg from './bakingsoda.jpg';
import meatImg from './beef.jpg';
import vetableImg from './bell-pepper.jpg';
import diabeticImg from './diabetic.jpg';

export const assets = {
    instagramIcon,
    facebookIcon,
    twitterIcon,
    pinterestIcon,
    banner,
    icon1,
    icon2,
    icon3,
    icon4,
    cart,
    user,
    phoneCall,
}

export const categories = [
    {
        categories_name: "Fresh Fruit",
        categories_image:  fruits
    },
    {
        categories_name: "Fresh Vegetables",
        categories_image:  vegetables
    },
    {
        categories_name: "Meat & Fish",
        categories_image:  meatfish
    },
    {
        categories_name: "Oil",
        categories_image:  oil
    },
    {
        categories_name: "Bread & Bakery",
        categories_image:  breadBakery
    },
    {
        categories_name: "Baking Needs",
        categories_image:  bakingNeeds
    },
    {
        categories_name: "Cooking",
        categories_image:  cooking
    },
    {
        categories_name: "Diabetic Food",
        categories_image:  diabeticFood
    },

]

export const product_list = [
    {
        _id: "1",
        name: "Bread",
        image: breadImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Bread & Bakery"
    },

    {
        _id: "2",
        name: "Bread",
        image: breadImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Bread & Bakery"
    },

    {
        _id: "3",
        name: "Bread",
        image: breadImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Bread & Bakery"
    },

    {
        _id: "4",
        name: "Apple",
        image: fruitImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Fresh Fruit"
    },

    {
        _id: "5",
        name: "Bread",
        image: fruitImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Fresh Fruit"
    },


    {
        _id: "6",
        name: "Bread",
        image: breadImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Fresh Fruit"
    },

    {
        _id: "7",
        name: "Bread",
        image: cookingImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Cooking"
    },

    {
        _id: "1",
        name: "Bread",
        image: breadImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Fresh Vegetables"
    },

    {
        _id: "1",
        name: "Bread",
        image: breadImg,
        price: 1,
        description: "kfjsdohfighsdfbaijsbfij",
        category: "Meat & Fish"
    },


]
