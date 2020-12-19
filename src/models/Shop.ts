export interface ShopModel{
    categoty_id: number;
    id: number;
    image: string;
    name: string;
    price: number;
    review_count: number;
}

export let shopList: ShopModel[] = [
    {"categoty_id":1, "id":10, "image":"https://images.food52.com/sM8kdpVzaTB-7DyeEZSdfvCkTX0=/470x470/22e36d01-b545-4b09-9c1f-cbccb5910fe3--2020-0702_holiday-press-preview_cody-foster_vintage-inspired-glass-food-ornaments_family_silo_ty-mecham_1-.jpg", 
        "name": "Vintage-Inspired Food Ornaments", "price": 50, "review_count": 16 },
    {"categoty_id":2, "id":11, "image":"https://images.food52.com/R3V0r-q_bfKSbJiijn9axg9CSNY=/470x470/e71a7f33-3de4-4436-9a42-10954723d102--2019-0617_yamazaki_double-decker-dish-rack_white_1x1_rocky-luten_016.jpg", 
        "name": "Double Decker Dish Rack", "price": 70, "review_count": 20 },
    {"categoty_id":3, "id":12, "image":"https://images.food52.com/tasB2PE0lf5kp7PqKBocvLMsq9w=/680x680/filters:format(webp)/6d68ebd2-054b-4d50-93c8-d09d7616d323--2019-0110_especially-puglia_adopt-a-beehive_1x1_rocky-luten_021.jpg", 
        "name": "Creamy Pasta With Cabbage", "price": 100, "review_count": 13 },   
    {"categoty_id":4, "id":13, "image":"https://images.food52.com/LM-OsWnNJbLsQgNobMLsKfcmPFQ=/470x470/d85e8e07-a480-497e-81b7-e93018fe09d4--2020-0824_food52-x-greenpan_nonstick-skillet-set-of-2_navy-8-11-inch_silo_ty-mecham.jpg", 
        "name": "GreenPan Nonstick Skillet", "price": 110, "review_count": 15 }, 
    {"categoty_id":5, "id":14, "image":"https://images.food52.com/YanjgflFu49Tik2ykh_L--Hd7ts=/470x470/e537cde4-4d7b-4546-ade4-c13544c7f845--2020-0506_five-two_mask_family_silo_rocky-luten_006.jpg", 
        "name": "Adjustable Cloth Face Masks", "price": 105, "review_count": 17 },
    {"categoty_id":6, "id":15, "image":"https://images.food52.com/jbK2uMt9tH8bqZ7NJA5vmiIVQYg=/470x470/a5c98b6c-4d72-4837-a369-06bc967223c9--2019-0430_picnic-time_pop-up-sun-shelter-nylon-tent_1x1_rocky-luten_058.jpg", 
        "name": "Sun Shelter Pop-Up Tent", "price": 60, "review_count": 7 },
    {"categoty_id":7, "id":16, "image":"https://images.food52.com/a6g8_7CPcOEtxfRB3dSl8z9_frM=/680x680/filters:format(webp)/65027523-0afc-4458-8fee-5092b7e66ca0--2020-0109_five-two_glassware_stacked-in-cabinet_gif-still_1x1_rocky-luten_18285.jpg", 
        "name": "Stackable Wine Glasses", "price": 50, "review_count": 10 },   
    {"categoty_id":8, "id":17, "image":"https://images.food52.com/4fGUNZMs8v5fCVtUQiAEj5-pTzA=/680x680/filters:format(webp)/2b1aefe5-4700-4b39-b33c-173369187826--2019-0308_bees-wrap_assorted-set-of-3_ocean_1x1_ty-mecham_001.jpg", 
        "name": "Organic Cotton Reusable Bags", "price": 70, "review_count": 8 } 
        
        


    
]