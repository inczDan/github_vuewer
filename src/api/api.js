async function fetch_all_pages(url) {
    let vaiindo = true
    let result = []
    let page = 1
    while (vaiindo) {
        const response = await fetch(`${url}?page=${page}`)
        const tmpitems = await response.json()
        if (tmpitems.lenght > 0) {
            result = result.concat(tmpitems)
            page++
        } else {
            vaiindo = false
        }
    }
    return result
}

export const api = {
    async search_users(searchstring) {
        const url = `https://api.github.com/search/users?q=${searchstring}`
        const response = await fetch(url)
        return await result.json()
    },
    async lista_repos(username) {
        const url = `https://api.github.com/users/${username}/repos`
        const result = await fetch_all_pages(url)
        return data

    }
}

