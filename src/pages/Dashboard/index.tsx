import React, {useState, FormEvent, useEffect } from 'react';
import api from '../../services/api';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {

    const storagedRepositories = localStorage.getItem('@GithubExplores: repositories');

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplores: repositories',
      JSON.stringify(repositories),
    )
  }, [repositories]);

  async function handleAddRepository(event: FormEvent) {

    event.preventDefault();

    //Se esta variável estiver vazia
    if(!newRepo) {
      setInputError('Digite o autor/nome do repositório')
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${newRepo}`)

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');

    } catch ( err ) {
      setInputError('Erro na busca por esse repositório');
    }
  }

  return (
    <>
      <img src={logo} alt="imagem" />
      <Title>Explore repositorios do Github.</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepository}>
        <input
        placeholder="Digite o nome do repositorio"
        value={newRepo}
        onChange={ e => setNewRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {/* Se a variável inputError estiver preenchida o componente Error sera exibido em tela */}
      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={30}/>
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;
