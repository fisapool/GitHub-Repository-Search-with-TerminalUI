import React from 'react';

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}

interface RepositoryListProps {
  repositories: Repository[];
}

const RepositoryList: React.FC<RepositoryListProps> = ({ repositories }) => {
  return (
    <div>
      <h2>Repository List</h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.name}>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <p>Language: {repo.language}</p>
            <p>Stars: {repo.stars}</p>
            <p>Forks: {repo.forks}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepositoryList;