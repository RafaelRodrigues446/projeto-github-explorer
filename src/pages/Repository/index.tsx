import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { Header, RepositoryInfo, Issues } from './style';

import api from '../../services/api';

import { FiChevronRight } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  }
}

interface Issue {
  title: string;
  id: number;
  html_url: string;
  user: {
    login: string;
  }
}


const Repository: React.FC = () => {

  const { params } = useRouteMatch<RepositoryParams>();
  const [ repository, setRepository ] = useState<Repository | null>(null);
  const [ issue, setIssue ] = useState<Issue[]>([]);

  useEffect(() => {

    api.get(`repos/${params.repository}`).then(response => {
      setRepository(response.data);
    })

    api.get(`repos/${params.repository}/issues`).then(response => {
      setIssue(response.data);
    })

  }, [params.repository]);

  // useEffect(() => {

  //   async function loadData() {
  //     const [repository, issues] = await Promise.all([
  //       api.get(`repos/${params.repository}`),
  //       api.get(`repos/${params.repository}/issues`)
  //     ])

  //     console.log(repository);
  //     console.log(issues);
  //   }
  //   loadData();
  // }, [params.repository])

  return (
    <>
      <Header>
        <img src={logo} alt="logo" />
        <Link to="/" >
          <IoIosArrowBack size={20} />
          Voltar
        </Link>
      </Header>
      {repository ? (
        <RepositoryInfo>
          <header>
            <img src={repository.owner.avatar_url} alt={repository?.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Starts</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>
          </ul>
        </RepositoryInfo>
      ): (
        <div>Carregando...</div>
      )}
      <Issues>
        {issue.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={30}/>
          </a>
        ))}
      </Issues>
    </>
  );
}

export default Repository;
