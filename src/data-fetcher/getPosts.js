import globals from '../globalVar'
const postsGets = {
    categories: () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return fetch(`${globals.urlAPI}/wp-json/wp/v2/categories?per_page=100`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));

    },
    posts: async page => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        let totalPages
        let response = await fetch(`${globals.urlAPI}/wp-json/wp/v2/posts?page=${page}&per_page=6`, requestOptions)
            .then(response => {
                totalPages = response.headers.get('X-WP-TotalPages')
                return response.text()})
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
        
        
        return {response,totalPages}
    },
    posts4: async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return await fetch(`${globals.urlAPI}/wp-json/wp/v2/posts?page=1&per_page=4`, requestOptions)
            .then(response => {
                return response.text()})
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
    },
    posts2: async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        return await fetch(`${globals.urlAPI}/wp-json/wp/v2/posts?page=1&per_page=2`, requestOptions)
            .then(response => {
                return response.text()})
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));
    },
    post: postId => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        return fetch(`${globals.urlAPI}/wp-json/wp/v2/posts/${postId}`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));

    },
    categori: catId => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        return fetch(`${globals.urlAPI}/wp-json/wp/v2/categories/${catId}`, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));

    },
    postsByCat: async (cat, page)=>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };


        let totalPages
        let response = await fetch(`${globals.urlAPI}/wp-json/wp/v2/posts?categories=${cat}&page=${page}&per_page=6`, requestOptions)
            .then(response => {
                totalPages = response.headers.get('X-WP-TotalPages')
                return response.text()})
            .then(result => JSON.parse(result))
            .catch(error => console.log('error', error));

        
        return {response,totalPages}
    }
    
}

export default postsGets
