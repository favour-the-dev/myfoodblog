import crmspag from '../assets/creamy.jpg';
import user1 from "../assets/users/user1.jpg";
import berry from "../assets/blueberry.jpg";
import user2 from '../assets/users/user2.jpg';
import pasta from "../assets/pasta.jpg";
import user3 from '../assets/users/user3.jpg';
import article1 from "../assets/articles/pizza.jpg";
import article2 from "../assets/articles/green_soup.jpg";
import article3 from "../assets/articles/lemon_chicken.jpg";
import article4 from "../assets/articles/bowl_food.jpg";
import article5 from "../assets/articles/tortellini_bowl.jpg";

const products = [
    {
        id: 1,
        productImage: crmspag,
        productName: "creamy Spaghetti",
        productCategory: "Dinner",
        minsRead: 5,
        userImage: user1,
        userName: "Jane Baker",
        createdAt: new Date()
    },
    {
        id: 2,
        productImage: berry,
        productName: "Are natural wines boring?",
        productCategory: "winer",
        minsRead: 10,
        userImage: user2,
        userName: "Dan Ortega",
        createdAt: new Date()
    },
    {
        id: 3,
        productImage: pasta,
        productName: "weekday Dinner Tips: Pasta Time",
        productCategory: "pasta",
        minsRead: 8,
        userImage: user3,
        userName: "Jane Baker",
        createdAt: "March 30, 2025"
    },
];


export const Articles = [
    {
        id:  1,
        articleImage: article1,
        articleTopic: "Spring Quiche With Vegetables",
        articleDesc: "Gluten free with Potato crust"

    },
    {
        id:  2,
        articleImage: article2,
        articleTopic: "Fancy MineStone",
        articleDesc: "All greens and Fresh Soup"
    },
    {
        id:  3,
        articleImage: article3,
        articleTopic: "Lemon Chicken",
        articleDesc: "Easy one-pot meals for dinners"
    },
    {
        id:  4,
        articleImage: article4,
        articleTopic: "poke Bowl",
        articleDesc: "fancy Flavours and textures you need to try"
    },
    {
        id:  5,
        articleImage: article5,
        articleTopic: "Creamy Tortellini",
        articleDesc: "Creamy, light and yet comforting bowl of pasta"
    },
]

export default products;