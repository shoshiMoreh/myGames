
function load()
{
    let b=document.getElementsByTagName('body')[0]
    b.style.backgroundImage=sessionStorage.getItem('background')
    let pNam=document.getElementsByTagName('p')[0]
    pNam.innerHTML+=sessionStorage.getItem('name')
    pNam.style.color="white"
    pNam.innerHTML+="???"
    pNam.style.fontSize="30px"
    pNam.style.textAlign="center"

}
function select_size()
{   
    if(event.target.innerHTML=='3 x 3')
    {
        sessionStorage.setItem('size', 3)
    }
    else
    if(event.target.innerHTML=='4 x 4')
    {
        sessionStorage.setItem('size', 4)
    }
    if(event.target.innerHTML=='5 x 5')
    {
        sessionStorage.setItem('size', 5)
    }
    if(event.target.innerHTML=='6 x 6')
    {
        sessionStorage.setItem('size', 6)
    }
    window.location="game2.html"
}
if(!sessionStorage.getItem('name'))
{    
    window.location="index.html"
}