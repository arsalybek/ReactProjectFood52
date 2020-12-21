export interface RecipeModel{
    categoty_id: number;
    id: number;
    image: string;
    name: string;
    author: string;
    review_count: number;
    prep_time: string;
    cook_time: string;
    serves: number;
    date: string;
    notes: string;
}

export let recipeList: RecipeModel[] = [
    {
        "categoty_id":1, 
        "id":11, 
        "image":"https://images.food52.com/Dz3ekQUFkkAN7XBI_BggyQ0T41g=/660x440/filters:format(webp)/bdcd63f7-3015-4a44-8390-01b65eb84369--2019-0531_sausage-and-cabbage-pasta_3x2_rocky-luten_023.jpg", 
        "name": "Chuck Roast Bolognese", 
        "author": "ELLA QUITTNER", 
        "review_count": 16 ,
        "prep_time": "15 minutes",
        "cook_time": "1 hour 20 minutes",
        "serves": 2,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":1, 
        "id":12, 
        "image": "https://images.food52.com/YV1cDJUUisEdjrqq6sJd77ji_EI=/530x354/a7cf92ae-a8e3-457a-91fe-019943132be5--2019-0723_martha-stewarts-one-pan-pasta_3x2_rocky-luten_040.jpg",
        "name": "Martha Stewart's One-Pan Pasta", 
        "author": "GENIUS RECIPES", 
        "review_count": 175 ,
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "serves": 2,
        "date": "January  12, 2020",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":1, 
        "id":13, 
        "image": "https://images.food52.com/k7n5ZF3U0LLtPyb0jvsQUdctPdg=/530x354/b0ea8eb2-0a3c-4d08-a1a0-80586633d75e--2018-0914_miso-mushroom-pasta_3x2_jenny-huang_32871.jpg",
        "name": "Miso-Mushroom Pasta", 
        "author": "YI JUN LOH", 
        "review_count": 78 ,
        "prep_time": "10 minutes",
        "cook_time": "20 minutes",
        "serves": 2,
        "date": "July  5, 2018",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },

    {
        "categoty_id":2, 
        "id":21, 
        "image": "https://images.food52.com/DLOsBBQil8twM26f88AfMDF2HfA=/530x354/f26dca01-b2d1-473b-b8c0-4b797be69e5c--051810F_553.JPG",
        "name": "Caesar Salad with Pancetta", 
        "author": "MARIE VILJOEN", 
        "review_count": 19 ,
        "prep_time": "10 minutes",
        "cook_time": "10 minutes",
        "serves": 2,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":2, 
        "id":22, 
        "image": "https://images.food52.com/1dNNLBOnpTT0RutIv6dzI7hQo_Y=/530x354/9cf3bbf7-ea28-48a8-bb53-17e6953e19d7--2014_1111_chicken-and-radicchio-salad-with-pickled-raisins-0316.jpg",
        "name": "Chicken and Radicchio Salad", 
        "author": " MICHELLE MCKENZIE", 
        "review_count": 5 ,
        "prep_time": "15 minutes",
        "cook_time": "30 minutes",
        "serves": 2,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":2, 
        "id":23, 
        "image": "https://images.food52.com/WdcsLrDw3k3EhYuiLiloXJVilAU=/530x354/33fef619-dd86-4ccd-87b0-5310cc4dc0f9--2019-0110_2-minute-foolproof-salad-dressing_3x2_ty-mecham.jpg",
        "name": "Easy, Creamy Vegan Salad Dressing", 
        "author": "ORI ZOHAR", 
        "review_count": 4,
        "prep_time": "10 minutes",
        "cook_time": "10 minutes",
        "serves": 2,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":3, 
        "id":31, 
        "image": "https://images.food52.com/_727eoGqB0GGX-Wul5b0_ZneqRg=/530x354/0a892ce0-2f86-4be2-8645-f502db9a0030--2015-0331_chicken-marsala_mark-weinberg_0205.jpg",
        "name": "Chicken Marsala", 
        "author": "CHEFABILITIES", 
        "review_count": 60,
        "prep_time": "25 minutes",
        "cook_time": "45 minutes",
        "serves": 2,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":3, 
        "id":32, 
        "image": "https://images.food52.com/fkCrDEJCuOX0FySfqmxAdNpVZc8=/530x354/2b42b061-ea3d-4e9c-99d7-8a621f25d96a--2019-0813_instant-pot-french-garlic-chicken_3x2_ty-mecham_001.jpg",
        "name": "Creamy Garlic Chicken", 
        "author": "URVASHI PITRE", 
        "review_count": 23,
        "prep_time": "25 minutes",
        "cook_time": "40 minutes",
        "serves": 2,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    {
        "categoty_id":3, 
        "id":33, 
        "image": "https://images.food52.com/19-9lUZB4FAfbn4hztGPA1MvkoQ=/530x354/a643542c-9c24-4841-b9d1-fb3155b1dfb3--2019-0115_burmese-inspired-chicken-braised-in-coconut-milk-turmeric-with-sweet-potato-final-3x2_ty-mecham_001.jpg",
        "name": "Burmese-Inspired Chicken Braised", 
        "author": "SARA JENKINS", 
        "review_count": 104,
        "prep_time": "40 minutes",
        "cook_time": "40 minutes",
        "serves": 4,
        "date": "October  5, 2016",
        "notes": "My aunt’s family lived in Burma in the ‘60s and when they came back to the U.S.,"
        +"they brought a recipe for “kaukswe,” a coconut-chicken-curry dish from the southern part of the country." + 
        "It became our family’s celebratory dish for every big get-together. Gathered around a large round table in" + 
        "a corner of a rather overcrowded room, we filled our bowls from the communal pot and garnished Like my beloved sandwich, this soup finds its origins in the Italian-American classic, chicken Parmesan. Unlike the sandwich, the more refined soup easily translates into a wholesome weeknight meal. In some ways it even ups the ante–after all, it's made in a slow cooker, can be eaten with a spoon, and won't leave you with a lump in your stomach the way its other forms might. This is the chicken Parmesan that will love you back. —Julie Myers"
    },
    

]