let day = new Date().getDay() //return current date
let hours = new Date().getHours() //return current Hours

console.log(hours) 



function verif1 (req,res,next){
    if(  day>0 && day<6 && hours>8 && hours<18  )next()
    else(res.send(`<h1>Welcome servise colsed now... , service open 8h-->17h / monday-->friday<h1/>`))
}

module.exports = verif1 ;