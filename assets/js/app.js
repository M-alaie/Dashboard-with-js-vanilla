const aside=document.querySelector('aside')
const closeBtn=document.querySelector('#closed span')
const menuBar=document.querySelector('.toggle_menu span')
const toggleBtn=document.querySelector('.toggle_theme')

menuBar.addEventListener('click',()=>{
    aside.style.display='block'
})
closeBtn.addEventListener('click',()=>{
    aside.style.display='none'
})

toggleBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark_mode_varabile')
   toggleBtn.querySelector('span:nth-child(1)').classList.toggle('active')
   toggleBtn.querySelector('span:nth-child(2)').classList.toggle('active')

})