export default {
  getPharms: () => {
    return fetch("/user/pharms").then((response) => {
      if (response.status != 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
  postPharm: (pharm) => {
    return fetch("/user/pharm", {
      method: "post",
      body: JSON.stringify(pharm),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status != 401) {
        return response.json().then((data) => data);
      } else return { message: { msgBody: "UnAuthorized" }, msgError: true };
    });
  },
};
