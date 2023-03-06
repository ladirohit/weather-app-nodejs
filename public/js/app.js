
console.log('Client side javascript file is loaded!')



const weatherForm=document.querySelector('form')
const search=document.getElementById('inp')
const m1=document.getElementById('m1')
const m2=document.getElementById('m2')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const url='/weather?address=\"'+search.value +'\"'
    m1.textContent='Loading..'
    m2.textContent=''
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
                m1.textContent=data.error
            }
            else{
                m1.textContent=data['address'].substr(1,(data['address'].length-2))
                m2.textContent='It is currently '+ data['foreCast']['temperature'] + ' degrees out. There is '+ data['foreCast']['precipitation'] + '% chance of rain.'
            }
        })
    })
    console.log('testing')
})