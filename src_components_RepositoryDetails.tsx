import React from 'react';

interface RepositoryDetailsProps {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  openIssues: number;
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({
  name,
  description,
  language,
  stars,
  forks,
  openIssues,
}) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Language: {language}</p>
      <p>Stars: {stars}</p>
      <p>Forks: {forks}</p>
      <p>Open Issues: {openIssues}</p>
    </div>
  );
};

export default RepositoryDetails;