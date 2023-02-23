$(function(){
    toggleDetails()
})
function toggleDetails(){
    let showBtn = $('.show-btn')
    let showBtnText = $('.show-btn > span')
    let details = $('.details')

    showBtn.on('click', function(){
        details.slideToggle('slow');
        showBtn.toggleClass('open')
        if (showBtn.hasClass('open')) {
            showBtnText.text('Скрити подробиці')
            return
        }
        showBtnText.text('Дивіться подробиці')
    })
}