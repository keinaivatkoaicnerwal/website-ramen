let totop = document.getElementById(`totop`)
totop.style.display = `none`;
window.addEventListener(`scroll`, () => {
    if(this.scrollY > 600){
        totop.style.display = `block`;
    }else{
        totop.style.display = `none`;
    }
})

totop.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:`smooth`
    });
}