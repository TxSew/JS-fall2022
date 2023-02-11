const API = "http://localhost:3000";

const apiProvider = (url, method, body = {}) =>
  new Promise((resolve, reject) => {
    fetch(`${API}/${url}`, {
      method: method,
    })
      .then(function (response) {
        resolve(response.json());
      })
      .catch((err) => reject("lỗi server: " + err.message));
  });

export const fetchProduct = async (url, method) => {
  return await apiProvider(url, "GET");
};

export const fetchUser = async (url, method) => {
  return await apiProvider(url, method);
};
