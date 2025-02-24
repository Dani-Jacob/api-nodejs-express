const { json } = require('express');
const fs = require('fs');
const path = require('path');
const pathEstoque = path.join(__dirname, '../db/EstoqueDb.json');

const getData = () => {

    let data = fs.readFileSync(pathEstoque, 'utf-8');
    return JSON.parse(data);
}

const saveData = (data) =>{
    fs.writeFileSync(pathEstoque, data);
}

const getAllPlantas = (limite, pagina)=>{

    const start = parseInt(limite)*(parseInt(pagina-1));
    const end = parseInt(start)+parseInt(limite);

    return getData().estoque.filter(x => x.tipo=="planta").slice(start, end);
};

const getPlantasById = (id)=>{
    let data = getData();

    return data.estoque.filter(x => x.id==id && x.tipo=="planta");
};

const createPlanta = (nome, preco, quantidade)=>{
    let data = getData();
    
    let newPlanta = {id:data.ultimoId+1, nome:nome, preco:preco,quantidade:quantidade, tipo:"planta"};
    data.estoque.push(newPlanta);

    data.ultimoId =data.ultimoId+1;

    saveData(JSON.stringify(data));

    return newPlanta;
};

const updatePlanta = (id, nome, preco, quantidade)=>{
    let data = getData();
    let index = data.estoque.findIndex(x => x.id==id && x.tipo == "planta");

    if(index!=-1) data.estoque[index] = {
        id: id,
        nome: nome ? nome : data.estoque[index].nome,
        preco: preco ? preco : data.estoque[index].preco,
        quantidade: quantidade ? quantidade : data.estoque[index].quantidade
    }

    saveData(JSON.stringify(data));

    return data.estoque[index];
};

const deletePlanta = (id)=>{
    let data = getData();
    let obj = {};

    let index = data.estoque.findIndex(x => x.id == id && x.tipo == "planta");

    if (index !== -1) {
        obj = data.estoque.splice(index, 1);
    }

    saveData(JSON.stringify(data));
    return obj;
};

module.exports = {
    getAllPlantas,
    getPlantasById,
    createPlanta,
    updatePlanta,
    deletePlanta
}