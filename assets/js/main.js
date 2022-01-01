var bars = document.querySelector('.bars__mobile')
var mobileList = document.querySelector('.mobile__list')
bars.onclick = function() {
    mobileList.classList.toggle('active')
}