function livro(nome, ano, autor){  
const nomeGrande = nome.toUpperCase();
const anoAtual = 2050 - ano;
const frase = nome + ' por ' + autor;
final = {
  frase,
  nome : nomeGrande,
  anoAtual,
  autor,
}
return final;
}
const livroRetorno = livro('O Senhor dos Anéis', 1954, 'J. R. R. Tolkien');
console.log(livroRetorno.nome);
