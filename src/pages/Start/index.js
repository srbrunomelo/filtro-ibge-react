import React, { useState, useEffect } from 'react'; 
import { Container } from './styles';
import api from '../../services/api';

export default function Start() {  
    const [estados, setEstados] = useState([]);  
    const [distritos, setDistritos] = useState([]);
    const [estadoId, setEstadoId]  = useState('');
    const [isLoading , setIsLoading] = useState(false);

    useEffect(() => {
        (async function () {  
            setIsLoading(true); 
 
            try {
                api.get('localidades/estados', { 
                }).then(response => {
                    setEstados(response.data)
                })
            } catch (error) { 
                alert('Algo de errado');
            } 
            setIsLoading(false); 
        })();
    }, []);

    async function search(e){   
        const response = await api.get(`localidades/estados/${estadoId}/distritos`)
        .then(response => {
            setDistritos(response.data)
        }) 
    }  

    function cleanFetch(){
        // setEstados([])
        alert('Limpando campos');
    }
  
    return (  
        <Container>  
             
            {isLoading
                ?
                <div className="container-loading">
                    <div className="lds-roller loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                :
                ''
            } 

            <div className="container-fluid mt-4">
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Filtros</h3>
                                </div>
                                <form onSubmit={search} className="card-body">
                                    <div className="row"> 
                                        <div className="col-lg-12">
                                            <label>Estado: </label>
                                            <select className="form-control" value={estadoId} onChange={e => setEstadoId(e.target.value)}> 
                                                <option> Selecione </option>
                                                {estados.map(estado => (
                                                    <option value={estado.id}>{estado.nome} / {estado.sigla}</option> 
                                                ))}  
                                            </select>
                                        </div> 
                                    </div>
                                    <div className="row mt-4 d-flex justify-content-center">
                                        <a onClick={cleanFetch} className="btn btn-sm btn-default mr-2">Limpar Filtro</a>
                                        <button type="submit" onClick={search} className="btn btn-sm btn-primary">Buscar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="container-fluid mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <section className="card">
                                <header className="card-header">
                                    <h2>Distritos</h2>
                                </header>
                                <div className="card-body table-responsive">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr> 
                                                <th>ID</th>
                                                <th>Nome</th>  
                                                <th>Estado</th> 
                                            </tr>
                                        </thead>
                                        <tbody> 
                                            {distritos.map(distrito => (
                                                <tr key={distrito.id}> 
                                                    <td>{distrito.id}</td>
                                                    <td>{distrito.nome}</td>
                                                    <td>{distrito.municipio.microrregiao.mesorregiao.UF.nome} / {distrito.municipio.microrregiao.mesorregiao.UF.sigla}</td>
                                                </tr> 
                                            ))}
                                        </tbody>
                                    </table> 
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Container> 
    );
} 