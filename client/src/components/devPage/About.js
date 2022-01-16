import { useState, useEffect } from "react"
import axios from 'axios';
import githubIcon from '../../res/Profile_Icons/iconfinder_github_317712.png';
import linkedinIcon from '../../res/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png';
import hackerrankIcon from '../../res/Profile_Icons/iconfinder_160_Hackerrank_logo_logos_4373234.png';
import codechefIcon from '../../res/Profile_Icons/codechef-1324440139527402917_32.png';
import mediumIcon from '../../res/Profile_Icons/iconfinder_Circled_Medium_svg5_5279113.png';
import twitterIcon from '../../res/Profile_Icons/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png';
import locationIcon from '../../res/Icons_Illustrations/location_on-24px.svg';
import blogIcon from '../../res/Icons_Illustrations/insert_link-24px.svg';
import companyIcon from '../../res/Icons_Illustrations/business-24px.svg';

const About = () => {
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
            {dev[0] ? (
                <div className='about-container'>
                    <div className='pfp-container'>
                        <img className='pfp' src={dev[0].avatar_url} alt='avatar'/>
                    </div>
                    <div className='info-container'>
                        <div className='name'>{dev[0].name}</div>
                        <div className='bio'>{dev[0].bio}</div>
                        <div className="icon-container">
                            {dev[0].github_id ? (<a href={"https://github.com/" + dev[0].github_id} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={githubIcon} alt='github icon'/>
                            </a>) : null }
                            {dev[0].hackerrank_id ? (<a href={"https://hackerrank.com/" + dev[0].hackerrank_id} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={hackerrankIcon} alt='hackerrank icon'/>
                            </a>) : null }
                            {dev[0].codechef_id ? (<a href={"https://www.codechef.com/users/" + dev[0].codechef_id} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={codechefIcon} alt='codechef icon'/>
                                </a>) : null }
                            {dev[0].linkedin_id ? (<a href={"https://linkedin.com/in/" + dev[0].linkedin_id} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={linkedinIcon} alt='linkedin icon'/>
                            </a>) : null }
                            {dev[0].medium_id ? (<a href={"https://medium.com/@" + dev[0].medium_id} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={mediumIcon} alt='medium icon'/>
                            </a>) : null }
                            {dev[0].twitter_id ? (<a href={"https://twitter.com/" + dev[0].twitter_id} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={twitterIcon} alt='twitter icon'/>
                            </a>) : null }
                            {dev[0].email ? (<a href={"mailto:" + dev[0].email} target="_blank" rel="noopener noreferrer">
                                <img className='link-icon' src={githubIcon} alt='email icon'/>
                            </a>) : null }
                        </div>
                        <div className="link-container">
                            {dev[0].location ? (
                                <div className='link'>
                                    <img src={locationIcon} alt = 'location icon'></img>
                                    <div className='link-text'>{dev[0].location}</div>
                                </div>
                            ) : null }
                            {dev[0].company ? (
                                <div className='link'>
                                    <img src={companyIcon} alt = 'company icon'></img>
                                    <div className='link-text'>{dev[0].company}</div>
                                </div>) : null }
                            {dev[0].blog ? (
                                <div className='link'>
                                    <img src={blogIcon} alt = 'blog icon'></img>
                                    <div className='link-text'><a href={dev[0].blog} target="_blank" rel="noopener noreferrer">{dev[0].blog}</a></div>
                                </div>) : null }
                        </div>
                    </div>
                </div>
                ) : 
                (<div>No developer :</div>)
            }
        </div>
    )
};

export default About;