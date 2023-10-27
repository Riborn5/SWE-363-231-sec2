async function logging(){
    const wepaon = await fetch("https://api.genshin.dev/weapons")
    json= await wepaon.json()
    
    console.log(json)
}
logging()
