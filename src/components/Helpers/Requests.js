import axios from 'axios';

export function genericReq(url, config, data, succesfulCallBack, errorCallback) {

}
export function getBooksReq() {
    let promise = axios.get("http://localhost:58482//getBooks");
    return promise;
}

export function addBookReq(data) {
    let promise = axios.post("http://localhost:58482//addBook", data)
    return promise;
}

export function deleteBookReq(BookId) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    let promise = axios.post("http://localhost:58482//deleteBook", BookId, config);
    return promise;
}

export function updateBookReq(data) {
    let promise = axios.put("http://localhost:58482//updateBook", data);
    return promise
}

export function getCopiesReq(bookId) {
    let promise = axios.get("http://localhost:58482//getCopies//" + bookId);
    return promise
}

export function addCopyReq(data) {
    let promise = axios.post("http://localhost:58482//addCopy", data);
    return promise
}

export function deleteCopyReq(copyId) {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    let promise = axios.post("http://localhost:58482//deleteCopy", copyId, config);
    return promise
}