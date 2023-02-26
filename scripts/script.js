import ManagerProduct from "./mangerProduct.js";
import ManagerUser from "./mangerUser.js";
import { debounce } from "./helper/helper";
import { router } from "./views/router.js";
import CardManger from "./mangerCard.js";
import ManagerCheckout from "./managerCheckout.js";
import ManagerCategory from "./managerCategory.js";

const category = document.getElementById("categories");
const fetchDada = async () => {
  console.log(ManagerProduct.products);
  const data = await ManagerProduct.getAll();
  printHtml(ManagerProduct.products);
  category.addEventListener("click", (e) => {
    const id = e.target.value;
    console.log(id);
    const dataSOrt = ManagerProduct.products.filter((e) => {
      return e.categories == id;
    });
    printHtml(dataSOrt);
  });
};
fetchDada();

// const totalPage = Math.ceil(ManagerProduct.products.length /perPage)
let currentPage = 1;
let start = 0;
let perPage = 8;
let end = perPage;
// console.log(totalPage)
const printHtml = (data) => {
  const elPost = document.getElementById("items");
  const View = data.map((item, index) => {
    if (index >= start && index < end) {
      return `
       <div id="item" class="col-lg-3 col-md-12 mt-3" >
       <div class="card shadow-sm" >
         <img style="height:250px; width:200px; " class="thumbnail" src="${item.thumbnail}" alt="Error Image"/>
         <div class="card-body">
         <h5   style="font-weight:bold flex-shrink:0">
         <a data-id="${item.id}" class="items_box" style="color:black; text-decoration:none" href="#">${item.title} <a/> 
          <span style="display:block; color:red; margin-top:10px;font-size:15px">Price: ${item.price}$ </span>
         </h5>
           <div class="d-flex justify-content-between align-items-center btnCrud">
             <div class="btn-group">
             </div>
             <small class="text-muted">
             <button data-id="${item.id}" class="btnCard" style="background:green; padding:3px 10px; border-radius:2px"> Mua </button>
             </small>
           </div>
         </div>
       </div>
     </div>
       `;
    }
  });
  elPost.innerHTML = View.join("");
  document.querySelectorAll(".items_box").forEach((e) =>
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      console.log("id", id);
      console.log("ManagerProduct", ManagerProduct.products);

      const detail = ManagerProduct.products.filter(
        (product) => product.id === Number(id)
      );
      console.log("detail", detail);
      rootHtml.innerHTML = router("/detail", detail[0]);
      handleAddCard();
      backHomeDetail();
    })
  );
  handleAddCard();
};

