import React, { Component } from "react";
import './Post.css';

class Post extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const projectTitle = this.props.projectTitle;
        const image = this.props.image;
        const caption = this.props.caption;

        return (
            <article className="Post" ref="Post">

                <div className="image-container responsive">
                    <div className="Post-image">
                        <div className="Post-image-bg gallery">
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
                </div>

            </article>
        );
    }
}

export default Post;
