// open and close navigation
// button.addEventListener()
function onload(evt) {
    const button = document.querySelector('.nav-button')
    const nav = document.querySelector('.navigation')

    const resetBt = document.querySelector('#reset')
    const submitBt = document.querySelector('#submit')
    button.addEventListener('click', function () {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open')
        }
        else {
            nav.classList.add('open')
        }
    })

    if(resetBt){
        resetBt.addEventListener('click', function () {
            alert('reset button clicked');
        })
    }
    if(submitBt){
        submitBt.addEventListener('click', function () {
            alert('soon I will create this');
        })
    }
}

window.addEventListener('load', onload)