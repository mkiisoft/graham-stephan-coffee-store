class Restaurant {
    constructor(resturantStore) {
        this.name = resturantStore.name
        this.imageUrl = resturantStore.image_url;
        this.url = resturantStore.url;
        this.rating = resturantStore.rating;
        this.price = resturantStore.price;
        this.address = resturantStore.location.address1 + ', ' + resturantStore.location.city;
    }
}

export default Restaurant