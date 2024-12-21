const { json } = require('express');
const fs = require('fs');
const path = require('path');
const pathEstoqueJson = path.join(__dirname, '../db/EstoqueDb.json');

const getData = () => {

    let data = fs.readFileSync(pathEstoqueJson, 'utf-8');
    return JSON.parse(data);
}

const saveData = (data) =>{
    fs.writeFileSync(pathEstoqueJson, data);
}

const getAllVasos = (limite, pagina)=>{

    const start = parseInt(limite)*(parseInt(pagina-1));
    const end = parseInt(start)+parseInt(limite);

    return getData().estoque.filter(x => x.tipo=="vaso").slice(start, end);
};

const getVasosById = (id)=>{
    let data = getData();

    return data.estoque.filter(x => x.id==id && x.tipo=="vaso");
};

const createVaso = (nome, preco, quantidade)=>{
    let data = getData();
    
    let newPlanta = {id:data.ultimoId+1, nome:nome, preco:preco,quantidade:quantidade, tipo:"vaso"};
    data.estoque.push(newPlanta);

    data.ultimoId =data.ultimoId+1;

    saveData(JSON.stringify(data));

    return newPlanta;
};

const updateVaso = (id, nome, preco, quantidade)=>{
    let data = getData();
    let index = data.estoque.findIndex(x => x.id==id && x.tipo == "vaso");

    if(index!=-1) data.estoque[index] = {
        id: id,
        nome: nome ? nome : data.estoque[index].nome,
        preco: preco ? preco : data.estoque[index].preco,
        quantidade: quantidade ? quantidade : data.estoque[index].quantidade,
        tipo: "vaso"
    }

    saveData(JSON.stringify(data));

    return data.estoque[index];
};

const deleteVaso = (id)=>{
    let data = getData();
    let obj = {};

    let index = data.estoque.findIndex(x => x.id == id && x.tipo == "vaso");

    if (index !== -1) {
        obj = data.estoque.splice(index, 1);
    }

    saveData(JSON.stringify(data));
    return obj;
};

module.exports = {
    getAllVasos,
    getVasosById,
    createVaso,
    updateVaso,
    deleteVaso
}