export interface FoodCategory{
    id: number;
    title: string;
    image: string;
}

let foodCategoryList: FoodCategory[] = [
    {"id":1, "title":"pasta", "image":"https://images.food52.com/1Gnc46le0WAE2fBgW4m-_hk5CYs=/322x215/b0ea8eb2-0a3c-4d08-a1a0-80586633d75e--2018-0914_miso-mushroom-pasta_3x2_jenny-huang_32871.jpg"},
    {"id":2, "title":"salad", "image":"https://images.food52.com/LF_83abpAXFJCjrw9hsmpryzpdc=/322x215/f26dca01-b2d1-473b-b8c0-4b797be69e5c--051810F_553.JPG"},
    {"id":3, "title":"chicken", "image":"https://images.food52.com/WGlZTMMoa4czpcFsw6OXQvYP5jQ=/322x215/729016a7-afcd-49cb-a499-be9f31d6d3c0--Chicken-Cacciatore_0735_food52_mark_weinberg.jpg"},
]