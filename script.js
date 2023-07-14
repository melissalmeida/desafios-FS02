function validacao_form (){
    if(document.getElementById("exampleInputEmail1").value == ""){
    alert('Por favor, preencha o campo nome');
    document.getElementById("exampleInputEmail1").focus();
    return false
    }}

validacao_form