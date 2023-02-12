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
  console.log("detail", detail);
  return `<div>
      <div class="loading">
        <div id="loading-spiner" class="text-primary" role="status"></div>
      </div>
      <div id="items" class="row">
        <div class="col-sm-12">
          <div class="card shadow-sm">
            <img class="thumbnail_detail" style="height:450px" src="${detail.thumbnail}"/>
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
      <input type="text" class="form-control" id="password" value="${update.thumbnail} ">
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
  return`<div class="row">
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
    default:
      return view404();
  }
};
