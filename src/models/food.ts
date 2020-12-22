export interface MenuModel{
    category: string;
    id: number;
    url: string;
    title: string;
    price: number;
    category_id:number;
}

export let menuList: MenuModel[] = [
    {
            "title": "WOW SALAD",
            "price": 8,
            "url": "https://res.cloudinary.com/glovoapp/w_700,h_360,c_fill,f_auto,q_auto/Stores/vr9aqwdyklont17nctef",
            "category": "salads",
            "id": 4,
            "category_id":3
        },
        {
            "title": "TERIYAKI BAKED SALMON",
            "price": 25,
            "url": "https://www.thewholesomedish.com/wp-content/uploads/2020/02/Teriyaki-Baked-Salmon-600X900.jpg",
            "category": "meat",
            "id": 5,
            "category_id":3
        },
        {
            "title": "SPAGHETTI",
            "price": 8,
            "url": "https://www.thewholesomedish.com/wp-content/uploads/2020/08/The-Best-Classic-Spaghetti-1200-768x768.jpg",
            "category": "spaghetti",
            "id": 6,
            "category_id":3
        },
        {
            "title": "CAESAR SALAD",
            "price": 12,
            "url": "https://static.1000.menu/img/content/21458/-salat-cezar-s-kr-salat-cezar-s-krevetkami-s-maionezom_1501173720_1_max.jpg",
            "category": "salads",
            "id": 1,
            "category_id":3
        },
        {
            "title": "COWBOY STEAK",
            "price": 10,
            "url": "https://i.cbc.ca/1.4491288.1516208229!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cowboysteak.jpg",
            "category": "meat",
            "id": 2,
            "category_id":3
        },
        {
            "title": "PIZZA NAPOLETANA",
            "price": 13,
            "url": "https://www.pizzanapoletana.org/struttura/pagine_bicolor/mobile/decalogo_avpn_1.jpg",
            "category": "pizza",
            "id": 3,
            "category_id":3
        }
            
        
    

]