const express = require("express");
const Conecta= require("../models/index");


class ControladorIndex{
    probandoControlles(req, res, next){
        console.log(Conecta);
            res.send("Hola")
        next()
    }
}


module.exports= new ControladorIndex