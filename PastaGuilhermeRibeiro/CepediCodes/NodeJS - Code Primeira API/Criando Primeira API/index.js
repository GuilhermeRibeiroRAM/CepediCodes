const express = require('express'); //Buscando tudo que o express exporta 

const server = express(); // 

server.use(express.json());

// Query Params = parâmetros passados na rota: ?nome = NodeJS
// Route Params = parâmetros passados na rota: /cursos/2
// Request Body = manda um objeto no corpo da requisição {nome: 'Node JS', tipo: 'Backend'}

// CRUD = Create, Read, Update, Delete

// req = dados da aplicação (query params, route params ou os dados do body)
// res = representa as informações para retornar uma resposta pro Frontend

const cursos = ['NodeJs', 'JavaScript', 'Php', 'C++', 'Java', 'TypeScript'];

function checkCurso(req, res, next){
    if(!req.body.name){
        return res.status(400).json({error: "Nome do curso é obrigatório!"});
    }
    
    return next();
}

function checkIndexCurso(req, res, next){
     const curso = cursos[req.params.index];
     if(!curso){
        return res.status(400).json({error: "O usuário não existe!"});
     }
     return next();
}


server.use((req, res, next) =>{ // Middleware Global = Chamado independente da rota
    console.log(`Requisição Chamada: ${req.url}`);

    return next();
})


// Resgatando somente um curso da array usando requisições do tipo GET com Route Params
server.get('/cursos/:index',checkIndexCurso, (req, res) => {
    const { index } = req.params;
    return res.json("Curso selecionado: " + cursos[index]);
})


// Resgatando todos os cursos presentes na array usando requisições do tipo GET
server.get('/cursos', (req, res) => {
    return res.json(cursos);
});

 
// Criando um novo curso usando requisições do tipo POST
server.post('/cursos', checkCurso, (req, res) =>{
   const {name} = req.body; 
   cursos.push(name);

   return res.json(cursos);
});


// Atualizando um curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) =>{
    const {index} = req.params;
    const {name} = req.body;

    cursos[index] = name;

    return res.json(cursos);
})

// Excluindo um curso
server.delete('/cursos/:index', checkIndexCurso, (req, res)=>{
    const {index} = req.params;
    cursos.splice(index, 1);

    return res.json(cursos);
})

server.listen(3000); // Aplicação lendo a porta 3000 para poder rodar
                     // Rota que será acessada -  localhost::3000/cursos