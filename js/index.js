// navbar


// for menu click

function fn(i){
    i.style.left = '0px'
}

function f1(){
    let l1 = document.getElementById('l1')
    let l2 = document.getElementById('l2')
    let l3 = document.getElementById('l3')
    let l4 = document.getElementById('l4')

    let arr = [l1,l2,l3,l4]

    arr.forEach(fn)

    document.getElementById('btn1').style.display = 'none';
    document.getElementById('btn2').style.display = 'block';


}

// for cross butoon

function f2(){
    document.getElementById('btn1').style.display = 'block';
    document.getElementById('btn2').style.display = 'none';

    document.getElementById('l1').style.left = '-1000px';
    document.getElementById('l2').style.left = '1000px';
    document.getElementById('l3').style.left = '-1000px';
    document.getElementById('l4').style.left = '1000px';
}



// for sticky nav bar and responsivness

let ow = window.outerWidth;
document.addEventListener('scroll', function(){
    
    if ( window.pageYOffset > 10 && ow > 992){
        document.getElementById('navdiv').style.backgroundColor = 'var(--bg3)';
        document.getElementById('logo').style.textShadow = 'none'
        document.getElementById('navdiv').style.paddingTop = '0.5vw'   
        document.getElementById('navdiv').style.paddingBottom = '0.3vw'    
        
       
    }
    else if (window.pageYOffset > 10 &&  ow < 992){
        // document.getElementById('navdiv').style.background = 'linear-gradient(0deg, var(--bg) 83%, var(--bg2) 17%) ';
        document.getElementById('btn1').style.background = 'var(--orn)'
        document.getElementById('btn2').style.background = 'var(--orn)' 
        document.getElementById('navdiv').style.backgroundColor = 'var(--bg)'
    }
    else if ( window.pageYOffset <= 10 && ow > 992  ){
        document.getElementById('navdiv').style.background = 'none';
        document.getElementById('navdiv').style.paddingTop = '1.5vw'   
        document.getElementById('navdiv').style.paddingBottom = '1vw' 
        document.getElementById('btn1').style.background = 'var(--bg2)'
        document.getElementById('btn2').style.background = 'var(--bg2)';
        document.getElementById('logo').style.textShadow = '2px 2px 20px var(--orn), -2px -2px 20px var(--orn)'   
    }
})


// end of navbar 




// intro **********************************************

function funcvisible(id){
    document.getElementById(id).style.top = '0px'
    document.getElementById(id).style.opacity = '1'
}

setTimeout(funcvisible , 400 , 'tagline')
setTimeout(funcvisible , 100 , 'headsvgimg')
setTimeout(funcvisible , 600 , 'description')



window.addEventListener('scroll' , function(){
    if (window.pageYOffset > 10){
        setTimeout(funcvisible , 100 , 'learnmore')
    }
})




// categories ******************************************

let g1 = document.getElementById('g1').style
let g2 = document.getElementById('g2').style
let g3 = document.getElementById('g3').style
let g4 = document.getElementById('g4').style
let g5 = document.getElementById('g5').style
let g6 = document.getElementById('g6').style


window.addEventListener('scroll', function(){
    if (window.pageYOffset > 200 && ow > 992){
        
        g1.left = '0px'
        g2.left = '0px'
        g3.left = '0px'
    
    }
    if (window.pageYOffset > 350 && ow > 992){
        g4.left = '0px'
        g5.left = '0px'
        g6.left = '0px'

    }

    if(ow < 992){
        if (window.pageYOffset > 600){
            g1.left = '0px'
            g2.left = '0px'
        }
        if( window.pageYOffset > 750){
            g3.left = '0px'
            g4.left = '0px'
        }
        if( window.pageYOffset > 900 ){
            g5.left = '0px'
            g6.left = '0px'
        }
    }


})



// cards for cources


function showlearnmore(id){
    
    document.getElementById(id).style.top = '0px';

}

