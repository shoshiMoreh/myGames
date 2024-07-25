let a=[]
let arrColors=['rgb(181, 33, 88)','rgb(255, 96, 234)','rgb(245, 130, 33)','rgb(243, 249, 120)','rgb(83, 251, 255)','rgb(59, 115, 198)']
function start_game()
{
    let b=document.getElementsByTagName('body')[0]
    b.style.backgroundImage=sessionStorage.getItem('background')
    for( let i = 0; i<8;i++) //יצירת לוח משחק
    {
        for(let j=0; j<4;j++)
        {
            let d = document.createElement('div')
            d.style.width='50px'
            d.style.height='50px'
            d.style.margin='5px'
            d.style.border='2px solid white'  
            d.style.borderRadius='26px'
            let s = document.getElementsByTagName('section')[1]
            s.style.display='flex'
            s.style.flexWrap ='wrap'
            s.appendChild(d)
            s.style.height='auto'
            s.style.width='260px'
            // s.style.margin='auto'
        }
    }
    let pName=document.getElementsByTagName('p')[0] //שם לראש העמוד
    pName.innerHTML="שלום "
    pName.innerHTML+=sessionStorage.getItem('name')
    pName.style.color="white"
    for(let i =0 ;i<4;i++) //הגרלת צבעים למערך a
    { 
        let r= Math.round(Math.random()*5)
        for (let j =0 ;j<=i;j++)
        {
            while(a[j]==arrColors[r])
            {
                r= Math.round(Math.random()*5)
                if(j!=0)   //מכיוון שמגריל שוב צריך לבדוק גם לגבי ההגרלה הזו
                    j-=i   
            }
                
        }
        a[i]=arrColors[r]
        // console.log(a[i])
    }
    for(let j=0; j<6;j++) // 6 הצבעים לבחירה
    {
        let d1 = document.createElement('div')
        d1.style.width='50px'
        d1.style.height='50px'
        d1.style.margin='5px'
        d1.style.border='2px solid white'  
        d1.style.borderRadius='26px'
        d1.style.backgroundColor=arrColors[j]
        d1.addEventListener('click',put_color)
        let s = document.getElementsByTagName('section')[2]
        s.appendChild(d1)
        s.style.height='auto'
        s.style.width='73px'
       
    }
    for( let i = 0; i<8;i++) // יצירה של המשוב לשחקן
    {
        for(let j=0; j<4;j++)
        {
            let d = document.createElement('div')
            d.style.width='8px'
            d.style.height='8px'
            d.style.margin='2px'
            //  d.style.border='1px solid black'  
            d.style.borderRadius='5px'   //5
            let s = document.getElementsByTagName('section')[0]
            s.style.display='flex'
            s.style.flexWrap ='wrap'
            s.appendChild(d)
            s.style.height='auto'
            s.style.width='28px'
            // s.style.margin='auto'
        }
    }

}
let i=0
let guess=0
let s =document.getElementsByTagName('section')[1]
let s1 =document.getElementsByTagName('section')[0]
function put_color() // צובע את העיגול ההבא בתור ושולח לפונקציית בדיקה
{
    let d = s.getElementsByTagName('div')[i]
    d.style.backgroundColor=event.target.style.backgroundColor
    if(i!=0 && (i+1)%4==0)
    {
        guess++
        check(i) 
    }
    i++

}
function check(i)
{
 
    let countS=0//מונה כמה בול היו בשורה זו 
    for(let j=3; j>=0; j--)
    {
        // let pl=3
        let d=s.getElementsByTagName('div')[i-j]
        for(let k=0;k<4;k++)
        {
            // console.log(d.style.backgroundColor)
            if(d.style.backgroundColor==a[k] && (i-j)%4==k) //בודק אם בול
            {
                let d1=s1.getElementsByTagName('div')[i-j] 
                d1.style.backgroundColor='black'
                d1.style.border='1px solid black'
                countS++
            }
            else
                if(d.style.backgroundColor==a[k]) //בודק אם פגיעה
                {
                    let d1=s1.getElementsByTagName('div')[i-j]  
                    d1.style.border='1px solid black'
                    d1.style.backgroundColor='white'
                }
            // pl--
        }   
    }
    if(countS==4)
    {
        sessionStorage.setItem('scoreBul',guess)
        end(true)
    }
    if (i==31  && countS<4)
    {
        sessionStorage.setItem('scoreBul',8)
        end(false)
    }
}
let hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0]
let instructions = document.getElementsByClassName('instructions')[0]
// debugger
hamburgerIcon.addEventListener('click', humb) 
function humb()
{
    if( instructions.style.display=="block")
    {
       instructions.style.animation="humbC 1s forwards"
       instructions.addEventListener('animationend', function(event) {
        if (event.animationName == 'humbC') {
            instructions.style.display = "none";
            instructions.style.animation = "";
          }
        ;})
    }
    else
    {
        instructions.style.display="block"
        instructions.style.animation="humb 1s forwards"
    }
}
function end(a)
{
    let b=document.getElementsByTagName('body')[0]
    let d=document.createElement('div')
    d.style.position="fixed"
    d.style.top="30%"
    d.style.bottom="30%"
    d.style.width="50%"
    d.style.height="35%"
    d.style.right="25%"
    d.style.left="25%"
    d.style.display="block"
    d.style.textAlign="center"
    d.style.backgroundImage=`url(${'./images/רקע-עם-שחמט.png'})`
    d.style.margin='auto'
    d.style.direction="rtl"
    d.style.animation="descend 1s forwards" 
    let h=document.createElement('h1')
    h.style.color='white'

    if(a==true)
    {
        h.innerHTML="ניצחת!!<br> כל הכבוד!!!"
    }
    else
    {
        h.innerHTML="אוי חבל <br> הפסדת..."
    }
    d.appendChild(h)
    debugger
    // console.log(localStorage.getItem('users'))
    let use=localStorage.getItem('users')
    use=JSON.parse(use)
    // console.log(use.length)
    for(let i = 0;i<use.length; i++)
    {
        if(use[i]['name']==sessionStorage.getItem('name'))
        {
            if(parseInt(sessionStorage.getItem('scoreBul'))<parseInt(use[i]['scoreBul']))
            {
                use[i]['scoreBul']=sessionStorage.getItem('scoreBul')
            }
        } 
    }
    let ggg=JSON.stringify(use)
    localStorage.setItem('users',ggg)
    let p=document.createElement('p')
    p.innerHTML="מספר הניחושים: "
    p.innerHTML+=sessionStorage.getItem('scoreBul')
    p.style.color="white"
    d.appendChild(p)
    let inn =["חזרה לבחירת משחק","מעבר לדף מנצחים","משחק חדש"]
    for(let i=0;i<3;i++)
    {
        let b1=document.createElement('button')
        b1.innerHTML=inn[i]
        b1.addEventListener('click',pass)
        b1.style.margin="30px 10px 0 10px"
        b1.style.height="30px"
        b1.style.width="130px"
        b1.style.borderRadius="10px"
        d.appendChild(b1)
    }
    
    b.appendChild(d)
    
    
}
function pass()
{
    if(event.target.innerHTML=="חזרה לבחירת משחק")
    {
        window.location='./select.html'
    }
    else
    if(event.target.innerHTML=="מעבר לדף מנצחים")
    {
        window.location='./winer1.html'
    }
    else
    if(event.target.innerHTML=="משחק חדש")
    {
        window.location='./game1.html'
    }
}
function rianun()
{
    window.location='./game1.html'
}
function chazor()
{
    window.location='./select.html'
}
if(!sessionStorage.getItem('name'))
{    
    window.location="index.html"
}
