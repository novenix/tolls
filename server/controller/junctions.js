// tolls=tollsDict(viene con todas las carreteras posibles)
var tolls;
// junctions crea todas las rutas con las conexiones(1->3->2)
// {1:[3,300],[2,200]}

var cruces;
const d={'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0}

const recorrer3=(lista,peso)=>{
    console.log('entre')
    var actual=lista[lista.length-1];
    const listaNueva=lista;   
    // for(x=0;x<tolls[actual].length;x++){
        for(const key in tolls[actual]){

        if(lista.length<cruces){
            if(!lista.includes(key[x][0])){
                lista.push(key[x][0])
                peso+=key[x][1]
                var ultimo=peso%10;
                
                d[ultimo.toString()]++; 
                console.log(lista,'lista final',ultimo,'u',peso,'p')
                recorrer2(lista,peso)
            }
        }
        // else{
        //     var ultimo=peso%10;
        //     console.log(lista,'lista final')
        //     d[ultimo.toString()]++; 
        // }
        lista=listaNueva;
    }
}

const recorrer2=(lista,peso)=>{
    console.log('entre')
    var actual=lista[lista.length-1];
    const listaNueva=lista;   
    for(x=0;x<tolls[actual].length;x++){
        // for(const key in tolls[actual]){

        if(lista.length<cruces){
            if(!lista.includes(tolls[actual][x][0])){
                lista.push(tolls[actual][x][0])
                peso+=tolls[actual][x][1]
                var ultimo=peso%10;
                
                d[ultimo.toString()]++; 
                console.log(lista,'lista final',ultimo,'u',peso,'p')
                recorrer2(lista,peso)
            }
        }
        // else{
        //     var ultimo=peso%10;
        //     console.log(lista,'lista final')
        //     d[ultimo.toString()]++; 
        // }
        lista=listaNueva;
    }
}

const recorrer=()=>{
   for(const key in tolls){
    
       var lista=[key];
       var peso=0;
       console.log(key,'key')
    //    recorrer2(lista,peso)
       recorrer3(lista,peso)
    //    for(x=0;x<tolls[key].length;x++){
    //         console.log(x)
    //         peso+=tolls[key][x][1]
        
    //         lista.push(tolls[key][x][0])

    //         var ultimo=peso%10;
            
    //         d[ultimo.toString()]++;

            
    //         recorrer2(lista,peso)
    //         lista=[key]
        
    //         peso=0
           
    //    }
   } 

}
const makeJunctions=(tollsDict,n)=>{
    console.log(tollsDict,'jaja')
    tolls=tollsDict;
    cruces=n
    recorrer()
    console.log(d,'d')
    // crossTolls(cruceActual)
    // console.log(junctions)
    
}

module.exports={
    makeJunctions
}