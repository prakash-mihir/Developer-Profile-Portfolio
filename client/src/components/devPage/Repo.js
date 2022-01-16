import { useState, useEffect } from "react"
import axios from 'axios';

const Repo = () => {
    const [dev, setDev] = useState([])
    
    // run only once
    useEffect(() => {
        console.log("GETTING DEV");
        const github_id = window.location.pathname.slice(5);
        axios
            .get(`/api/devs/search/${github_id}`)
            .then((res) => {
                if (res.data) {
                    setDev(res.data)
                    console.log(dev);
                }
            })
            .catch(console.error);
    }, []) 
    
    return(
        <div>
            {dev[0] && dev[0].repos ? (
                // map all the repos into a list
                <div className='repo-container'>
                    <div className="repo-title">Github repositories</div>
                    <hr></hr>
                    <ul className='repo-list'>
                        {dev[0].repos.map((repo, index) => {
                            return (
                                <div className="repo-item">
                                    <li className='repo-name' key={index}>
                                        {repo}
                                    </li>
                                    <hr></hr>
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