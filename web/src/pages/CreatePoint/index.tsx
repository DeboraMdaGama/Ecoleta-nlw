import React, {useEffect, useState, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import logo from '../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import {Map, TileLayer, Marker} from 'react-leaflet';
import {LeafletMouseEvent} from 'leaflet';
import axios from 'axios';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';
import ModalCreatePoint from '../../components/ModalCreatePoint';

interface Item{
    id: number;
    title: string;
    image_url:string;
}

interface IBGE_UF_response{
    sigla: string;
}
interface IBGE_city_response{
    nome: string;
}

const CreatePoint = ():JSX.Element  =>{
    
    const [itens, setItens] = useState<Item[]>([]);
    const [ufs, setUFs] = useState<string[]>([]);
    const [selectedUF, setSelectedUF] = useState('0');
    const [cities, setCities] = useState<string[]>([]);    
    const [selectedCity, setSelectedCity] = useState('0');
    const [initialPosition, setInitialPosition] = useState<[number,number]>([0,0]);
    const [selectedPosition, setSelectedPosition] = useState<[number,number]>([0,0]);
    const [formData, setFormData] = useState({name: '', email: '', whatsapp:'', }); 
    const [selectedItens, setSelectedItens] = useState<number[]>([]);  
    const history = useHistory();
    const [selectedFile, setSelectedFile] = useState<File>();

    const [success, setSuccess] = useState(false);

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(position =>{
            const {latitude, longitude} = position.coords;
            setInitialPosition([latitude,longitude]);
        });
    }, []);
    useEffect(() =>{
        api.get('itens').then(response =>{
            setItens(response.data);
            console.log('jhvjhg');
            console.log(itens);
        });
    }, []);
    useEffect(() =>{
        axios.get<IBGE_UF_response[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome')//ordenado por nome
        .then(response =>{
            const stateUFs = response.data.map(uf => uf.sigla);
            setUFs(stateUFs);
        });
    }, []);    
    useEffect (() =>{
        if(selectedUF === '0'){
            return;
        }
        axios.get<IBGE_city_response[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios?orderBy=nome`)//ordenado por nome
        .then(response =>{
            const cityNames = response.data.map(city => city.nome);
            setCities(cityNames);
        });
    }, [selectedUF]);


    function handleSelectUF(event: ChangeEvent<HTMLSelectElement>){
        const uf = event.target.value;
        setSelectedUF(uf);
    }
    function handleSelectCity(event: ChangeEvent<HTMLSelectElement>){
        const city = event.target.value;
        setSelectedCity(city);
    }
    function handleMapclick(event: LeafletMouseEvent){
       setSelectedPosition([event.latlng.lat,event.latlng.lng]);
    }
    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;
        setFormData({ ...formData, [name]:value});
    }
    function handleSelectedItem(id:number){
        const alreadySelected = selectedItens.findIndex(item => item=== id);
        if (alreadySelected >= 0){
            const filteredItens = selectedItens.filter(item => item !== id);
            setSelectedItens(filteredItens);
        }else{
             setSelectedItens([...selectedItens, id]);
        }
    }
    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        const {name, email, whatsapp} = formData;
        const uf = selectedUF;
        const city = selectedCity;
        const [latitude, longitude] = selectedPosition;
        const itens = selectedItens;

        const data = new FormData();
            
        data.append('name', name);
        data.append('email', email);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', String(latitude));
        data.append('longitude', String(longitude));
        data.append('itens', itens.join(','));

        if(selectedFile){
            data.append('image', selectedFile);
        }

        //const data = {name, email, whatsapp, uf, city, latitude, longitude, itens};
        
       /*await api.post('points', data);
        alert('O Ponto de coleta foi criado!');
        history.push('/');*/
        
       await api
      .post('points', data)
      .then((sucess) => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          handleCloseSuccess();
        }, 3000);
      })
      .catch(() => {
        alert('Falha ao criar o Ponto de coleta!!');
      });

        
        
    }
    function handleCloseSuccess() {
        history.push('/');
    }

    return(
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"/>
                <Link to="/"><FiArrowLeft/>Voltar para Home</Link>
            </header>

            <form onSubmit={handleSubmit}>
                
                <h1>Cadastro do <br/>ponto de coleta</h1>
                
                <Dropzone onFileUploaded = {setSelectedFile}/>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

                    <div className="field">
                        <label htmlFor="name">Nome da entidade</label>
                        <input type="text" name="name" id="name" onChange={handleInputChange}/>
                    </div>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={handleInputChange}/>
                        </div>
                        <div className="field">
                            <label htmlFor="whatsapp">Whatsapp</label>
                            <input type="text" name="whatsapp" id="whatsapp" onChange={handleInputChange}/>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Endereço</h2>
                        <span>Selecione o endereço no mapa</span>
                    </legend>

                    <Map center={initialPosition} zoom={15} onClick={handleMapclick}>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={selectedPosition}/>
                    </Map>

                    <div className="field-group">
                        <div className="field">
                            <label htmlFor="uf">Estado (UF)</label>
                            <select name="uf" id ="uf" value={selectedUF} onChange={handleSelectUF}>
                                <option value="0">Selecione uma UF</option>
                                {ufs.map(uf=>(
                                    <option key={uf} value ={uf}> {uf} </option>
                                ))}
                            </select>
                        </div>

                        <div className="field">
                            <label htmlFor="city">Cidades</label>
                            <select name="city" id ="city" value={selectedCity} onChange={handleSelectCity}>
                                <option value="0">Selecione uma cidade</option>
                                {cities.map(city=>(
                                    <option key={city} value ={city}> {city} </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>
                        <h2>Itens de Coleta</h2>
                        <span>Selecione um ou mais itens abaixo</span>
                    </legend>
                    
                    <ul className="itens-grid">
                        {itens.map(item =>(
                            <li 
                                key={item.id} 
                                onClick={() =>handleSelectedItem(item.id)} 
                                className={selectedItens.includes(item.id) ? 'selected' : ''}
                            >
                                <img src={item.image_url} alt={item.title}/>
                                <span>{item.title}</span>
                            </li>
                        ))}
        
                    </ul>
                </fieldset>

                <button type="submit">Cadastrar ponto de coleta</button>
            </form>
            {success && (
                <ModalCreatePoint
                show={success}
                message="Ponto de Coleta cadastrado com sucesso!"
                onCloseAction={handleCloseSuccess}
                />
            )}
        </div>
    );
};

export default CreatePoint;