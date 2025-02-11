async function checkCode() {
    try {
        const statement = "If you're seeing this, the code works!";
        console.log(statement);
    }
    catch (err) {
        console.error("The code is not loading up!", err)
    }
};