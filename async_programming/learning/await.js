const { reject } = require("async");

async function func() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000)
    });

    let result = await promise;

    alert(result);
}

f();