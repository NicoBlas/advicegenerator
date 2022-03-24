const getQuote = async () =>{
    const url = "https://api.adviceslip.com/advice"
    const response =  await fetch(url)
    const quote = await response.json()

    return quote
}


export default getQuote