var button = document.getElementById("dida")
var span = document.getElementById('texto_cor')

const cores = [ '0', '1','2','3', '4', '5','6','7','8','9','A','B','C','D','E','F']; 

function number(){
    
}
function aleatorio(){
    var str = '#'
    while(str.length < 7) {
        
        str +=cores[Math.floor(Math.random() * 16)] 
    
    }

    return str
}
    


function quandoClicar() {
    
    
        var cor = aleatorio()

   document.body.style.backgroundColor = cor 
   span.textContent = cor
   
   
}


button.addEventListener("click", quandoClicar)