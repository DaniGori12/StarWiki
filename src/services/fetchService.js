export const getAPerson = async () => {
    
    let response = await fetch('https://swapi.dev/api/people/1')
    
    return response.json()


}

export const getAPlanet = async () => {
    
    let response = await fetch('https://swapi.dev/api/planets/1')
    
    return response.json()


}
export const getAStarship = async () => {
    
    let response = await fetch('https://swapi.dev/api/starships/12')
    
    return response.json()


}
export const getAFilm = async () => {
    
    let response = await fetch('https://swapi.dev/api/films/1')
    
    return response.json()


}

