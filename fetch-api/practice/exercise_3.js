// Implement a retry mechanism for failed requests

async function fetchWithRetry(url, retries) {
    try {
        let response = await fetch(url);

        if (!response.ok) {
            if (response.status === 401) {
                throw new Error("You have unauthorized access to this API!");
            }
            else if (response.status === 403) {
                throw new Error("You don't have permission to access this portion of the API.")
            }
            else if (response.status === 404) {
                handleHTTP404();
                throw new Error("Resource not found.")
            }
            else if (response.status === 500) {
                handleHTTP500();
                throw new Error("Internal server error.")
            }
            else {
                throw new Error(`HTTP Error: ${response.status}`)
            }
        }

        return await response.json();
    }
    catch (error) {
        console.log(`Attempt failed: ${error.message}`);

        if (retries > 0) {
            console.log(`Retrying... (${retries} retries left)`);

            await new Promise(resolve => setTimeout(resolve, 1000));

            return fetchWithRetry(url, retries - 1);
        }
        else {
            throw new Error("All retries failed. " + error.message);
        }
    }
}