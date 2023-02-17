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
            <img class="thumbnail" style="height:450px" src="${detail.thumb}"/>
            <div class="card-body">
             <h3>${detail.title}</h3>
              <p class="card-text">
                ${detail.description}
              </p>
              <div class="d-flex justify-content-between align-items-center">
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
      <input type="text" class="form-control" id="password" value="${update.thumb} ">

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
                    <img style="height:200px; width: 300px" src="${e.thumb}"
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
              paid: <span class="h2 mb-0 ms-2"></span></h5>
          </div>
        </div>
      </div>
      </div>
      </div>
</section>
`;
};
const viewCheckout = () => {
  return `
    <p> checkout </p>
   `;
};
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

    default:
      return view404();
  }
};
