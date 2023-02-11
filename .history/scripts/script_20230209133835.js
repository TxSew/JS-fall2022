import products from "../product.json";
import ManagerProduct from "./mangerProduct.js";
import ManagerUser from "./mangerUser.js";
import { debounce } from "./helper/helper";
import { router } from "./views/router.js";

var x = 10;
// const y = 5;
// y = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
  //   alert(x);
}
// Here x is 10
// thuong
function cong(a, b) {
  return a + b;
}
// arrow function
const congArrow = (a, b) => a + b;
const mang = ["le", "hong", "son"];
console.log(mang);
const mangDuplicate = [...mang];
console.log(mangDuplicate);

const mangB = [...mang, ...mangDuplicate];
console.log(mangB);

console.log("products", products.products);

// for (const item of products.products) {
//   if (item.price >= 50000) {
//     console.log("item", item);
//   }
// }

//map
const map = new Map();
map.set("pk001", "nguyen van a");
map.set("pk002", "nguyen van b");
map.set("pk003", "nguyen van c");
console.log(map.get("pk001"));
console.log(map.size);
console.log(map.delete("pk001"));
console.log(map.get("pk001"));
console.log(map.has("pk002"));
for (const x of map.keys()) {
  console.log(x);
}
console.log(map.clear());

console.log(map);

// const myPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("I love You !!");
//   }, 5000);
// });

// myPromise.then(function (value) {
//   console.log(value);
// });
// console.log("1+2", 1 + 2);
/**
 * lấy data của api trả về render html
 *  document.getElementById("products").innerHTML
 */
// console.log("detailHtml", detailHtml);
let productList = [];
(async () => {
  await ManagerProduct.getAll();
  printHtml(ManagerProduct.products);
  productList = ManagerProduct.products;
})();
const printHtml = (data) => {
  const elPost = document.getElementById("items");
  let html = "";
  for (const item of data) {
    html += `
    <div id="item" class="col-lg-3 col-md-12">
    <div class="card shadow-sm">
      <img class="thumbnail" src="#"/>
      <div class="card-body">
      <h5 style="font-weight: bold">${item.title}</h5>
        <p class="card-text">
          ${item.description}
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
            <button
            type="button"
            data-id=${item.id}
            class="btn-delete btn btn-sm btn-outline-danger"
          >
            delete
          </button>
          </div>
          <small class="text-muted">9 mins</small>
        </div>
      </div>
    </div>
  </div>
    `;
  }
  elPost.innerHTML = html;
  handleDelete();
};

// const set = new Set();
// set.add("a");
// set.add("a");
// set.add("a");
// set.add("b");
// set.add("b");
// set.add("c");
// console.log(set.size);
const inputSearch = document.getElementById("input-search");
const spinerLoading = document.getElementById("loading-spiner");

const searchDouce = debounce(async (event) => {
  await ManagerProduct.searchProduct(event.target.value);
  const searchModal = document.querySelector(".search_modal");
  searchModal.innerHTML = "";
  printModalSearchHtml(ManagerProduct.products);
  printHtml(ManagerProduct.products);
  spinerLoading.classList.remove("spinner-border");
}, 1000);

if (inputSearch) {
  inputSearch.addEventListener("input", (event) => {
    spinerLoading.classList.add("spinner-border");

    searchDouce(event);
  });
}
const rootHtml = document.querySelector("#root");
// router("/");
inputSearch.addEventListener("focus", () => {
  console.log("show input search");
  const searchModal = document.querySelector(".search_modal");
  printModalSearchHtml(ManagerProduct.products);

  searchModal.classList.remove("hide");
});

inputSearch.addEventListener("blur", () => {
  console.log("show input out");
  const searchModal = document.querySelector(".search_modal");
  searchModal.classList.add("hide");
});

const printModalSearchHtml = (data) => {
  const elPost = document.querySelector(".search_modal");
  console.log(elPost);
  let html = "";
  let i = 0;
  for (const item of data) {
    if (i > 5) {
      break;
    }
    html += `
    <div class="row">
        <div class="col-md-3">
          <img class="img-thumbnail" src="#" />
        </div>
        <div class="col-md-8">
        <a data-id=${item.id} class="item_href" href="#"/>
        <p>${item.title}</p>
        <p class="price">${item.price}</p>
        </a>
        </div>
    </div>
    `;
    i++;
  }
  i = 0;
  elPost.innerHTML = html;
  document.querySelectorAll(".item_href").forEach((e) =>
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      const detail = ManagerProduct.products.filter(
        (product) => product.id === id
      );
      rootHtml.innerHTML = router("/detail", detail[0]);
      window.history.pushState({}, null, `/detail/${detail[0].id}`);
    })
  );
};

