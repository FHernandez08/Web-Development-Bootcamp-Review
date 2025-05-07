// can specify errors in 5 different ways

// 1. Specific error messages
axios.get('/user/test').catch(function (error) {
    if (error.response) {
     // The request was made and the server responded with a status code that falls out of the range of 2xx
     console.log(error.response.data);
     console.log(error.response.status);
     console.log(error.response.headers);
     if (error.response.status === 500){
       //Custom Error Handler
       handlehttp500();
     }
     else if (error.response.status === 404){
       //Custom Error Handler
       handlehttp404();
     }
     else {
       handlehttpgenericerror();
     }
    }
   });

// 2. Custom error classes
class ResourceNotFoundError extends Error {
    constructor(code, message) {
      super(message);
      this.code = code;
      this.name = "ResourceNotFoundError";
    }
  }
  
  const doSomething = () => {
    try {
      throw new ResourceNotFoundError(404, "Resource not found");
    } catch (err) {
      if (err instanceof ResourceNotFoundError) {
        // error instance of ResourceNotFoundError
        console.log(err.code);
        console.log(err.message);
        return;
      }
      console.log(err);
    }
  };
  
  doSomething();

// 3. Middleware (outside source)

// 4. Promise-based error handling
const fetchUsersPromise = async () => {
    // random urlconst URL = '';
    try {   
      const resp = await fetch(URL);
      const parsedResp = await resp.json();
    } catch (err) {
        console.log(err)
    }
}

// 5. Centralized location for logs and error aborting