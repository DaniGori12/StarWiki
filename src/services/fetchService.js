export const getAPerson = async () => {
    
    let response = await fetch('https://swapi.dev/api/people/?results=5/')
    
    return response.json()


}

export const getAPlanet = async () => {
    
    let response = await fetch('https://swapi.dev/api/planets/?results=5/')
    
    return response.json()


}
export const getAStarship = async () => {
    
    let response = await fetch('https://swapi.dev/api/starships/?results=5/')
    
    return response.json()


}
export const getAFilm = async () => {
    
    let response = await fetch('https://swapi.dev/api/films/?results=5/')
    
    return response.json()


}

