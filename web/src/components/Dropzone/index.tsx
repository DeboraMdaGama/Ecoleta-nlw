import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import './styles.css';
import { FaFileUpload } from "react-icons/fa";

interface Props{
    onFileUploaded: (file: File) => void;
}
const Dropzone:React.FC<Props> = ({onFileUploaded}) => {
    
    const [selectedFileUrl, setSelectedFileUrl] =useState('');

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps() } accept="image/*" />
      {
        selectedFileUrl ?<img src={selectedFileUrl} alt="Point thumbnail"/>
        : (    
            isDragActive ?
            <p> <FaFileUpload/>Solte a imagem de estabelecimento aqui...</p> :
            <p> <FaFileUpload/>Arraste a imagem do estabelecimento para esse espaço.<br />
            Ou click aqui para selecionar uma imagem</p>   
        )
      }
      
    </div>
  )
}

export default Dropzone;