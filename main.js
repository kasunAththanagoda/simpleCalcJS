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

let num1;
let num2;
let op;
let ans;

let inputElementObj = document.getElementById('input1');
inputElementObj.addEventListener('keyup',(event=>
    {
        if(event.key=='Enter' || event.keyCode ==13){
        console.log(event.target.value);
         let temp=event.target.value;

         if(!NaN){
            if(num1==undefined){
                num1=parseInt(temp);
                document.getElementById('num1').textContent=num1;
                inputElementObj.value=0;
            }
            else if(num2==undefined){
                num2=parseInt(temp);
                document.getElementById('num2').textContent=num2;
                inputElementObj.value=0;
            }
            else{
                alert('insert again');
                num1=undefined;
                num2=undefined;
                inputElementObj.value=0;
                document.getElementById('num1').textContent='?';
                document.getElementById('num2').textContent='?';

            }
         }
    }
}
    ));

    const execute=(op)=>{
        if(!num1 && !num2){
            alert("insert numbers");
        }
    

        switch(op){
            case '+' : operate((num1+num2),'+'); break;
            case '-' : operate((num1-num2),'-'); break;
            case '*' : operate((num1*num2),'*'); break;
            case '/' : operate((num1/num2),'/'); break;
            case '%' : operate((num1%num2),'%'); break;
        };
    }
        const operate=(result,op)=>{
            document.getElementById('ans').textContent=result;
            document.getElementById('op').textContent=op;
        }