// quay laji trang chu tu trang chi tiet san pham
const backHomeDetail = () => {
  document.querySelector(".backHome").addEventListener("click", () => {
    window.location.reload();
  });
};
// fetch NextBtn Page js
const NextBtn = () => {
  document.querySelector(".nextBtn").addEventListener("click", () => {
    currentPage++;

    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    fetchDada();
  });
};
NextBtn();
const prevBtn = () => {
  document.querySelector(".prevBtn").addEventListener("click", () => {
    currentPage--;
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
    fetchDada();
  });
};
prevBtn();
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
// Search model function
const printModalSearchHtml = (data) => {
  const elPost = document.querySelector(".search_modal");
  console.log(elPost);
  let html = "";
  let i = 0;
  for (const item of data) {
    if (i > 3) {
      break;
    }
    html += `
    <div class="row" style="border-radius:10px">
        <div class="col-md-3" style="border-radius:10px">
          <img style="height:100px;width:100px" class="img-thumbnail" src="${item.thumbnail}" />
        </div>
        <div class="col-md-8">
        <a data-id=${item.id} class="item_href" href="#"/>
        <p class="price_search">dd${item.description}</p>
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
        (product) => product.id === Number(id)
      );
      rootHtml.innerHTML = router("/detail", detail[0]);
      window.history.pushState({}, null, `/detail/${detail[0].id}`);
    })
  );
};
// handel  Delete
const handleDelete = (callback) => {
  document.querySelectorAll(".btn-delete").forEach((e) =>
    e.addEventListener("click", (id) => {
      const i = e.getAttribute("data-id");
      if (confirm("are you sure delete") == true) {
        const productDeleted = ManagerProduct.products.filter(
          (product) => product.id !== Number(id)
        );
        console.log(productDeleted);
        var options = {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch("http://localhost:3000/products" + "/" + i, options);
        document.querySelector("body").innerHTML = router(
          "/adminProduct",
          ManagerProduct.products
        );
        window.history
          .pushState({}, null, "/adminProduct")
          .then((res) => {
            res.json();
          })
          .then(function () {
            printHtml(productDeleted);
          });
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
  let errors = [];
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
      if (isLogin) {
        document.querySelector("#btn-login").classList.add("hidden");
        document.querySelector("#btn-register").classList.add("hidden");
        const navigation = document.querySelector(".navbar-nav");
        navigation.insertAdjacentHTML(
          "beforeend",
          `<li class="nav-item">
        <a id="btn-admin" class="nav-link" href="#">admin</a>
        <a id="btn-logout" class="nav-link" href="#">Logout</a>
        </li>`
        );
        window.location.reload();
      }
    }
  });
};

const checkUser = () => {
  const isLogin = ManagerUser.checkLogin();
  if (isLogin) {
    const user = ManagerUser.getUser();
    console.log("user", user);
    const UserName = JSON.parse(localStorage.getItem("user"));
    if (user.role == "admin") {
      document.querySelector("#btn-login").classList.add("hidden");
      document.querySelector("#btn-register").classList.add("hidden");
      const navigation = document.querySelector(".menu-right");
      navigation.insertAdjacentHTML(
        "beforeend",
        `<ul class="admin-box">
        ${UserName.name}
          <li class="nav-link admin_model">
          <a href="nav-link" class="adminDashboard">Quản trị viên</a>
          <a href="nav-link " class="historyOrder">Lịch sử mua hàng</a>
          <a class="nav-link nav_logout" href="#">Đăng xuất</a>
          </li>
        </ul>`
      );
    }
    if (user.role == "user") {
      document.querySelector("#btn-login").classList.add("hidden");
      document.querySelector("#btn-register").classList.add("hidden");
      const navigation = document.querySelector(".menu-right");
      navigation.insertAdjacentHTML(
        "beforeend",
        `<ul class="admin-box">
 ${UserName.name}
          <li class="nav-link admin_model">
          <p  class="historyOrder">Lịch sử mua hàng</p>
          <a class="nav-link nav_logout" href="#">Đăng xuất</a>
          </li>
        </ul>`
      );
    }
    const HistoryOrder = document.querySelector(".historyOrder");
    if (HistoryOrder) {
      HistoryOrder.addEventListener("click", (e) => {
        console.log(2222);
        e.preventDefault();
        const idUser = JSON.parse(localStorage.getItem("user"));
        console.log(idUser.id);
        const dataUser = ManagerCheckout.checkout.filter((e) => {
          return e.UserId === idUser.id;
        });
        console.log("dataUser", dataUser);
        rootHtml.innerHTML = router("/adminHistory", dataUser);
      });
    }
    // View Login
  } else {
    // View Gest
  }
};

checkUser(navigation);

const logout = () => {
  const el = document.querySelector(".nav_logout");
  console.log("el", el);
  if (el) {
    el.addEventListener("click", () => {
      document.querySelector("#btn-login").classList.remove("hidden");
      document.querySelector("#btn-register").classList.remove("hidden");

      ManagerUser.logout();
      rootHtml.innerHTML = router("/login");
      window.history.pushState({}, null, `/login`);
      window.location.reload();
      el.remove();
    });
  }
};

logout();
// xu ly view admin
// back PageHome

// sử lý đăng ký
const xuLyRegister = () => {
  const elUsername = document.getElementById("username");
  const elPassword = document.getElementById("password");
  const elEmail = document.getElementById("email");
  const elName = document.getElementById("Name");
  const elButtonLogin = document.getElementById("btn-register-submit");
  const elErros = document.getElementById("errors");
  const errors = [];
  elButtonLogin.addEventListener("click", async (event) => {
    event.preventDefault();
    if (elUsername.value.trim() === "") {
      errors.push("user not empty");
    }
    if (elPassword.value.trim() === "" && elPassword.value.length < 3) {
      errors.push("password not empty");
    }
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(elEmail.value.trim())) {
      errors.push("email not emty");
    }
    if (errors.length > 0) {
      // show error message
      elErros.innerHTML = errors.join("</br>");
      return;
    } else {
      // dang nhap thanh cong
      const isRegister = await ManagerUser.register(
        elUsername.value,
        elPassword.value,
        elEmail.value
      );
      console.log("isRegister", isRegister);
      if (!isRegister) {
        // lưu vào db -> chuyển về trang đăng nhập
        var options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: elUsername.value,
            password: elPassword.value,
            email: elEmail.value,
            name: elName.value,
            role: "user",
          }),
        };
        fetch("http://localhost:3000/users", options);
        rootHtml.innerHTML = router("/login");
      } else {
        elErros.innerHTML = "user đã tồn tại";
      }
    }
  });
};

//xu ly creqate post
function xulyCreatePost() {
  const Title = document.querySelector("#username");
  const thumbnail = document.querySelector("#password");
  const description = document.querySelector("#description");
  const price = document.querySelector("#price");
  const categories = document.querySelector("#categories");
  const btnSubmit = document.querySelector("#btn-login-submit");
  const elErros = document.querySelector("#errors");
  const errors = [];
  btnSubmit.addEventListener("click", async (event) => {
    event.preventDefault();
    if (Title.value.trim() === "") {
      errors.push("Vui lòng nhập thông tin tiêu đề");
    }
    if (thumbnail.value.trim() === "") {
      errors.push("Vui lòng nhập thông tin hình ảnh");
    }
    if (description.value.trim() === "") {
      errors.push("Vui lòng nhập thông tin nội dung ");
    }

    if (price.value.trim() === "") {
      errors.push("Vui lòng nhập giá sản phẩm ! ");
    }
    if (errors.length > 0) {
      // show error message
      elErros.innerHTML = errors.join("</br>");
      return;
    } else {
      // dang nhap thanh cong
      const isRegister = await ManagerProduct.create(
        Title.value,
        thumbnail.value,
        description.value,
        price.value,
        categories.value
      );
      console.log("isRegister", isRegister);
      document.querySelector("body").innerHTML = router(
        "/adminProduct",
        ManagerProduct.products
      );
      handleUpdate();
      handleDelete();
      window.history.pushState({}, null, "/adminProduct");
      if (!isRegister) {
        // lưu vào db -> chuyển về trang đăng nhập
        var options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: new Date().getTime(),
            title: Title.value,
            thumbnail: thumbnail.value,
            description: description.value,
            price: price.value,
            categories: categories.value,
          }),
        };
        fetch("http://localhost:3000/products", options);
      } else {
        elErros.innerHTML = "thông tin sản phẩm đã tồn tại !";
      }
    }
  });
}

function handleUpdate() {
  document.querySelectorAll(".btn_updateCOde").forEach((e) => {
    const id = e.getAttribute("data-id");
    e.addEventListener("click", () => {
      const ProductEdit = ManagerProduct.products.filter((product) => {
        return product.id === Number(id);
      });
      document.querySelector("body").innerHTML = router(
        "/updatePost",
        ProductEdit[0]
      );
      window.history.pushState({}, null, `/updatePost/${ProductEdit[0].id}`);
      console.log(ProductEdit);
      const submitEdit = document.getElementById("btn-login-submit");
      submitEdit.addEventListener("click", () => {
        const des = document.getElementById("description");
        const pass = document.getElementById("password");
        const user = document.getElementById("username");
        const price = document.getElementById("price");
        const categories = document.getElementById("categories");
        var formdata = {
          title: user.value,
          description: des.value,
          thumbnail: pass.value,
          price: price.value,
          categories: categories.value,
        };
        const options = {
          method: "PUT",
          body: JSON.stringify(formdata),
          headers: {
            "Content-Type": "application/json",
          },
        };
        fetch("http://localhost:3000/products" + "/" + id, options).then(
          (res) => {
            res.json();

            document.querySelector("body").innerHTML = router(
              "/adminProduct",
              ManagerProduct.products
            );
            window.history.pushState({}, null, "/adminProduct");
          }
        );
      });
    });
  });
}
//   add Card

const handleAddCard = () => {
  document.querySelectorAll(".btnCard").forEach((e) => {
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      console.log(ManagerProduct.products);
      const addProduct = ManagerProduct.products.filter(
        (card) => card.id === Number(id)
      );
      console.log(addProduct);
      cardData.add({ ...addProduct[0], quantity: 1 });
      console.log("addProduct", cardData.carts);
    });
  });
};
// router View card
const cardData = new CardManger();
document.querySelector("#btn-card").addEventListener("click", () => {
  rootHtml.innerHTML = router("/card", cardData);
  window.history.pushState({}, null, `/card`);
  deleteCard();
  checkout();
});

const deleteCard = () => {
  const del = document.querySelectorAll(".delete_card");
  del.forEach((e) => {
    e.addEventListener("click", () => {
      const id = e.getAttribute("data-id");
      console.log(cardData.carts);
      const dels = cardData.remove(id);
      console.log(dels);
      //render card
      rootHtml.innerHTML = router("/card", cardData);
      window.history.pushState({}, null, "/card");
    });
  });
};
function checkout() {
  document
    .querySelector(".checkout-btn")
    .addEventListener("click", function (e) {
      console.log(cardData.carts);
      rootHtml.innerHTML = router("/checkout", cardData);
      handleCheckout();
    });
}
function handleCheckout() {
  const checkout = document.querySelector(".btn-buy");
  const TypeName = document.getElementById("typeName");
  const TypeNumber = document.getElementById("typeText");
  const TypeExt = document.getElementById("typeExp");
  checkout.addEventListener("click", (e) => {
    const userId = JSON.parse(localStorage.getItem("user"));
    let id = 0;
    if (userId) {
      id = userId.id;
    } else {
      id = 0;
    }
    console.log("userid", userId);
    e.preventDefault();
    const formData = {
      Number: TypeNumber.value,
      NameCard: TypeName.value,
      DateBuy: TypeExt.value,
      products: cardData.carts,
      TimeOrder: new Date(),
      code: new Date().getTime(),
      UserId: id,
      status: "chờ xác nhận",
    };
    console.log(TypeNumber.value);
    console.log(TypeName.value);
    console.log(TypeExt.value);
    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3000/checkout", options)
      .then((res) => {
        res.json();
        window.location.reload();
      })
      .catch((err) => {
        alert("vui long dang nhap mua san pham");
      });
  });
}

// checking
const fetchCheckout = async () => {
  const data = ManagerCheckout.getcheckout();
  console.log(ManagerCheckout.checkout);
};
fetchCheckout();
const btnTracking = document.querySelector("#btn-tracking");
btnTracking.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(ManagerCheckout.getcheckout());
  const dataCheckout = ManagerCheckout.checkout;
  rootHtml.innerHTML = router("/tracking", dataCheckout);
  const CodeSearch = document.querySelector("#code-search");
  document.querySelector("#checkout_btn").addEventListener("click", () => {
    console.log(CodeSearch.value);
    if (CodeSearch) {
      const checking = dataCheckout.filter(
        (data) => data.code === Number(CodeSearch.value)
      );
      console.log(checking);
      const item = checking.map((e) => {
        const viewProduct = e.products.map((e) => {
          return `
          <div>  
          
          <li> Tiêu đề :${e.title} </li>
          <li> Thumbnail :
          <img style="width:100px;height:100px" src="${e.thumbnail}" >
          </li>
          <li> Nội dung :${e.description} </li>
          <li> Gia :${e.price} </li>
          </div>     
          `;
        });
        return `
        <div> 
        <h2> ket qua tìm kiếm </h2> 
        <ul>
        <h4> Thông tin người dùng </h4>
        <li> Number :${e.Number} </li>
        <li> NameCard :${e.NameCard} </li>
        <li> Thời gian Mua:${e.TimeOrder} </li>
 <li> Trạng thái :${e.status} </li>
 
 </ul>
 <ul>
 
 <h4> Thông tin sản phẩm </h4>
 <div style="display:flex ; gap :30px; list-style:none">
 
 ${viewProduct.join("")}
  </div> 
 </ul>
 </div> 
 `;
      });
      const nav = document.querySelector(".TrackingView");
      nav.insertAdjacentHTML("beforeend", item.join(""));
    }
  });
});

// render Categories
async function Categories() {
  await ManagerCategory.getAll();
  const category = ManagerCategory.category;
  console.log(category);
  const html = category.map((e) => {
    return `
    
    <option value="${e.name}">${e.name}</option>
    `;
  });
  document.querySelector("#categories").innerHTML = html.join("");
  const iphone = document.querySelector(".categories_item");
  iphone.addEventListener("click", () => {
    const dataSOrt = ManagerProduct.products.filter(
      (e) => e.categories == "iphone"
    );
    printHtml(dataSOrt);
  });
  const samsung = document.querySelector(".categories_items");
  samsung.addEventListener("click", () => {
    const dataSOrts = ManagerProduct.products.filter(
      (e) => e.categories == "samsung"
    );
    printHtml(dataSOrts);
  });
  const nokia = document.querySelector(".categories_nokia");
  nokia.addEventListener("click", () => {
    const dataSOrtss = ManagerProduct.products.filter(
      (e) => e.categories == "nokia"
    );
    printHtml(dataSOrtss);
  });
}
Categories();
// view Render admin dashboard
const fetchDashBoard = () => {
  const admin = document.querySelector(".adminDashboard");
  if (admin) {
    admin.addEventListener("click", (e) => {
      console.log("111");
      e.preventDefault();
      document.querySelector("body").innerHTML = router(
        "/dashboard",
        ManagerProduct.products,
        ManagerCategory.category,
        ManagerCheckout.checkout
      );
      window.history.pushState({}, null, "/dashboard");
      fetchProductAdmin();
      fetchOrderAdmin();
    });
  }
};
fetchDashBoard();
//render OrderAdmin
const fetchOrderAdmin = () => {
  document.querySelector(".adminOrder").addEventListener("click", (e) => {
    e.preventDefault();
    const dataCheckout = ManagerCheckout.checkout
    document.querySelector("body").innerHTML = router(
      "/adminOrder",
      dataCheckout
    );
    window.history.pushState({}, null, "/adminOrder");
    handleAdminOrder();
  });
};
//xyly AdminOrder
const handleAdminOrder = () => {
  const success = document.querySelectorAll(".success_order");
  const pending = document.querySelectorAll(".pending_order");
  const cancel = document.querySelectorAll(".cancel_order");
pending.forEach((e) => {
    const id = e.getAttribute("data-id");
    e.addEventListener("click", () => {
      const dataOrder = ManagerCheckout.checkout.filter((e) => {
        return e.id == id;
      });
       console.log(dataOrder)
      const options = {
        method: "PUT",
        body: JSON.stringify({
           id: dataOrder[0].id,
          status:"đang giao",
          Number :dataOrder[0].Number,
          TimeOrder :dataOrder[0].TimeOrder,
          NameCard :dataOrder[0].NameCard,
          DateBuy :dataOrder[0].DateBuy,
          UserId :dataOrder[0].UserId,
          products :dataOrder[0].products,
          code :dataOrder[0].code,



        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("http://localhost:3000/checkout" + "/" + id , options)
      .then((res) =>{
        res.json()

      })
      //xu ly
    });
  });
  success.forEach((e) => {
    const id = e.getAttribute("data-id");
    e.addEventListener("click", () => {
      const dataOrder = ManagerCheckout.checkout.filter((e) => {
        return e.id == id;
      });
       console.log(dataOrder)
      const options = {
        method: "PUT",
        body: JSON.stringify({
           id: dataOrder[0].id,
          status:"đã nhận hàng",
          Number :dataOrder[0].Number,
          TimeOrder :dataOrder[0].TimeOrder,
          NameCard :dataOrder[0].NameCard,
          DateBuy :dataOrder[0].DateBuy,
          UserId :dataOrder[0].UserId,
          products :dataOrder[0].products,
          code :dataOrder[0].code,



        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("http://localhost:3000/checkout" + "/" + id , options)
      .then((res) =>{
        res.json()
     window.location.reload()
 
      })
      //xu ly
    });
  });
cancel.forEach((e) => {
    const id = e.getAttribute("data-id");
    e.addEventListener("click", () => {
      const dataOrder = ManagerCheckout.checkout.filter((e) => {
        return e.id == id;
      });
       console.log(dataOrder)
      const options = {
        method: "PUT",
        body: JSON.stringify({
           id: dataOrder[0].id,
          status:"bị hủy",
          Number :dataOrder[0].Number,
          TimeOrder :dataOrder[0].TimeOrder,
          NameCard :dataOrder[0].NameCard,
          DateBuy :dataOrder[0].DateBuy,
          UserId :dataOrder[0].UserId,
          products :dataOrder[0].products,
          code :dataOrder[0].code,



        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
      fetch("http://localhost:3000/checkout" + "/" + id , options)
      .then((res) =>{
        res.json()
      })
      //xu ly
    });
  });
};
//render productAdmin
const fetchProductAdmin = () => {
  document.querySelector(".productAdmin").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").innerHTML = router(
      "/adminProduct",
      ManagerProduct.products
    );
    window.history.pushState({}, null, "/adminProduct");
    document.querySelector(".backAdmin").addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector("body").innerHTML = router(
        "/dashboard",
        ManagerProduct.products,
        ManagerCategory.category,
        ManagerCheckout.checkout
      );
      window.history.pushState({}, null, "/dashboard");
    });
    handleUpdate();
    handleDelete();
    const btnCreate = document.querySelector(".create_btn");
    if (btnCreate) {
      btnCreate.addEventListener("click", () => {
        document.querySelector("body").innerHTML = router(
          "/createPost",
          ManagerCategory.category
        );
        window.history.pushState({}, null, `/createPost`);
        xulyCreatePost();
      });
    }
  });
};
