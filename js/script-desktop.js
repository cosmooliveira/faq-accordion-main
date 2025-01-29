// primeiro h2
let p1 = document.querySelector('#p1')
let sinalmais1 = document.querySelector('#sinalmais1')
let sinalmenos1 = document.querySelector('#sinalmenos1')
let chave1 = document.querySelector('.chave1')
//segundo h2
let p2 = document.querySelector('#p2')
let sinalmais2 = document.querySelector('#sinalmais2')
let sinalmenos2 = document.querySelector('#sinalmenos2')
let chave2 = document.querySelector('.chave2')
//terceiro h2
let p3 = document.querySelector('#p3')
let sinalmais3 = document.querySelector('#sinalmais3')
let sinalmenos3 = document.querySelector('#sinalmenos3')
let chave3 = document.querySelector('.chave3')
//quarto h2
let p4 = document.querySelector('#p4')
let sinalmais4 = document.querySelector('#sinalmais4')
let sinalmenos4 = document.querySelector('#sinalmenos4')
let chave4 = document.querySelector('.chave4')

chave1.addEventListener('click', function(){
    
    if(p1.style.display === 'block'){
        p1.style.display = 'none'
        sinalmenos1.style.display = 'none'
        sinalmais1.style.display = 'block'
    }else{
        
        p1.style.display = 'block'
        sinalmenos1.style.display = 'block'
        sinalmais1.style.display = 'none'
    }
})


chave2.addEventListener('click', function(){
    
    if(p2.style.display === 'block'){
        p2.style.display = 'none'
        sinalmenos2.style.display = 'none'
        sinalmais2.style.display = 'block'
    }else{
        
        p2.style.display = 'block'
        sinalmenos2.style.display = 'block'
        sinalmais2.style.display = 'none'
    }
})

chave3.addEventListener('click', function(){
    
    if(p3.style.display === 'block'){
        p3.style.display = 'none'
        sinalmenos3.style.display = 'none'
        sinalmais3.style.display = 'block'
    }else{
        
        p3.style.display = 'block'
        sinalmenos3.style.display = 'block'
        sinalmais3.style.display = 'none'
    }
})

chave4.addEventListener('click', function(){
    
    if(p4.style.display === 'block'){
        p4.style.display = 'none'
        sinalmenos4.style.display = 'none'
        sinalmais4.style.display = 'block'
    }else{
        
        p4.style.display = 'block'
        sinalmenos4.style.display = 'block'
        sinalmais4.style.display = 'none'
    }
})