const viewRegister = () => {
  return `
    <form>
  <h3>Register</h3>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username">
        </div>
        <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password">
        </div>
        <div class="form-group">
                <label for="Name">Name:</label>
                <input type="text" class="form-control" id="Name">
                </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email">
        </div>

        <p style="color:red" id="errors"></p>
        <button id="btn-register-submit" type="button" class="btn btn-primary">Register</button>
    </form>`;
};
const viewHome = (data) => {
  return `
    <div class="row">
    <div class="search">
      <input
        type="text"
        id="input-search"
        class="form-control"
        placeholder="nhập từ khoá tìm kiếm"
        aria-describedby="basic-addon1"
      />
      <div class="search_modal hide">
      </div>
    </div>
  </div>
  <div class="loading">
    <div id="loading-spiner" class="text-primary" role="status"></div>
  </div>

  <div id="items" class="row">
    <div class="col-md-3 col-sm-12">
      <div class="card shadow-sm">
        <svg
          class="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c"></rect>
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
        </svg>
        <div class="card-body">
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                View
              </button>
              <button
                type="button"
                class="btn btn-sm btn-outline-secondary"
              >
                Edit
              </button>
            </div>
            <small class="text-muted">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
};

const viewDetail = (detail) => {
  return `<div>
      <div class="loading">
        <div id="loading-spiner" class="text-primary" role="status"></div>
      </div>
      <div id="items" class="row">
        <div class="col-sm-12">
          <div class="card shadow-sm" style="display:flex">
            <img class="thumbnail" style="height:450px" src="${detail.thumbnail}"/>
            <div class="card-body">
             <h3>${detail.title}</h3>
              <p class="card-text">
                ${detail.description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
               $${detail.price}
                <div class="btn-group">
                   
                <button data-id="${detail.id}" class="btnCard" style="background:green; padding:3px 10px; border-radius:4px; margin-right:20px"> Mua </button>
                 <button class="backHome" style="border-radius:5px; background:black; color:white; padding:2px 10px"> Quay lại </button>
                </div>
                <small class="text-muted">9 mins</small>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
};
const view404 = () => {
  return `<div></h1>page not found </h1></div>`;
};
const viewLogin = () => {
  return `
    <form>
    <h3>LOGIN</h3>
    <div class="form-group">
      <label for="username">Username:</label>
      <input type="text" class="form-control" id="username">
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" id="password">
    </div>
    <p style="color:red" id="errors"></p>
    <button id="btn-login-submit" type="button" class="btn btn-primary">Login</button>
    </form>
    `;
};
viewCreatePost = (data) => {
  console.log(data);
  const html = data.map((e) => {
    return `
       <option value="${e.name}">${e.name}</option>
       `;
  });
  return `
    <form>
    <h3 class="heading_Post">Create Post </h3>
    <div class="form-group">
      <label for="username">Title:</label>
      <input type="text" class="form-control" id="username">
    </div>
    <div class="form-group">
      <label for="password">thumbnail:</label>
      <input type="text" class="form-control" id="password">
    </div>
 <div class="form-group">
      <label for="description">Description:</label>
      <input type="text" class="form-control" id="description">
    </div>
<div class="form-group">
      <label for="price">Price:</label>
      <input type="text" class="form-control" id="price">
    </div>

    <select name="" id="categories">
    ${html.join("")}
           </select> 
    <p style="color:red" id="errors"></p>
    <button id="btn-login-submit" type="button" class="btn btn-primary">Save</button>
    </form>
   `;
};
updatePost = (update) => {
  return `
    <form>
    <h3> EDIT POST - ${update.id} </h3>
    <div class="form-group">
      <label for="username">Title:</label>
      <input type="text" class="form-control" id="username" value="${update.title}" style="color:gray">
    </div>
    <div class="form-group">
      <label for="password">thumbnail:</label>
      <input type="text" class="form-control" id="password" value="${update.thumbnail} ">

    </div>
    <div class="form-group">
      <label for="price">price:</label>
      <input type="text" class="form-control" id="price" value="${update.price} ">

    </div>

 <div class="form-group">
      <label for="password">Description:</label>
      <textarea  name="w3review" rows="4" cols="50" id="description">
       ${update.description}
</textarea>
    </div>
 <div class="form-group">
<select name="" id="categories">
        <option value="">Chọn danh mục </option>
        <option value="iphone">iphone</option>
        <option value="samsung">samsung</option>
        <option value="nokia">nokia</option>
    </select> 
  
    </div>
    <p style="color:red" id="errors"></p>
    <button id="btn-login-submit" type="button" class="btn btn-primary">Save</button>
    </form>
   `;
};
const viewAdmin = (item) => {
  return `<div class="row">
        <div class="col-md-3">
          <img class="img-thumbnail" src="${item.thumbnail}" />
        </div>
        <div class="col-md-8">
        <a data-id=${item.id} class="item_href" href="#"/>
        <p>${item.title}</p>
        <p class="price">${item.description}</p>
        </a>
        </div>
    </div>
 `;
};
const viewCard = (card) => {
  //  const total = card.getTotal()
  console.log(card);
   const UserName = JSON.parse(localStorage.getItem('user'))
   let name = ""
    if(UserName) {
name = UserName.name
    } else {
       name = "player"
    }
  const html = card.carts.map((e) => {
    return `
             <div class="card shadow-0 border mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img style="height:200px; width: 300px" src="${e.thumbnail}"
                      class="img-fluid" alt="Phone">
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0">${e.title}</p>
                  </div>
                  
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">Capacity: ${e.price} </p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">Qty: ${e.quantity}</p>
                  </div>
                  <div class="col-md-2 text-center d-flex justify-content-center align-items-center">
                    <p class="text-muted mb-0 small">$${
                      e.price * e.quantity
                    }</p>
                    </div>
                    
                       <div class="col-md-2 text-center f-flex justify-content-center"> <button class="delete_card mt-10" data-id="${
                         e.id
                       }" > remove </button> </div>
                       </div>
                </div>
                </div>
              </div>
            </div>
         `;
  });
  return `
   <section class="h-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="  justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-12">
        <div class="card" style="border-radius: 10px;">
          <div class="card-header px-4 py-5">
            <h5 class="text-muted mb-0">Cảm ơn vì bạn đặt hàng !, <span style="color: #a8729a;">${name}</span></h5>
          </div>
          ${html.join("") || `<spa style="text-align:center ; font-weight:bold; font-size:20px"> Chưa có sản phẩm trong giỏ hàng !</spa>`}  
                              <div class="card-footer border-0 px-4 py-5"
            style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
             <div class="checkout-btn bold" style="font-weight: bold ; color : #fff ;cursor:pointer ">Thanh Toán</div>
            <h5 class="d-flex align-items-center justify-content-end text-white mb-0">Tổng tiền:  <span class="h5 mb-0 ms-2"> $${card.getTotal()}</span></h5>
          </div>
        </div>
      </div>
      </div>
      </div>
</section>
`;
};
const viewCheckout = (checkout) => {
  const html = checkout.carts.map((e) => {
    return `
     <div class="d-flex align-items-center mb-5">
                  <div class="flex-shrink-0">
                    <img src="${e.thumbnail}"
                      class="img-fluid" style="width: 150px;" alt="Generic placeholder image">
                  </div>
                  <div class="flex-grow-1 ms-3">
                    <a href="#!" class="float-end text-black"><i class="fas fa-times"></i></a>
                    <h5 class="text-primary">${e.title}</h5>
                    <h6 style="color: #9e9e9e;">Color: white</h6>
                    <div class="d-flex align-items-center">
                      <p class="fw-bold mb-0 me-5 pe-3">${e.price}</p>
                      <div class="def-number-input number-input safari_only">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          class="minus"></button>
                        <input class="quantity fw-bold text-black" min="0" name="quantity" value="${e.quantity}"
                          type="number">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          class="plus"></button>
                      </div>
                    </div>
                  </div>
                </div>
     `;
  });
  return `
    
<section class="h-100 h-custom" style="background-color: #eee;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">
        <div class="card shopping-cart" style="border-radius: 15px;">
          <div class="card-body text-black">

            <div class="row">
              <div class="col-lg-6 px-5 py-4">

                <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>
     ${html.join("")}
               <hr class="mb-4" style="height: 2px; background-color: #1266f1; opacity: 1;">

                <div class="d-flex justify-content-between px-x">
                  <p class="fw-bold">Discount:</p>
                  <p class="fw-bold">95$</p>
                </div>
                <div class="d-flex justify-content-between p-2 mb-2" style="background-color: #e1f5fe;">
                  <h5 class="fw-bold mb-0">Total:</h5>
                  <h5 class="fw-bold mb-0">${checkout.getTotal()}</h5>
                </div>

              </div>
              <div class="col-lg-6 px-5 py-4">

                <h3 class="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                <form class="mb-5">

                  <div class="form-outline mb-5">
                    <input type="text" id="typeText" class="form-control form-control-lg" />
                    <label class="form-label" for="typeText">Card Number</label>
                  </div>

                  <div class="form-outline mb-5">
                    <input type="text" id="typeName" class="form-control form-control-lg" 
                     
                    <label class="form-label" for="typeName">Name on card</label>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-5">
                      <div class="form-outline">
                        <input type="text" id="typeExp" class="form-control form-control-lg" 
                         />
                        <label class="form-label" for="typeExp">Expiration</label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-5">
                      <div class="form-outline">
                        <input type="password" id="typeText" class="form-control form-control-lg"
                        />
                        <label class="form-label" for="typeText">Cvv</label>
                      </div>
                    </div>
                  </div>

                  <p class="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>

                  <button  class=" btn-buy">Buy now</button>

                  <h5 class="fw-bold mb-5" style="position: absolute; bottom: 0;">
                    <a href="#!"><i class="fas fa-angle-left me-2"></i>Back to shopping</a>
                  </h5>

                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
   `;
};
const tracKing = () => {
  return `
          <div>
        
         <h3>Tìm kiếm đơn hàng của bạn </h3> 
         <input type="text" placeholder="Nhập Mã Đơn Hàng..." id="code-search"/>
          <button id="checkout_btn">Tìm kiếm </button>
           <div class="TrackingView"> </div>
          </div>
    `;
};
const dashboard = (data, category ,checkout) => {
  console.log(data.length);
   console.log(category)
   console.log('e',checkout)
  const categories = category.length;
  const checkouts = checkout.length;
  return `
  <div class="dashboard">
   <div className="link-admin">
     <ul class="link_adminBtn">
     <li><a href="">DashBoard</a></li>
     <li><a  class="productAdmin" href="">List Product</a></li>
     <li><a href="">List Categories</a></li>
     <li><a href="" class="adminOrder">List Order</a></li>
     </ul>
   </div>
    <div class="row box_dashboard">
    <div class="col-md-3">
    <span>${data.length}</span>
     <br>
      <span>product</span> 
    </div> 
    <div class="col-md-3">
    <span>${categories}</span>
      <span>Categories</span> 
    </div> 

    <div class="col-md-3">
      <span>cart</span> 
    </div> 

    <div class="col-md-3">

    <span>${checkouts}</span>
      <span>order</span> 
    </div> 
    </div> 
  </div>
     `;
};
const AdminProduct = (data) => {
  const html = data.map((e) => {
    return `
      
       <tr>
      <td>
      <img style="width:200px; height:200px" src="${e.thumbnail}" alt="" /> 
      </td> 

      <td style="width:400px">
      <p>${e.title}</p>
      </td> 

      <td style="width:300px">
      <p >${e.price}</p>
      </td> 

      <td style="width:300px">
      <p >${e.categories}</p>
      </td> 
      <td>
 <button data-id="${e.id}" class="btn-delete" style="background:red;; padding:3px 10px; border-radius:2px"> Delete </button>
  <button data-id="${e.id}" class="btn_updateCOde"  style="background:blue;  padding:3px 10px; border-radius:2px"> Edit </button>
 
      </td>
       </tr>
       
       
       `;
  });
  return `
   <div className="adminBoxAdmin">
        <div class="create_btn">
          <button>Create</button>
      </div>
 <div class="create_btn backAdmin">
          <button>Back</button>
      </div>
   <table>
  <thead>
    <tr>
      <th>THUMBNAIL</th>
      <th>NAME</th>
      <th>PRICE</th>
      <th>CATEGORY</th>
      <th>ACTION</th>
    </tr>
  </thead>
   <tbody>
    ${html.join("")}
   </tbody>  
     
   </table> 
   </div> 
   `;
};
const HistoryOrder = (data) => {
   
const thumbnail = data.map((e,i) => {
 return `
   
   <div class="historyUser"> 
          <ul style="display:flex; gap:20px">
          <li>${i+1} </li>
 <li>  ${e.Number} </li>
 <li> ${e.NameCard} </li>
 <li> ${e.TimeOrder} </li>
 <li> ${e.products.length} </li>

 <li> ${e.status} </li>
 <li>${e.code}</li>
 
 </ul>
 <ul>

  
 </ul>
          </div>
   `;
})

 if(data.length >=1) {
return `
<div class="historyUser"> 
          <ul style="display:flex; gap:20px; font-weight:bold">
          <li>STT </li>
 <li> Số điện thoại</li>
 <li> Họ Tên</li>
 <li> Thời gian mua hàng </li>
 <li> Số lượng sản phẩm </li>
 <li> Trạng thái</li>
 <li>Mã đơn hàng</li>
 
 </ul>
 ${thumbnail.join('')}
 <ul>

  
 </ul>
          </div>

`
  }
  else {
    return `
    <p>chua co san pham</p>
    `
  }
};
const adminOrder = (data) => {
const thumbnail = data.map((e,i) => {
 return `
   
   <div class="historyUser"> 
          <ul style="display:flex; gap:20px">
          <li>${i+1} </li>
 <li>  ${e.Number} </li>
 <li> ${e.NameCard} </li>
 <li> ${e.TimeOrder} </li>
 <li> ${e.products.length} </li>

 <li class="statusOrder"> ${e.status}
 
 </li>
 <li>
 <button data-id="${e.id}" class="pending_order" style="background:blue;; padding:3px 10px; border-radius:2px"> Giao </button>
 <button data-id="${e.id}" class="success_order"  style="background:green;  padding:3px 10px; border-radius:2px"> Đã Giao </button>
 <button data-id="${e.id}" class="cancel_order"  style="background:red;  padding:3px 30px; border-radius:2px"> Hủy </button>
 
 </li>
 <li>${e.code}</li>
 </ul>
 <ul>
 </ul>
          </div>
   `;
})

 if(data.length >=1) {
return `
<div class="historyUser"> 
          <ul style="display:flex; gap:20px; font-weight:bold">
          <li>STT </li>
 <li> Số điện thoại</li>
 <li> Họ Tên</li>
 <li> Thời gian mua hàng </li>
 <li> Số lượng sản phẩm </li>
 <li> Trạng thái</li>

 <li> Cập Nhật</li>
 <li>Mã đơn hàng</li>
 </ul>
 ${thumbnail.join('')}
 <ul>
 </ul>
          </div>
`
  }
  else {
    return `
    <p>chua co san pham</p>
    `
  }
};


export const router = (path = "/", data = {}, data2 = {}, data3 = {}) => {
  switch (path) {
    case "/":
      return viewHome(data);
    case "/detail":
      return viewDetail(data);
    case "/login":
      return viewLogin(data);
    case "/register":
      return viewRegister(data);
    case "/createPost":
      return viewCreatePost(data);
    case "/updatePost":
      return updatePost(data);
    case "/admin":
      return viewAdmin(data);
    case "/card":
      return viewCard(data);
    case "/checkout":
      return viewCheckout(data);
    case "/tracking":
      return tracKing(data);
    case "/dashboard":
      return dashboard(data, data2, data3);
    //case admin
    case "/adminProduct":
      return AdminProduct(data);
    case "/adminHistory":
      return HistoryOrder(data);
    case "/adminOrder":
      return adminOrder(data);
    default:
      return view404();
  }
};
