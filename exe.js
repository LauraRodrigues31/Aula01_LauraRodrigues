var nota1 = 7;
var nota2 = 5;
var nota3 = 8;

var mediaParaPassar = 6;
var media = (nota1 + nota2 + nota3)/3;

var alunoPassou = (media) >= mediaParaPassar;
var alunoReprovou = (media) < mediaParaPassar && media >= 4;

var alunoEmRecuperacao = media <4;

console.log("Nota 1:", nota1);
console.log("nota 2:", nota2);
console.log("nota 3:", nota3);
console.log("Média Para Passar:", mediaParaPassar);
console.log("média do aluno:", media);

if (alunoPassou){
    console.log("Aluno passou!");
} else if (alunoReprovou){
    console.log("Aluno reprovou!");
} else if (alunoEmRecuperacao){
    console.log("Aluno em recuperação.");
} else{
    console.log("Erro ao avaliar o aluno!");
}