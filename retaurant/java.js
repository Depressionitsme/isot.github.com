const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')


function open()
{
    alert("a")
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

function drop()
{
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

function aboutchef()
{
    document.querySelector(".aboutchef").style.display = "block"
    document.querySelector(".popupy").style.display = "block"
    setTimeout(function()
    {
        document.querySelector(".aboutchef").classList.add('open')
    },200);
}

function rese()
{
    document.querySelector(".rese").style.display = "block"
    document.querySelector(".popupy").style.display = "block"
    setTimeout(function()
    {
        document.querySelector(".rese").classList.add('open')
    },200);
}

function order()
{
    document.querySelector(".order").style.display = "block"
    document.querySelector(".popupy").style.display = "block"
    setTimeout(function()
    {
        document.querySelector(".order").classList.add('open')
    },200);
}

function cate()
{
    document.querySelector(".cate").style.display = "block"
    document.querySelector(".popupy").style.display = "block"
    setTimeout(function()
    {
        document.querySelector(".cate").classList.add('open')
    },200);
}

function test()
{
    document.querySelector(".aboutchef").classList.remove('open')
    document.querySelector(".rese").classList.remove('open')
    document.querySelector(".order").classList.remove('open')
    document.querySelector(".cate").classList.remove('open')
    setTimeout(function()
    {
        document.querySelector(".rese").style.display = "none"
        document.querySelector(".order").style.display = "none"
        document.querySelector(".cate").style.display = "none"
       document.querySelector(".popupy").style.display = "none"
    },600);

}

