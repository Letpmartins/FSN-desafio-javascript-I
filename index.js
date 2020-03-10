// Base a ser utilizada
const alunosDaEscola = [{nome:"Henrique",notas:[],cursos:[],faltas:5},{nome:"Edson",notas:[],cursos:[],faltas:2},
{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],
cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],
faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];


//implementação
function adicionarAluno(string){
    let cadastro = {nome:string,notas:[],cursos:[],faltas:0};
    alunosDaEscola.push(cadastro);
    return console.log("Aluno Adicionado.");
}
adicionarAluno("Letícia")
console.log("-------------------------------");

function listarAlunos(){
    console.log("Lista de alunos:");
    for(let i=0; i<alunosDaEscola.length; i++){
        console.log(alunosDaEscola[i].nome);
    }
}
listarAlunos();
console.log("-------------------------------");

  
function buscarAluno(nome){
    let index = alunosDaEscola.findIndex(x=> x.nome === nome);
    if(index !== -1){
        console.log(alunosDaEscola[index].nome + " encontrado.");
    } else {
        console.log("não encontrado");
    }
  }  

buscarAluno("Bruno");
console.log("-------------------------------");
buscarAluno("Zwinglio");
console.log("-------------------------------");

function matricularAluno(nomeAluno, nomeCurso){
    let index = alunosDaEscola.findIndex(x=> x.nome === nomeAluno);
    if (index !== -1){
        alunosDaEscola[index].cursos.push({nomeDoCurso: nomeCurso, dataMatricula: new Date})
        console.log("Aluno matriculado.")
    }
    else{
        console.log("Aluno não encontrado.")
    }

}
matricularAluno("Henrique", "Mobile");
console.log("-------------------------------");
buscarAluno("Zwinglio");
console.log("-------------------------------");


function aplicarFalta(aluno){
    let index = alunosDaEscola.findIndex(x=> x.nome === aluno);
    if (index !== -1 && alunosDaEscola[index].cursos !== []){
        alunosDaEscola[index].faltas++;
        console.log("Falta aplicada"); 
    } else{
        console.log("Erro: Aluno não encontrado, ou não matriculado.")
    }
}

aplicarFalta("Guilherme");
console.log("-------------------------------");
buscarAluno("Zwinglio");
console.log("-------------------------------");

function aplicarNota(nome, numero){
    let notaNova = numero;
    let index = alunosDaEscola.findIndex(x=> x.nome === nome);
    if (index !== -1 && alunosDaEscola[index].cursos !== []){
        alunosDaEscola[index].notas.push(notaNova);
        console.log("Nota computada"); 
    } else{
        console.log("Erro: Aluno não encontrado, ou não matriculado.")
    }
}
aplicarNota("Guilherme", 8);
console.log("-------------------------------");
buscarAluno("Zwinglio");
console.log("-------------------------------");

function aprovarAluno(nome){
    let soma;
    let media;
    let index = alunosDaEscola.findIndex(x=> x.nome === nome);
    soma = alunosDaEscola[index].notas.reduce((acum, curr)=> acum + curr);
    media = soma/(alunosDaEscola[index].notas.length);

    if(index == -1 || alunosDaEscola[index].cursos == []){
        console.log("Erro: Aluno não encontrado, ou não matriculado.");
    }
    if(media >= 7 && alunosDaEscola[index].faltas <= 3){
        console.log("Aluno aprovado.");
    } else{
        console.log("Aluno reprovado.")
    }

}
aprovarAluno("Guilherme");
console.log("-------------------------------");
buscarAluno("Zwinglio");
console.log("-------------------------------");
