  
let b=document.getElementsByTagName('body')[0]
b.style.margin="0 auto"
b.style.padding="0"
let d=document.createElement('div')
let p=document.createElement('p')
p.innerHTML="כל הזכויות שמורות לשושי ושירה"
d.style.backgroundColor="#ffffff14"
p.style.color="white"
// p.style.margin="1px"
p.style.fontSize="15px"
d.style.position="fixed"
d.style.bottom="0"
d.style.height="30px"
d.style.direction="rtl"
d.style.width="100%"
p.style.textAlign="center"

d.style.display = "flex"
d.style.justifyContent = "center"
d.style.alignItems = "center"

d.appendChild(p)
b.appendChild(d)
