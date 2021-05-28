import React, { Component } from 'react';
import Tweet from '../component/Tweet/Tweet';
import Profiluser from '../component/User/ProfilUser';

class user extends Component{
    state = {
        user: {
            name: "",
            sreen_name: "",
            url: "",
            description:""        
        },
        tweet: {
            text: " ",
            date: " "
        }
    }

    componentDidMount = () => {
        try {
            fetch("http://localhost:8080/api/user/" + this.props.id)
            .then(res => res.json())
            .then(
                (data) => {

                    try {
                        const userprofil = data.user;
                        const tweets = data.tweets;

                        tweets.forEach(tweet => {
                            this.setState({
                                tweet: {
                                    text: tweet.text,
                                    date: tweet.created_at
                                }
                            })
                        });
                        this.setState({
                            user: {
                                name: userprofil.name,
                                sreen_name: userprofil.screen_name,
                                url: userprofil.profile_image_url,
                                description:userprofil.description
                            }
                        })
                    } catch (error) {
                        alert(data.message)
                    }
                    
                }
            )
        } catch (error) {
            console.log("Run the API service")
        }
        
    }

    render() {

        return (
            <div className="album py-5 bg-light mt-4">
                <div className="container" >
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" >
                        <Profiluser/>
                        <Tweet />
                    </div>
                </div>
            </div>
        );
    }
}

export default user;