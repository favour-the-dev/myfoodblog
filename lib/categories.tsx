import { MdOutlineEggAlt } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";

const categories = [
    {
        id: 1,
        category: "breakfast",
        icon: MdOutlineEggAlt,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["5 Ingredients or Less", "Breakfast Drinks", "Dessert for Breakfast", "No-Cook Mornings", "Leftovers Remix"]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["Global Breakfasts", "Nigerian Breakfasts", "American Classics", "European Mornings", "Asian Breakfast Delights"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["Family Favorites", "Breakfast for One", "Brunch Vibes", "Budget-Friendly Eats", "On-the-Go Option"]
            }
        ]
    },
    {
        id: 2,
        category: "baking",
        icon: LuChefHat,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["Surprise-Inside Bakes", "Mini Bakes", "Mashup Creations ", "Colorful Confections ", "Seasonal Specials"]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["European Classics", "African Delights", "Asian Inspirations", "Latin American Treats", "Middle Eastern Bakes"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["Quick Fix Bakes", "Health-Conscious Bakes", "Family-Friendly Bakes", "Meal-Prep Magic", "Budget Bakes"]
            }
        ]
    },
    {
        id: 3,
        category: "cocktails",
        icon: FaGlassMartiniAlt,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["Signature Sips", "Color-Changing Cocktails", "Dessert Cocktails ", "Smoky & Dramatic", "Zero-Proof Magic "]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["Tropical Escapes ", "Latin Vibes", "European Classics", "African Inspirations", "Asian Infusions"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["5-Minute Mixes", "Low-ABV Sips", "Wellness Cocktails", "Entertainer’s Choice", "Seasonal Celebrations "]
            }
        ]
    },
    {
        id: 4,
        category: "dinners",
        icon: GiHamburger,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["One-Pot Wonders", "DIY Dinner Nights ", "Unexpected Pairings", "Dinner in Disguise", "Upscale at Home"]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["Italian Comforts", "Asian Inspirations", "African Flavors", "Latin American Nights", "Mediterranean Feasts"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["Weeknight Express", "Slow-Cooked Comforts", "Date Night Delights", "Family Favorites", "Light & Healthy"]
            }
        ]
    },
    {
        id: 5,
        category: "pasta",
        icon: MdOutlineDinnerDining,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["Pasta Reinvented", "Stuffed & Loaded", "Pasta Bakes", "Colorful Creations", "No-Boil Wonders"]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["Italian Classics", "Asian Fusion", "African Inspirations", "Latin American Twists", "Mediterranean Delights"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["Weeknight Wonders", "Date Night Pastas", "Budget-Friendly Bowls", "Family-Friendly Feasts", "Healthy Twists"]
            }
        ]
    },
    {
        id: 6,
        category: "wine",
        icon: FaWineGlassAlt,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["Wine & Dine Pairings", "Blind Tasting Challenges", "Unexpected Pairings", "Wine Cocktails", "Vintage vs. Modern "]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["Old World Wines ", "New World Discoveries", "Nigerian Wine Culture", "Mediterranean Vibes", "Hidden Gems"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["Wine on a Budget", "Celebration Wines ", "Everyday Sips", "Health-Conscious Choices", "Wine Travel"]
            }
        ]
    },
    {
        id: 7,
        category: "tips",
        icon: MdOutlineTipsAndUpdates,
        types: [
            {
                type: "Unique & Fun Categories",
                typeCats: ["Kitchen Hacks", "Myth Busting", "Secret Ingredients", "Behind-the-Scenes", "Cooking Challenges"]
            },
            {
                type: "Regional & Cultural Inspirations",
                typeCats: ["Global Pantry Staples", "Cooking Traditions", "Flavor Balancing", "Dining Etiquette", "Local Market Guides"]
            },
            {
                type: "Lifestyle-Focused Categories",
                typeCats: ["Meal Planning Magic ", "Healthy Swaps", "Budget-Friendly Tips ", "Hosting Made Easy", "Mindful Eating"]
            }
        ]
    },
]

export default categories;