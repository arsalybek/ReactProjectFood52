export interface RecipeModel{
    categoty_id: number;
    id: number;
    image: string;
    name: string;
    author: string;
    review_count: number;
}

export let recipeList: RecipeModel[] = [
    {"categoty_id":1, "id":11, "image":"https://images.food52.com/Dz3ekQUFkkAN7XBI_BggyQ0T41g=/660x440/filters:format(webp)/bdcd63f7-3015-4a44-8390-01b65eb84369--2019-0531_sausage-and-cabbage-pasta_3x2_rocky-luten_023.jpg", 
        "name": "Creamy Sausage Pasta With Cabbage", "author": "ELLA QUITTNER", "review_count": 16 },
    {"categoty_id":1, "id":12, "image":"https://images.food52.com/Dz3ekQUFkkAN7XBI_BggyQ0T41g=/660x440/filters:format(webp)/bdcd63f7-3015-4a44-8390-01b65eb84369--2019-0531_sausage-and-cabbage-pasta_3x2_rocky-luten_023.jpg", 
        "name": "Creamy Sausage Pasta With Cabbage", "author": "ELLA QUITTNER", "review_count": 16 },
    {"categoty_id":1, "id":13, "image":"https://images.food52.com/Dz3ekQUFkkAN7XBI_BggyQ0T41g=/660x440/filters:format(webp)/bdcd63f7-3015-4a44-8390-01b65eb84369--2019-0531_sausage-and-cabbage-pasta_3x2_rocky-luten_023.jpg", 
        "name": "Creamy Sausage Pasta With Cabbage", "author": "ELLA QUITTNER", "review_count": 16 },

    {"categoty_id":2, "id":21, "image":"https://images.food52.com/g51nyIlz8OOBsEnF9mEHevv8iKk=/660x440/filters:format(webp)/529416e3-b77a-4133-a4b0-3866e2edf860--2019-0110_zuni-inspired-grilled-chicken-salad_3x2_ty-mecham.jpg", 
        "name": "Zuni-Inspired Grilled Chicken Salad", "author": "JULIA CLANCY", "review_count": 3 },
    {"categoty_id":2, "id":21, "image":"https://images.food52.com/g51nyIlz8OOBsEnF9mEHevv8iKk=/660x440/filters:format(webp)/529416e3-b77a-4133-a4b0-3866e2edf860--2019-0110_zuni-inspired-grilled-chicken-salad_3x2_ty-mecham.jpg", 
        "name": "Zuni-Inspired Grilled Chicken Salad", "author": "JULIA CLANCY", "review_count": 3 },
    {"categoty_id":2, "id":21, "image":"https://images.food52.com/g51nyIlz8OOBsEnF9mEHevv8iKk=/660x440/filters:format(webp)/529416e3-b77a-4133-a4b0-3866e2edf860--2019-0110_zuni-inspired-grilled-chicken-salad_3x2_ty-mecham.jpg", 
        "name": "Zuni-Inspired Grilled Chicken Salad", "author": "JULIA CLANCY", "review_count": 3 },

    {"categoty_id":3, "id":31, "image":"https://images.food52.com/T0d0q6v1DO23oMspLhvzaDVwVDs=/768x511/9f5d4115-3b74-462d-ab77-f5cd2d862408--2014-0127_finalist_extraordinary-marinated-roasted-chicken-030.jpg", 
        "name": "Extraordinary Marinated and Roasted Chicken, Potatoes, and Chickpeas", "author": "SELMA | SELMA'S TABLE", "review_count": 23 },
    {"categoty_id":3, "id":31, "image":"https://images.food52.com/T0d0q6v1DO23oMspLhvzaDVwVDs=/768x511/9f5d4115-3b74-462d-ab77-f5cd2d862408--2014-0127_finalist_extraordinary-marinated-roasted-chicken-030.jpg", 
        "name": "Extraordinary Marinated and Roasted Chicken, Potatoes, and Chickpeas", "author": "SELMA | SELMA'S TABLE", "review_count": 23 },
    {"categoty_id":3, "id":31, "image":"https://images.food52.com/T0d0q6v1DO23oMspLhvzaDVwVDs=/768x511/9f5d4115-3b74-462d-ab77-f5cd2d862408--2014-0127_finalist_extraordinary-marinated-roasted-chicken-030.jpg", 
       "name": "Extraordinary Marinated and Roasted Chicken, Potatoes, and Chickpeas", "author": "SELMA | SELMA'S TABLE", "review_count": 23 },
]