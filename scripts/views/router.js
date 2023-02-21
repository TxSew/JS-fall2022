const viewRegister = () => {
  return `
    <form>
  <h3>Register</h3>
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" class="form-control" id="username">
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password">
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
          <div class="card shadow-sm">
            <img class="thumbnail" style="height:450px" src="${detail.image}"/>
            <div class="card-body">
             <h3>${detail.title}</h3>
              <p class="card-text">
                ${detail.description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
               $${detail.price}
                <div class="btn-group">
                   
                 <button class="backHome"> Quay lại </button>
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
viewCreatePost = () => {
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
      <label for="password">Description:</label>
      <input type="text" class="form-control" id="description">
    </div>
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
      <input type="text" class="form-control" id="password" value="${update.image} ">

    </div>
 <div class="form-group">
      <label for="password">Description:</label>
      <textarea  name="w3review" rows="4" cols="50" id="description">
       ${update.description}
</textarea>
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
  const html = card.carts.map((e) => {
    return `
             <div class="card shadow-0 border mb-4">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-2">
                    <img style="height:200px; width: 300px" src="${e.image}"
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
                </div>
                <hr class="mb-4" style="background-color: #e0e0e0; opacity: 1;">
                 <div class="col-md-2 text-center f-flex justify-content-center"> <button class="delete_card" data-id="${
                   e.id
                 }" > remove </button> </div>
                 </div>
                </div>
              </div>
            </div>
         `;
  });
  return `
   <section class="h-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-10 col-xl-8">
        <div class="card" style="border-radius: 10px;">
          <div class="card-header px-4 py-5">
            <h5 class="text-muted mb-0">Thanks for your Order, <span style="color: #a8729a;">Anna</span>!</h5>
          </div>
          ${html.join("")}  
                              <div class="card-footer border-0 px-4 py-5"
            style="background-color: #a8729a; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
             <div class="checkout-btn bold" style="font-weight: bold ; color : #fff ; border : 1px solid gray; display: inline; text-center padding : 2px 10px">checkout</div>
            <h5 class="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">Total
              paid: <span class="h2 mb-0 ms-2"> $${card.getTotal()}</span></h5>
          </div>
        </div>
      </div>
      </div>
      </div>
</section>
`;
};
 const viewCheckout = (checkout) => {
    const html =checkout.carts.map((e) => {
     return `
     <div class="d-flex align-items-center mb-5">
                  <div class="flex-shrink-0">
                    <img src="${e.image}"
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
     `
   })
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
     ${html.join('')}
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
   `
 }
  const tracKing = () => {
    return `
          <div>
        
         <h3>Tìm kiếm đơn hàng của bạn </h3> 
         <input type="text" placeholder="Nhập mã code..." id="code-search"/>
          <button id="checkout_btn">Tìm kiếm </button>
           <div class="TrackingView"> </div>
          </div>
    ` 
  }
export const router = (path = "/", data = {}) => {
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
    return tracKing(data)
    default:
      return view404();
  }
};
