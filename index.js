arrSelectImg=["./images/im5.jpg","./images/im2.png","./images/im3.png"]
function looud()
{
    let bb=document.getElementsByTagName('button')[1]
    bb.addEventListener('click',styleBackgroundImg)
}
function keep_ditels()
{
    let b=document.getElementsByTagName('body')[0]
    b.style.backgroundImage=sessionStorage.getItem('background')
    let nameD=document.getElementById('name').value
    let passwordD=document.getElementById('password').value
    let oneUser={
        name:nameD,
        password:passwordD,
        score2048:0,
        scoreBul:8
    }
    let k=false
    let users=localStorage.getItem('users')
    console.log(users)
    if(users==null)
    {
        users=[oneUser]
    }
    else
    {
        users=JSON.parse(users)
    }
    let yes=true
    if(oneUser.name=="" || oneUser.password=="")
    {
        if(oneUser.name=="")
        {
            let t=document.getElementById('name')
            t.style.border='3px solid red'
            t.value=""
            t.placeholder="שם-שדה חובה"
            document.getElementById('password').value=""
        }
        if(oneUser.password=="")
        {
            let t=document.getElementById('password')
            t.style.border='3px solid red'
            t.value=""
            t.placeholder="סיסמא-שדה חובה"
            document.getElementById('name').value=""
        }
        yes=false
    }
    else
    {
        for(let i=0;i<users.length;i++)
        {
            if(users[i].name==oneUser.name)
            {
                if(users[i].password!=oneUser.password)
                {
                    let t=document.getElementById('password')
                    t.style.border='3px solid red'
                    t.value=""
                    t.placeholder="סיסמא שגויה"
                    document.getElementById('name').value=""
                    yes=false
                } 
                else
                {
                    yes=true
                } 
            k=true
            break
            }  
        }
    }
    
    if(!k)
    {   
        users.push(oneUser)          
    }
    if(yes)
    {
        let a=JSON.stringify(users)
        localStorage.setItem('users',a)
        sessionStorage.setItem('name',nameD)
        window.location='./select.html'
    }
}
function styleBackgroundImg()
{
    let DivSelectImg=document.getElementsByTagName('div')[1]
    DivSelectImg.style.width='280px'
    DivSelectImg.style.height='60px'
    DivSelectImg.style.margin='auto'
    DivSelectImg.style.backgroundColor='#ffffff30'

    for(let i=0; i<3; i++)
    {

        let d=document.createElement('img')
        d.src=arrSelectImg[i]
        d.style.width="84px"
        d.style.height="50px"
        d.style.margin='3px'
        d.style.borderRadius='8px'
        DivSelectImg.appendChild(d)
        d.addEventListener('click', putReka)
    }
    let bb = document.getElementsByTagName('button')[1]
    bb.removeEventListener('click',styleBackgroundImg)
    // bb.addEventListener('click',closer)
}
function putReka()
{
    let b=document.getElementsByTagName('body')[0]
    b.style.backgroundImage=`url(${this.src})`
    sessionStorage.setItem("background", b.style.backgroundImage)
}
if(sessionStorage.getItem("background"))
{
    let b=document.getElementsByTagName('body')[0]
    b.style.backgroundImage=sessionStorage.getItem("background")
}
// function closer()
// {
//     debugger
//     let d3=document.getElementsByTagName('div')[1]
//     d3.style.display="none"
//     let bb = document.getElementsByTagName('button')[1]
//     bb.addEventListener('click',styleBackgroundImg)
// }