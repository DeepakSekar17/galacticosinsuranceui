function handleErrors(response) {
    if(!response.ok) {
        console.log('Error: ', response);
        throw response;
        //throw Error(response.responseJSON ? response.responseJSON.errorMessage : 'An unknown error has occured');
    } else if (response.errorFlag) {
        console.log('Error flag');
        throw response;
    }
    return response;
}

export function get(url, headers = {}) {
    return fetch(url, {
    	mode: 'cors',
        credentials: 'include',
        cache: 'no-cache',
        headers: headers
        })
        .then(handleErrors)
        .then(response => response.json())
        .then(response => {
            if(response.errorFlag) {
                throw response;
            }
            return response;
        })
        .catch(error => {
            if(error.status === 400){
                error.json().then(error => {
                    const errorMsg = error.errorFlag ? error.errorMessage : ' An unknown error has occured'; 
                    alert(errorMsg);
                })
            } else {
                const errorMsg = error.errorFlag ? error.errorMessage : ' An unknown error has occured'; 
                alert(errorMsg);
            }
            throw error;
        })
}

export function post(url, payload, headers = {}) {
       return fetch(url,
             {
                credentials: 'include',
                method: 'POST',
                body: payload,
                mode: 'cors',
                cache: 'no-cache',
                headers: headers
             })
             .then(handleErrors)
             .then( res => res.json())
            .catch(error => {
                if(error.status === 400){
                    error.json().then(error => {
                        const errorMsg = error.errorFlag ? error.errorMessage : ' An unknown error has occured'; 
                        alert(errorMsg);
                        throw error;
                    })
                } else {
                    alert('An unknown error has occured')
                    throw error;
                }
            })
    }