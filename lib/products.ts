import crmspag from '../assets/creamy.jpg';
import user1 from "../assets/users/user1.jpg";
import berry from "../assets/blueberry.jpg";
import user2 from '../assets/users/user2.jpg';
import pasta from "../assets/pasta.jpg";
import user3 from '../assets/users/user3.jpg';

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

export default products;