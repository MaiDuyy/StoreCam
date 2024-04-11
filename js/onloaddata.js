window.onload = (event) => {
    data_sony.forEach(e => {
      var htmlObject = document.createElement('div');
      htmlObject.classList.add("col");
      htmlObject.classList.add("col-3");

      let html1 = `
      <div class="card" style="width: 20rem; ">
        <img src="${e.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">${e.name}</p>
          <div class="s1">
            <p>${e.model}</p>
          </div>

          <div class="star">
            <p> ★ ★ ★ ★ ★</p>
          </div>
          <div class="money">
            <p>${e.price}</p>
          </div>
          <a href="#"><button class="btn btn-info btnrepair ">Thêm vào giỏ hàng</button></a>
        </div>
        <div class=" btn btn-primary xemchitiet"><a href="chitiet.html?id=${e.id}&hang=sony" class="nav-link">Xem chi tiết</a></div>
      </div>`;

      htmlObject.innerHTML = html1;

      document.querySelector("#row1").appendChild(htmlObject);
    });

    data_panasonic.forEach(e => {
      var htmlObject = document.createElement('div');
      htmlObject.classList.add("col");
      htmlObject.classList.add("col-3");

      let html1 = `
      <div class="card" style="width: 20rem; ">
        <img src="${e.imgUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"></h5>
          <p class="card-text">${e.name}</p>
          <div class="s1">
            <p>${e.model}</p>
          </div>

          <div class="star">
            <p> ★ ★ ★ ★ ★</p>
          </div>
          <div class="money">
            <p>${e.price}</p>
          </div>
          <a href="#"><button class="btn btn-info btnrepair ">Thêm vào giỏ hàng</button></a>
        </div>
        <div class=" btn btn-primary xemchitiet"><a href="chitiet.html?id=${e.id}&hang=panasonic" class="nav-link">Xem chi tiết</a></div>
      </div>`;

      htmlObject.innerHTML = html1;

      document.querySelector("#row2").appendChild(htmlObject);
    });

    data_canon.forEach(e => {
        var htmlObject = document.createElement('div');
        htmlObject.classList.add("col");
        htmlObject.classList.add("col-3");
  
        let html1 = `
        <div class="card" style="width: 20rem; ">
          <img src="${e.imgUrl}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text">${e.name}</p>
            <div class="s1">
              <p>${e.model}</p>
            </div>
  
            <div class="star">
              <p> ★ ★ ★ ★ ★</p>
            </div>
            <div class="money">
              <p>${e.price}</p>
            </div>
            <a href="#"><button class="btn btn-info btnrepair ">Thêm vào giỏ hàng</button></a>
          </div>
          <div class=" btn btn-primary xemchitiet"><a href="chitiet.html?id=${e.id}&hang=canon" class="nav-link">Xem chi tiết</a></div>
        </div>`;
  
        htmlObject.innerHTML = html1;
  
        document.querySelector("#row3").appendChild(htmlObject);
      });
  };
