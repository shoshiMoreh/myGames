function wiin()
{
    let d1 =document.getElementsByTagName('body')[0].style.backgroundImage=`url(${'./images/זיקוקים.jpg'})`
    let s=document.getElementsByTagName('section')[0]
    for(let i=0;i<3;i++)
    {
        let d=document.createElement('div')
        // d.style.direction="rtl"
        d.style.width="400px"
        d.style.margin="10px auto"
        d.style.backgroundColor="rgba(37, 16, 67, 0.523)"
        d.style.height='80px' //
        d.style.padding='10px'
        d.style.border='1px solid white'
        d.style.borderRadius='10px'
        s.appendChild(d)
    }
    let use=localStorage.getItem('users')
    let u=JSON.parse(use)
    let nn=["ראשון","שני","שלישי"]
    for(let i=0;i<3;i++)
    {
        let min=8
        let nMin=""
        let jmin=0
        for(let j=0;j<u.length;j++)
        {
            if(min>parseInt(u[j]['scoreBul']))
            {
                min=u[j]['scoreBul']
                nMin=u[j]['name']
                jmin=j
            }
        }
        u[jmin]['scoreBul']=8
        d=document.getElementsByTagName('div')[i]
        let h11=document.createElement('h2')
        h11.style.color='white'
        h11.style.textAlign='center'
        h11.innerHTML='~ מקום '+nn[i]+' ~'
        h11.style.marginTop='5px'
        h11.style.marginBottom='5px'    
        d.appendChild(h11)
        if(nMin)
        {
            let s1 = document.createElement('p')
            let s2 = document.createElement('p')
            s1.innerHTML=nMin
            s2.innerHTML=min
            s1.style.textAlign="center"
            s2.style.textAlign="center"
            s1.style.color='white'
            s2.style.color='white'
            s1.style.margin="3px" //
            s2.style.margin="3px" //
            d.appendChild(s1)
            d.appendChild(s2)
        }
        

    }
    let b1= document.createElement('button')
    let b2= document.createElement('button')
    b1.innerHTML="משחק חדש"
    b2.innerHTML="בחירת משחק"
    b1.style.backgroundColor="#ffffff73"
    b2.style.backgroundColor="#ffffff73"
    b1.style.width="130px"
    b2.style.width="130px"
    b1.style.margin='10px'
    b2.style.margin='10px'
    b1.style.height='30px'
    b2.style.height='30px'
    b1.addEventListener('click',moveGame)
    b2.addEventListener('click',moveSelect)
    b1.style.borderRadius="5px"
    b2.style.borderRadius="5px"
    s.textAlign="center"
    let divB=document.getElementsByTagName('div')[4]
    divB.style.width='300px'
    divB.style.margin='auto'
    divB.appendChild(b1)
    divB.appendChild(b2)
}
function moveGame()
{
    window.location='./game1.html'
}
function moveSelect()
{
    window.location='./select.html'
}
if(!sessionStorage.getItem('name'))
{    
    window.location="index.html"
}