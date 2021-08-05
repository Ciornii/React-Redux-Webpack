import React from 'react';
import './repo.less';

const Repo = props => {
    const repo = props.repo;

    return (
        <div className='repo'>
            <div className='repo__header'>
                <div className='repo__name'>{repo.name}</div>
                <div className='repo__stars'>{repo.stargazers_count}</div>
            </div>
            <div className='repo__last-commit'>{repo.updated_at}</div>
            <a href={repo.html_url} className='repo__link'>
                link: {repo.html_url}
            </a>
        </div>
    );
};
export default Repo;
