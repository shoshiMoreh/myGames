//מערך של הצבעים
let arrColorsDiv=['rgb(204, 236, 255)','rgb(102, 204, 255)','rgb(0, 153, 204)',' rgb(204, 204, 255) ','rgb(204, 102, 255)','rgb(204, 153, 255)','rgb(255, 217, 255)','rgb(255, 153, 204)','rgb(255, 102, 204)','rgb(255, 102, 153)','rgb(255, 51, 153)']
let FlagLeft=false
let FlagRight=false
let FlagUp=false
let FlagDown=false
let p1=document.getElementsByTagName('p')[2] 
let n
function start_game()
{
    let b=document.getElementsByTagName('body')[0]
    b.style.backgroundImage=sessionStorage.getItem('background')
    sessionStorage.setItem('score2048',0)//ניקוד
    // let pName=document.createElement('p')
    let pName= document.getElementsByTagName('p')[0]
    pName.innerHTML="שלום "
    pName.innerHTML+=sessionStorage.getItem('name')
    pName.style.color="white"
    // document.getElementsByTagName('p')[0].appendChild(pName)
   
    if(!sessionStorage.getItem('size'))
    {
        window.location="size.html"
    }
    else
        if(sessionStorage.getItem('size')=="3")
        {
            n=3
        }
    else
        if(sessionStorage.getItem('size')=="4")
        {
            n=4
        }
    else
        if(sessionStorage.getItem('size')=="5")
        {
            n=5
        }
    else
        if(sessionStorage.getItem('size')=="6")
        {
            n=6
        }
    for( let i = 0; i<n;i++)
    {
        for(let j=0; j<n;j++)
        {
            let d = document.createElement('div')
            d.style.width='70px'
            d.style.height='70px'
            d.style.margin='6px'
            d.style.border='2px solid white' 
            d.style.backgroundColor='#ffffff90' 
            d.style.borderRadius='10px'
            let s = document.getElementsByTagName('section')[0]
            s.style.backgroundColor='#ffffff50'
            s.style.display='flex'
            s.style.flexWrap ='wrap'
            s.appendChild(d)
            s.style.margin='auto'
            if(n==3)
            {
                s.style.height='280px'
                s.style.width='280px'
            }
            if(n==4)
            {
                s.style.height='350px'
                s.style.width='350px'
            }
            if(n==5)
            {
                s.style.height='440px'
                s.style.width='440px'
            }
            if(n==6)
            {
                s.style.height='520px'
                s.style.width='520px'
            }
            // s.style.border='2px solid white' 
            // s.style.margin='auto'
        }
    }
    for (let i = 0 ;i<2;i++)
    {
        let r= Math.round(Math.random()*(n*n-1))
        // while(document.getElementsByTagName('div')[r])
        // {
        //     r= Math.round(Math.random()*15)
        // }
        let dd = document.getElementsByTagName('div')[r]
        dd.style.backgroundColor=arrColorsDiv[0]
        dd.innerHTML=2
        dd.style.textAlign='center'
        dd.style.lineHeight='70px'
    }
    
    document.addEventListener('keydown',function(event){
    
        if(event.keyCode==37)//שמאלה
        {
            GoLeft()
        }
        else if (event.keyCode==38)//למעלה
        {
            GoUp()
        }
        else if (event.keyCode==39)//ימינה
        {
            GoRight()
        }  
        else if (event.keyCode==40)//למטה
        {
            GoDown()
        }
        // debugger
        if(!CheckBoard())
        {
            // alert('game over ;(')
            end(false)
        } 
        
    });
}
function GoLeft()
{
    FlagLeft=false
    debugger
    for(let i =0; i<n; i++)
    {
        for( let j =1 ; j<n ; j++)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=-1
                while((i*n+j+k)!=-1 && (i*n+j+k)!=(n-1) && (i*n+j+k)!=(2*n-1) && (i*n+j+k)!=(3*n-1) && (i*n+j+k)!=(4*n-1) && (i*n+j+k)!=(5*n-1) ) //שינוי התנאי
                {
                    let count=0
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k+1]
                    console.log(count++)
                    if(d.innerHTML==dd.innerHTML)
                    {   
                        dd.innerHTML=parseInt(d.innerHTML)*2
                        dd.style.backgroundColor=arrColorsDiv[IndexArrColor(dd.innerHTML)]
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        sessionStorage.setItem('score2048',parseInt(sessionStorage.getItem('score2048'))+parseInt(dd.innerHTML))
                        p1.innerHTML=sessionStorage.getItem('score2048')
                        if(parseInt(dd.innerHTML)==2048)
                        {
                            // win=true
                            // alert("you winner!!!!!")
                            end(true)
                        }
                        FlagLeft=true
                        break
                    }
                    if(!dd.innerHTML)
                    {
                        dd.style.backgroundColor=d.style.backgroundColor
                        dd.innerHTML=d.innerHTML
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        FlagLeft=true
                    }
                    k-=1
                }
                
            }
        }
    } 
    if(FlagLeft)
    {
        r=Math.round(Math.random()*(n*n-1))
        while(document.getElementsByTagName('div')[r].innerHTML)
        {
            r=Math.round(Math.random()*(n*n-1))
        }
        let dd=document.getElementsByTagName('div')[r]
        dd.style.backgroundColor=arrColorsDiv[0]
        dd.innerHTML=2
        dd.style.textAlign='center'
        dd.style.lineHeight= '70px' 
    }         
}
function GoUp()
{
    // debugger
    FlagUp=false
    for(let i =1; i<n; i++)
    {
        for( let j =0 ; j<n ; j++)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=-n
                while((i*n+j+k)>=0)
                {
                    let count=0
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k+n]
                    console.log(count++)
                    if(d.innerHTML==dd.innerHTML)
                    {
                        dd.innerHTML=parseInt(d.innerHTML)*2
                        dd.style.backgroundColor=arrColorsDiv[IndexArrColor(dd.innerHTML)]
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        sessionStorage.setItem('score2048',parseInt(sessionStorage.getItem('score2048'))+parseInt(dd.innerHTML))
                        p1.innerHTML=sessionStorage.getItem('score2048')
                        if(parseInt(dd.innerHTML)==2048)
                        {
                            // win=true
                            end(true)
                        }
                        FlagUp=true
                        break
                    }

                    if(!dd.innerHTML)
                    {
                        dd.style.backgroundColor=d.style.backgroundColor
                        dd.innerHTML=d.innerHTML
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        FlagUp=true
                    }
                    k-=n
                }
                
            }
        }
    }
    if(FlagUp)
    {
        r=Math.round(Math.random()*(n*n-1))
        while(document.getElementsByTagName('div')[r].innerHTML)
        {
            r=Math.round(Math.random()*(n*n-1))
        }
        let dd=document.getElementsByTagName('div')[r]
        dd.style.backgroundColor=arrColorsDiv[0]
        dd.innerHTML=2
        dd.style.textAlign='center'
        dd.style.lineHeight= '70px' 
    }          
}
function GoRight()
{
    debugger
    FlagRight=false
    for(let i =0; i<n; i++)
    {
        for( let j =(n-2) ; j>=0 ; j--)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=1
                while((i*n+j+k)!=n && (i*n+j+k)!=2*n && (i*n+j+k)!=3*n && (i*n+j+k)!=4*n && (i*n+j+k)!=5*n && (i*n+j+k)!=6*n) //שינוי התנאי
                {
                    let count=0
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k-1]
                    console.log(count++)
                    if(d.innerHTML==dd.innerHTML)
                    {
                        dd.innerHTML=parseInt(d.innerHTML)*2
                        dd.style.backgroundColor=arrColorsDiv[IndexArrColor(dd.innerHTML)]
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        sessionStorage.setItem('score2048',parseInt(sessionStorage.getItem('score2048'))+parseInt(dd.innerHTML))
                        p1.innerHTML=sessionStorage.getItem('score2048')
                        if(parseInt(dd.innerHTML)==2048)
                        {
                            // win=true
                            end(true)
                        }
                        FlagRight=true
                        break
                    }
                    if(!dd.innerHTML)
                    {
                        dd.style.backgroundColor=d.style.backgroundColor
                        dd.innerHTML=d.innerHTML
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        FlagRight=true
                    }
                    k+=1
                }
                
            }
        }
    }  
    if(FlagRight)
    {
        r=Math.round(Math.random()*(n*n-1))
        while(document.getElementsByTagName('div')[r].innerHTML)
        {
            r=Math.round(Math.random()*(n*n-1))
        }
        let dd=document.getElementsByTagName('div')[r]
        dd.style.backgroundColor=arrColorsDiv[0]
        dd.innerHTML=2
        dd.style.textAlign='center'
        dd.style.lineHeight= '70px' 
    }
}
function GoDown(){
    FlagDown=false
    debugger
    for(let i =n-2; i>=0; i--)
    {
        for( let j =0 ; j<n ; j++)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=n
                while((i*n+j+k)<(n*n))
                {
                    let count=0
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k-n]
                    console.log(count++)
                    if(d.innerHTML==dd.innerHTML)
                    {
                        dd.innerHTML=parseInt(d.innerHTML)*2
                        dd.style.backgroundColor=arrColorsDiv[IndexArrColor(dd.innerHTML)]
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        sessionStorage.setItem('score2048',parseInt(sessionStorage.getItem('score2048'))+parseInt(dd.innerHTML))
                        p1.innerHTML=sessionStorage.getItem('score2048')
                        if(parseInt(dd.innerHTML)==2048)
                        {
                            // win=true
                            end(true)
                        }
                        FlagDown=true
                        break
                    }
                    if(!dd.innerHTML)
                    {
                        dd.style.backgroundColor=d.style.backgroundColor
                        dd.innerHTML=d.innerHTML
                        d.innerHTML=""
                        d.style.backgroundColor="#ffffff90"
                        dd.style.textAlign='center'
                        dd.style.lineHeight= '70px'
                        FlagDown=true
                    }
                    k+=n
                }
                
            }
        }
    } 
    if(FlagDown)
    {
        r=Math.round(Math.random()*(n*n-1))
        while(document.getElementsByTagName('div')[r].innerHTML)
        {
            r=Math.round(Math.random()*(n*n-1))
        }
        let dd=document.getElementsByTagName('div')[r]
        dd.style.backgroundColor=arrColorsDiv[0]
        dd.innerHTML=2
        dd.style.textAlign='center'
        dd.style.lineHeight= '70px' 
    }         
}
function IndexArrColor(NumInner)
{
    return Math.log2(NumInner)-1
}
function CheckBoard()
{
    // debugger
    let SBoard = document.getElementsByTagName('div')
    let count=0 
    for (let i =0; i < n*n; i++) 
    {
        if (SBoard[i].innerHTML)
        {
            count++
        }
    }
    if (count==(n*n) && !checkLeft() && !checkDown() && !checkRight() && !checkUp())
    {
        return false
    }
    return true

}
function checkLeft()
{
    for(let i =0; i<n; i++)
    {
        for( let j =1 ; j<n ; j++)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=-1
                while((i*n+j+k)!=-1 && (i*n+j+k)!=(n-1) && (i*n+j+k)!=(2*n-1) && (i*n+j+k)!=(3*n-1) && (i*n+j+k)!=(4*n-1) && (i*n+j+k)!=(5*n-1)) //שינוי התנאי
                {
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k+1]
                    if(d.innerHTML==dd.innerHTML)
                    {   
                        return true
                    }
                    if(!dd.innerHTML)
                    {
                        return true
                    }
                    k-=1
                }
                
            }
        }
    } 
    return false
}
function checkUp()
{
    for(let i =1; i<n; i++)
    {
        for( let j =0 ; j<n ; j++)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=-n
                while((i*n+j+k)>=0)
                {
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k+n]
                    if(d.innerHTML==dd.innerHTML)
                    {
                        return true
                    }

                    if(!dd.innerHTML)
                    {
                        return true
                    }
                    k-=n
                }
                
            }
        }
    }
    return false       
}
function checkRight()
{
    for(let i =0; i<n; i++)
    {
        for( let j =n-2 ; j>=0 ; j--)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=1
                while((i*n+j+k)!=n && (i*n+j+k)!=2*n && (i*n+j+k)!=3*n && (i*n+j+k)!=4*n && (i*n+j+k)!=5*n && (i*n+j+k)!=6*n) //שינוי התנאי
                {
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k-1]
                    if(d.innerHTML==dd.innerHTML)
                    {
                        return true
                    }
                    if(!dd.innerHTML)
                    {
                        return true
                    }
                    k+=1
                }
                
            }
        }
    }  
    return false
}
function checkDown(){
    for(let i =n-2; i>=0; i--)
    {
        for( let j =0 ; j<n ; j++)
        {
            if(document.getElementsByTagName('div')[i*n+j].innerHTML)
            {
                let k=n
                while((i*n+j+k)<n*n)
                {
                    let dd=document.getElementsByTagName('div')[i*n+j+k]
                    let d=document.getElementsByTagName('div')[i*n+j+k-n]
                    if(d.innerHTML==dd.innerHTML)
                    {
                        return true
                    }
                    if(!dd.innerHTML)
                    {
                        return true
                    }
                    k+=n
                }
                
            }
        }
    } 
    return false 
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
    console.log(localStorage.getItem('users'))
    let use=localStorage.getItem('users')
    use=JSON.parse(use)
    console.log(use.length)
    for(let i = 0;i<use.length; i++)
    {
        if(use[i]['name']==sessionStorage.getItem('name'))
        {
            if(parseInt(sessionStorage.getItem('score2048'))>parseInt(use[i]['score2048']))
            {
                use[i]['score2048']=sessionStorage.getItem('score2048')
            }
        } 
    }
    let ggg=JSON.stringify(use)
    localStorage.setItem('users',ggg)
    let p=document.createElement('p')
    p.innerHTML="ניקודך: "
    p.innerHTML+=sessionStorage.getItem('score2048')
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
        window.location='./winer2.html'
    }
    else
    if(event.target.innerHTML=="משחק חדש")
    {
        window.location='./game2.html'
    }
}
function rianun()
{
    window.location='./game2.html'
}
function chazor()
{
    window.location='./size.html'
}
if(!sessionStorage.getItem('name'))
{    
    window.location="index.html"
}