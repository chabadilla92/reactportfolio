import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import Data from '../data/data.json';


class HScroll extends Component {
    render() {
        return (
            <div class="parent">
                <HorizontalScroll>
                    <div class="main"><h1>I code, design, and make cool stuff.</h1></div>
                        {Data.map((project, index) => {
                            return (
                                <div class="child card" id={project.id}>
                                <card>
                                    <div class="projecttitle"><a href={project.url} data-replace={project.title}><span>{project.title}</span></a>
                                </div>
                                    <p>{project.description}</p>
                                </card>
                            </div>
                          )
                        })}
                </HorizontalScroll>
            </div>
        );
    };
};

export default HScroll;