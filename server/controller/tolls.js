// import {makeJunctions} from './junctions'
var junctions=require('./junctions')
Data=require('../model/readTolls');

var rtaFinal=[]
const splitData=(req,res)=>{
    console.log(Data,'2')
    let pepe={}
    
    console.log(pepe)
    // volver columnas de lectura un arreglo
    const arreglo=Data.split(/\r?\n/).map((linea)=>{
        // pasar filas  de lectura a un arreglo
       arrLinea=linea.split(" ")
    
       const lineaInt=arrLinea.map(numero=>{
       
            return Number.parseInt(numero.split(' '));
       })
        
        return lineaInt;
    })
    console.log(arreglo)
    
    // regresar lectura de archivo en un arreglo de enteros con toda la info
    // ingresada
    return arreglo;
}
Comparator=(a, b)=> {
    if (a[0] < b[0]){
        
        return -1;}
    if (a[0] > b[0]){
        
        return 1;}
    return 0;
}
let tollsDict={}
const createKey=(Toll,Pkey)=>{
    
    if(tollsDict[Pkey]!=undefined){
        tollsDict[Pkey].push(Toll.slice(1,3))
               
        tollsDict[Pkey].sort(Comparator)
    }
    else{
        tollsDict[Pkey]=[]
        tollsDict[Pkey].push(Toll.slice(1,3))
        
    }
   
}
const makeTolls=(data,Ncaminos,cruces)=>{
  
    let tolls=[];
    let posDescription=0;
    
    for(x=1;x<data.length;x++){
        
        if(x-Ncaminos<=posDescription){
            const Toll=data[x]
            Toll[0]=Toll[0].toString()
            Toll[1]=Toll[1].toString()
            
            tolls.push(Toll)
            let Pkey=Toll[0]                      
            createKey(Toll,Pkey)          

            // valor del peaje invertido
            const valorToll=1000-Toll[2];
            
            // quitar valor del peaje
            Toll.pop();
            const reversedToll=Toll.reverse();
            reversedToll[0]=reversedToll[0].toString()
            
            reversedToll.push(valorToll);
          
            tolls.push(reversedToll)
            Pkey=reversedToll[0]
            createKey(reversedToll,Pkey)
            if(x-Ncaminos==posDescription){
                // crear caminos
                const j=junctions.makeJunctions(tollsDict,cruces)
                rtaFinal.push(j)
                tollsDict={}
            }
        }
        
        else{
            posDescription=x;
            Ncaminos=data[x][1]
            cruces=data[x][0]
            tollsDict={}
        }
       

    } 
    
}

const createTolls=(req,res)=>{
    
    const arreglo=splitData(req,res);
    let Ncaminos=arreglo[0][1];
    let cruces=arreglo[0][0]
    
    const Tolls=makeTolls(arreglo,Ncaminos,cruces);
    console.log(rtaFinal,'final')
   
    return res.json(rtaFinal)
}
module.exports={
    splitData,
    createTolls
}
// 3 3
// 1 3 602
// 1 2 256
// 2 3 411
// 3 4
// 1 3 602
// 1 2 256
// 2 3 411
// 2 3 411