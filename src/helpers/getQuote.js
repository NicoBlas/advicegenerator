const getQuote = async () =>{
    let userId = Math.floor(Math.random()*190)
    console.log(userId)
    const url = "https://api.adviceslip.com/advice/"+userId
    console.log(url)
    const response =  await fetch(url)
    const quote = await response.json()

    return quote
}


export default getQuote