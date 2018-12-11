import React, { Component } from "react";
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const projectTitle = this.props.projectTitle;
        const avatar = this.props.avatar;
        const image = this.props.image;
        const caption = this.props.caption;

        return (
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            {/* Remove later: */}
                            <img src={avatar} alt={projectTitle} />
                        </div>
                        <div className="Post-user-projectTitle">
                            {/* Remove later: */}
                            <span>{projectTitle}</span>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img src={image} alt={caption} />
                    </div>
                </div>
                <div className="Post-caption">
                    <div className="Project-title">
                        <strong>{projectTitle}</strong> 
                    </div>
                    <hr></hr>
                    <div className="description">
                        {caption}
                    </div>
                </div>
            </article>
        );
    }
}

export default Post;