const handleDelete = () => {
  document.querySelectorAll(".btn-delete").forEach((e) =>
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      if (confirm("are you sure delete") == true) {
        const productDeleted = ManagerProduct.products.filter(
          (product) => product.id !== id
        );
        console.log(productDeleted);
        printHtml(productDeleted);
        // rootHtml.innerHTML = router("/detail", detail[0]);
        // window.history.pushState({}, null, `/detail/${detail[0].id}`);
      } else {
        return;
      }
    })
  );
};

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOMContent");
  const btn_login = document.querySelector("#btn_login");
  console.log("btn_login", btn_login);
  if (btn_login) {
    btn_login.addEventListener("click", function (e) {
      e.preventDefault();
      alert("show login form");
      return false;
    });
  }
});

const btn = document.querySelector("#btn-login");
if (btn) {
  btn.addEventListener("click", () => {
    rootHtml.innerHTML = router("/login");
    window.history.pushState({}, null, `/login`);
    xuLyLogin();
  });
}

const btnRegister = document.querySelector("#btn-register");
if (btnRegister) {
  btnRegister.addEventListener("click", () => {
    rootHtml.innerHTML = router("/register");
    window.history.pushState({}, null, `/register`);
    xuLyRegister();
  });
}

const xuLyLogin = () => {
  const elUsername = document.getElementById("username");
  const elPassword = document.getElementById("password");
  const elButtonLogin = document.getElementById("btn-login-submit");
  const elErros = document.getElementById("errors");
  const errors = [];
  console.log("elButtonLogin", elButtonLogin);
  elButtonLogin.addEventListener("click", async (event) => {
    event.preventDefault();
    if (elUsername.value.trim() === "") {
      errors.push("user not empty");
    }
    if (elPassword.value.trim() === "") {
      errors.push("password not empty");
    }
    if (errors.length > 0) {
      // show error message
      elErros.innerHTML = errors.join("</br>");
      return;
    } else {
      // dang nhap thanh cong
      const isLogin = await ManagerUser.login(
        elUsername.value,
        elPassword.value
      );
      //   $(".navbar-nav").append(` <li class="nav-item">
      //   <a id="btn-logout" class="nav-link" href="#">Logout</a>
      // </li>`);
      if (isLogin) {
        const navigation = document.querySelector(".navbar-nav");
        navigation.insertAdjacentHTML(
          "beforeend",
          `<li class="nav-item">
        <a id="btn-logout" class="nav-link" href="#">Logout</a>
        </li>`
        );
      }
    }
  });
};
/**
 * get username, password, email
 * kiem tra user ton tai chua ?
 * co -> thong bao
 * chua -> luu vao db -> chuyen ve dang nhap
 */
const xuLyRegister = () => {
  const elUsername = document.getElementById("username");
  const elPassword = document.getElementById("password");
  const elButtonLogin = document.getElementById("btn-login-submit");
  const elErros = document.getElementById("errors");
  const errors = [];
  console.log("elButtonLogin", elButtonLogin);
  elButtonLogin.addEventListener("click", async (event) => {
    event.preventDefault();
    if (elUsername.value.trim() === "") {
      errors.push("user not empty");
    }
    if (elPassword.value.trim() === "") {
      errors.push("password not empty");
    }
    if (errors.length > 0) {
      // show error message
      elErros.innerHTML = errors.join("</br>");
      return;
    } else {
      // dang nhap thanh cong
      const isLogin = await ManagerUser.login(
        elUsername.value,
        elPassword.value
      );
      //   $(".navbar-nav").append(` <li class="nav-item">
      //   <a id="btn-logout" class="nav-link" href="#">Logout</a>
      // </li>`);
      if (isLogin) {
        const navigation = document.querySelector(".navbar-nav");
        navigation.insertAdjacentHTML(
          "beforeend",
          `<li class="nav-item">
        <a id="btn-logout" class="nav-link" href="#">Logout</a>
        </li>`
        );
      }
    }
  });
};

const checkUser = () => {
  const isLogin = ManagerUser.checkLogin();
  if (isLogin) {
    const user = ManagerUser.getUser();
    console.log("user", user);
    const navigation = document.querySelector(".menu-right");
    navigation.insertAdjacentHTML(
      "beforeend",
      `<li class="nav-item">
      <a class="nav-link" href="#">Logout</a>
      </li>`
    );
    // View Login
  } else {
    // View Gest
  }
};
checkUser();

const logout = () => {
  const el = document.getElementById("btn-logout");
  console.log("el", el);
  if (el) {
    el.addEventListener("click", () => {
      ManagerUser.logout();
      rootHtml.innerHTML = router("/login");
      window.history.pushState({}, null, `/login`);
      el.remove();
    });
  }
};
logout();

const handleRegister = () => {};
