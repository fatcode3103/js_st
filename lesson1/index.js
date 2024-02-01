const promise = new Promise((resolve, reject) => {
    resolve("get data success !!!");
});

promise.then((data) => console.log("data", data));
