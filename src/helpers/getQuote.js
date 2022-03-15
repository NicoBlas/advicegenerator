const getQuote = async () =>{
    let userId = Math.floor(Math.random()*180+1)
    const url = "https://api.adviceslip.com/advice/"+userId
    const response =  await fetch(url)
    const quote = await response.json()

    return quote
}


export default getQuote