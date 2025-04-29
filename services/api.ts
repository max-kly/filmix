export const tmdb = {
    baseURL: 'https://api.themoviedb.org/3',
    apiKey: process.env.EXPO_PUBLIC_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
    }
}
export const fetchFilms = async ({ query }: { query: string | null }) => {
    const endpoint = query
        ? `${tmdb.baseURL}/search/movie?query=${encodeURIComponent(query)}`
        : `${tmdb.baseURL}/movie/popular?sort_by=popularity.desc`
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: tmdb.headers
    })
    if (!response.ok) {
        throw new Error(`Failed to fetch films: ${response.statusText}`)
    }
    const data = await response.json()
    return data.results
}