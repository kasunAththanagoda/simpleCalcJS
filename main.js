window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        console.log("111")
        document.getElementById('header')
        .style.backgroundColor="blue"
    }
    else{
        document.getElementById('header')
        .style.backgroundColor='darkgray'
    }
})


let inputElementObj = document.getElementById('input1');
inputElementObj.addEventListener('keyup',(event=>
    {
        if(event.key=='Enter' || event.keyCode ==13){
        console.log(event.target.value);
    }
}
    ));