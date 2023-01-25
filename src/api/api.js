async function fetch_all_pages(url) {
    let temresult = true
    let result = []
    let page = 1
    while (temresult) {
        const response = await fetch(`${url}?page=${page}`)
        const tmpitems = await response.json()
        if (tmpitems.length > 0) {
            result = result.concat(tmpitems)
            page++
        } else {
            temresult = false
        }
    }
    return result
}


export const api = {
    async search_users(searchstring) {
        const url = `https://api.github.com/search/users?q=${searchstring}`
        const response = await fetch(url)
        return await response.json()
    },
    async lista_repos(username) {
        const url = `https://api.github.com/users/${username}/repos`
        const data = await fetch_all_pages(url)
        return data
    },
    async repos(username) {
        const url = `https://api.github.com/users/${username}`;
        const response = await fetch_all_pages(url);
        return await response.json;
    },
    async listaIssues(owner, name, page) {
        const url = `https://api.github.com/repos/${owner}/${name}/issues?pages=${page}`
        const response = await fetch(url)
        return await response.json()
    },
    async arquivos(owner, name) {
        const url = `https://api.github.com/repos/${owner}/${name}/contents/`;
        const response = await fetch(url)
        return await response.json()
    },
    async paths(owner, name, path) {
        const url = `https://api.github.com/repos/${owner}/${name}/contents/${path}`;
        const response = await fetch(url);
        return await response.json();
    },
}

