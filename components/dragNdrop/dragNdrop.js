import React,{useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import {sendDocument} from '../../actions/index'


const  Accept=(props)=> {
  const onDrop=useCallback((file)=>{
    console.log('asdaa')
    let answer=[]
    try{
       const rta=sendDocument(file)
       console.log(rta)
       answer.push()
    }
    catch(err){
      console.error(err)
    }
    return answer
  },[])
  const {acceptedFiles, rejectedFiles, getRootProps, getInputProps} = useDropzone({
    onDrop,accept: '.txt'
  });
  
  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop, arrastre archivos o haga click para seleccionar archivos</p>
        <em>(solo se aceptan archivos txt)</em>
      </div>
      <aside>
        <h4>Archivos Aceptados</h4>
        <ul>
          {acceptedFilesItems}
        </ul>
        <h4>Archivos rechazados</h4>
        <ul>
          {rejectedFilesItems}
        </ul>
      </aside>
    </section>
  );
}
export default Accept
