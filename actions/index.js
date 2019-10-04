import axios from 'axios'
const axiosInstance=axios.create({
    // baseURL:`${process.env.BASE_URL}`,
    baseURL:`http://localhost:3000`,
    // si se demora mas de 3 segundos es una peticion fail
    timeout:3000
})
export const sendDocument=async(archivo)=>{
    const url='/readAndShowTolls/runProgram'
    console.log('accion',archivo)
    console.log(axiosInstance.baseURL,url)
    return await axiosInstance.get(url,archivo).then(response=>response.data)
    .catch(error=> rejectPromise(error))
}
