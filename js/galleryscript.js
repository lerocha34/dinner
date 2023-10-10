document.querySelector('button').addEventListener('click',function(){
    let items = document.querySelectorAll('.hidden');
    let mobileItems = document.querySelectorAll('.mobile-hidden');
    items.forEach(function(element){
        element.classList.remove('hidden');
    });
    mobileItems.forEach(function(mobileElement){
        mobileElement.classList.remove('mobile-hidden');
    })
    document.querySelector('button').style.display ="none";
})