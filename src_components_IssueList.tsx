import React from 'react';

interface Issue {
  title: string;
  number: number;
  state: string;
  user: {
    login: string;
  };
}

interface IssueListProps {
  issues: Issue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  return (
    <div>
      <h2>Open Issues</h2>
      <ul>
        {issues.map((issue) => (
          <li key={issue.number}>
            <h3>{issue.title}</h3>
            <p>Issue #{issue.number}</p>
            <p>State: {issue.state}</p>
            <p>Created by: {issue.user.login}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssueList;