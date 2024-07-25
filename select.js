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
function select_game()
{   
    if(event.target.innerHTML=='2048')
    {
        window.location='size.html'
    }
    else
    {
        window.location='game1.html'
    }
}
if(!sessionStorage.getItem('name'))
{    
    window.location="index.html"
}