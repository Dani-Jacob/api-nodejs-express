const { json } = require('express');
const fs = require('fs');
const path = require('path');
const pathPlantasJson = path.join(__dirname, '../db/PlantaDb.json');

const getData = () => {

    let data = fs.readFileSync(pathPlantasJson, 'utf-8');
    return JSON.parse(data);
}

const saveData = (data) =>{
    fs.writeFileSync(pathPlantasJson, data);
}

const getAllPlantas = (limite, pagina)=>{

    const start = parseInt(limite)*(parseInt(pagina-1));
    const end = parseInt(start)+parseInt(limite);

    return getData().plantas.slice(start, end);
};

const getPlatasById = (id)=>{
    let data = getData();

    return data.plantas.filter(x => x.id==id);
};

const createPlata = (nome, preco, quantidade)=>{
    let data = getData();
    
    let newPlanta = {id:data.ultimoId+1, nome:nome, preco:preco,quantidade:quantidade};
    data.plantas.push(newPlanta);

    data.ultimoId =data.ultimoId+1;

    saveData(JSON.stringify(data));

    return JSON.stringify(newPlanta);
};

const updatePlanta = (id, nome, preco, quantidade)=>{
    let data = getData();
    let index = data.plantas.findIndex(x => x.id==id);

    if(index!=-1) data.plantas[index] = {
        id: id,
        nome: nome ? nome : data.plantas[index].nome,
        preco: preco ? preco : data.plantas[index].preco,
        quantidade: quantidade ? quantidade : data.plantas[index].quantidade
    }

    saveData(JSON.stringify(data));

    return data.plantas[index];
};

const deletePlanta = (id)=>{
    let data = getData();
    let obj = {};

    let index = data.plantas.findIndex(x => x.id == id);

    if (index !== -1) {
        obj = data.plantas.splice(index, 1);
    }

    saveData(JSON.stringify(data));
    return obj;
};

module.exports = {
    getAllPlantas,
    getPlatasById,
    createPlata,
    updatePlanta,
    deletePlanta
}