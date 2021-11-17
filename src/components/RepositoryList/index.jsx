import React, { useState, useEffect } from 'react'

import { RepositoryItem } from '../RepositoryItem';

import './styles.scss';

// https://api.github.com/users/MarcosFavarao/repos

export const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);

    const repository = {
        name: "Unform",
        description: "Forms in React",
        link: 'https://github.com/unform/unform',
    }

    useEffect(() =>{
        fetch('https://api.github.com/users/MarcosFavarao/repos')
            .then(response => response.json())
            .then(data => setRepositories(data));
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={ repository } />
            </ul>
        </section>
    )
};