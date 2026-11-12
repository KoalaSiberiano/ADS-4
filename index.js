(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Usuario = require('./usuario');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const criarProduto = await Produto.create({
            nome: 'teclado',
            preco: 20.00,
            descricao: 'teclado gaimer por 20 conto, e brilha'
        });
        
        console.log(criarProduto.toJSON());

        const criarUsu = await Usuario.create({
            nome: 'pedro',
            email: 'pedro123@gmail.com',
            senha: 'p3dr0'
        });
        
        console.log(criarUsu.toJSON());

        const produtos = await Produto.findAll();
        console.log(produtos);

        const usuario = await Usuario.findByPk(1);
        console.log(usuario);

        const produto = await Produto.findByPk(1);
        produto.nome = "Mouse Top";

        const resultadoSave = await produto.save();
        console.log(resultadoSave);

        Produto.destroy({where: {id: 1}});

        const produto = await Produto.findByPk(1);
        produto.destroy();

    }   catch (error) {
        console.log(error);
    }
})();