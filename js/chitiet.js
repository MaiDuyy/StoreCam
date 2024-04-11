const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const hang = params.get("hang");
let chitiet = [];
if (hang === "sony") {
    chitiet = data_sony.find(function (e) {
        return e.id === id;
    });
}
else if (hang === "panasonic") {
    chitiet = data_panasonic.find(function (e) {
        return e.id === id;
    });
}
else if (hang === "canon"){
    chitiet = data_canon.find(function (e) {
        return e.id === id;
    });
}


window.onload = (event) => {
    document.querySelector('.product-info h3').textContent = chitiet.name;
    document.querySelector('.product-info span').textContent = chitiet.model;
    document.querySelector('.product-info h5').textContent = chitiet.price;

    document.querySelector('.product-info p').textContent = chitiet.mota;
    document.querySelector('.small-Card img').src = chitiet.imgUrl;
    document.querySelector('.product-container .img-card img').src = chitiet.imgUrl;
};
