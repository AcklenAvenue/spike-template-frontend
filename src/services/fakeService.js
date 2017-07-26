import 'whatwg-fetch';

const baseUrl = 'https://jsonplaceholder.typicode.com'
const getPosts = (postId) => {
    return fetch(`${baseUrl}/posts/${postId}`, {
		method: 'GET',
		headers: {
			Accept: 'application/json'
		}
	});
}

export default {
	getPosts
}