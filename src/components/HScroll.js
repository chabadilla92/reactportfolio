import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import Data from '../data/data.json';


class HScroll extends Component {
    render() {
        return (
            <div class="parent">
                <HorizontalScroll>
                    <div class="main"><h1>I <span class="code">&#60;code&#62;</span>, <span class="design">DESIGN</span>, and <span class="cool">make cool stuff.</span></h1></div>
                        {Data.map((project, index) => {
                            return (
                                <div class="child card" id={project.id}>
                                    <card>
                                        <div class="projecttitle"><a href={project.url}>{project.title}</a>
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