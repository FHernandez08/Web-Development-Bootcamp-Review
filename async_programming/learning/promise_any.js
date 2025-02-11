// Promise.any() will return the callback of the first promise that fulfills

const SlowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done slowly");
  }); //resolves after 500ms
  
  const QuicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quickly");
  }); //resolves after 100ms
  
  const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected"); //always rejected
  });
  
  Promise.any([SlowlyDone, QuicklyDone, Rejection])
    .then((value) => {
      console.log(value);
      //  QuicklyDone fulfils first
    })
    .catch((err) => {
      console.log(err);
    });