import React from 'react'

export const RepositoryList = () => {
    const repositoryName = "unform";

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <li>
                    <strong>{repositoryName}</strong>
                    <p>Forms in React</p>
                    <a href="">Acessar repositório</a>
                </li>
            </ul>
        </section>
    )
}
