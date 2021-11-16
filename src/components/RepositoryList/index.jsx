import React from 'react'

import { RepositoryItem } from '../RepositoryItem';

export const RepositoryList = () => {
    const repository = {
        name: "Unform",
        description: "Forms in React",
        link: 'https://github.com/unform/unform',
    }

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={ repository } />
            </ul>
        </section>
    )
}