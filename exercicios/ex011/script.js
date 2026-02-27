function CalcularMedia(){
    var nome = prompt("Qual o nome do aluno?")
    var nota1 = Number(prompt("Qual foi a primeira nota do aluno?"))                 /* Conversão de string*/
    var nota2 = Number(prompt(`Além de ${nota1}, qual foi a outra nota do aluno?`))  /* para number.*/
    var media = (nota1 + nota2) / 2 // Cálculo da média
    var mensagemBoa = "Meus parabéns!"
    var mensagemRuim = "Recuperação"
    var res = document.querySelector('section#res')
    res.innerHTML = (`<p>Calculando a média final de <mark>${nome}</mark>.</p>`)
    res.innerHTML += (`<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`) 
    res.innerHTML += (`<p>A média final será <mark>${media}</mark>.</p>`)
    // Estrutura condicional para mostrar uma mensagem de acordo com as notas do aluno.
    if (media > 6){
    res.innerHTML += (`<p>A mensagem que temos é: <strong style="color: green;">${mensagemBoa}</strong>.</p>`)
}else {
     res.innerHTML += (`<p>A mensagem que temos é: <strong style="color: red;">${mensagemRuim}</strong>.</p>`)
}
}