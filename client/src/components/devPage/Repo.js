import { useState, useEffect } from "react"
import axios from 'axios';

const Repo = () => {
    const [dev, setDev] = useState([])
    const [dev2, setDev2] = useState([])
    
    // run only once
    useEffect(() => {
        const github_id = window.location.pathname.slice(5);
        axios
            .get(`/api/devs/search/${github_id}`)
            .then((res) => {
                if (res.data) {
                    setDev(res.data)
                }
            })
            .catch(console.error);
    }, []) 

    useEffect(() => {
        const github_id = window.location.pathname.slice(5);
        axios
            .get(`https://api.github.com/users/${github_id}/repos`)
            .then((res) => {
                if (res.data) {
                    setDev2(res.data)
                }
                console.log(dev2);
            })
            .catch(console.error);
    }, [])
    
    return(
        <div>
            {dev2 ? (
                // map all the repos into a list
                <div className='repo-container'>
                    <div className="repo-title">Github repositories</div>
                    <hr></hr>
                    <ul className='repo-list'>
                    {dev2.map((repo) => {
                            return (
                                <div className = "repo-item">
                                <li className='repo-name'>
                                    <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>{repo.name}</a>
                                </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                ) : 
                (<h1>No Repos yet</h1>)
            }
        </div>
    )
};

export default Repo;