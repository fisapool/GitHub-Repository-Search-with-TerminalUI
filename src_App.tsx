import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepositoryList from './components/RepositoryList';
import RepositoryDetails from './components/RepositoryDetails';
import IssueList from './components/IssueList';
import axios from 'axios';

const App: React.FC = () => {
  const [repositories, setRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [issues, setIssues] = useState([]);

  const fetchRepositories = async (query: string) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${query}`
    );
    setRepositories(response.data.items);
  };

  const fetchIssues = async (repo: string) => {
    const response = await axios.get(
      `https://api.github.com/repos/${repo}/issues`
    );
    setIssues(response.data);
  };

  return (
    <div>
      <SearchBar onSearch={fetchRepositories} />
      <RepositoryList repositories={repositories} />
      {selectedRepo && (
        <>
          <RepositoryDetails {...selectedRepo} />
          <IssueList issues={issues} />
        </>
      )}
    </div>
  );
};

export default App;