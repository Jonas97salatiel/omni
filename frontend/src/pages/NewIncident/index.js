import React, {useState} from 'react';
import logo from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import api from '../../services/api';




export default function NewIncident(){

        const [title, setTitle] = useState([]);
        const [description, setDescription] = useState([]);
        const [value, setValue] = useState([]);

        const history = useHistory();



     return(
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logo} alt="Be the Hero" />
                <h1>cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size="16" color="#E02041" />
                    Voltar para a home
                </Link>

            </section>

            <form action="">

                <input placeholder="Título do caso"/>
                <textarea placeholder="Descrição" />
                <input placeholder="Valor em reais"/>
                
                <button className="button" type="submit">Cadastrar</button>
            </form>

            

        </div>
    </div> 
        )
}