import React from 'react';
import HLogo from './hlogo.svg';
import {IconButton} from '@material-ui/core';
import {Facebook, Instagram, LinkedIn, GitHub} from '@material-ui/icons';

const header = () => {
    return (
        <div>
            <div className="lg-container h-screen bg-blue-900">
                <div className="container">
                <h1 className="text-blue-400 mx-20 text-4xl inline font-semibold">Portfolio</h1>
                    <nav className="text-lg text-blue-400 float-right pr-10">
                        <ul className="inline-flex justify-end text-yellow-400">
                            <li className="px-3 p-3">Home</li>
                            <li className="px-3 p-3">About</li>
                            <li className="px-3 p-3">Skills</li>
                            <li className="px-3 p-3">Projects</li>
                            <li className="px-3 p-3">Certificate</li>
                            <li className="px-3 p-3">Contact</li>
                        </ul>
                    </nav>
                </div>
                <div className="container">
                    <div className="mx-20 my-52 inline-block">
                        <p className="text-yellow-50 text-3xl leading-normal">Hey! I’m </p>
                        <p className="text-yellow-400 text-5xl font-semibold leading-normal">Kirushanthi</p>
                        <p className="text-yellow-50 text-2xl leading-normal">A Frontend Web Developer...</p>
                        <p className="text-yellow-200 text-xl mt-10">FOLLOW ME ----</p>
                        <ul className="inline-flex">
                            <li><a href="https://www.linkedin.com/in/kirushanthi-letchu-199612k26">
                                <IconButton>
                                    <LinkedIn color="primary"/>
                                </IconButton>
                                </a></li>
                            <li><a href="https://github.com/Kirushanthi26">
                                <IconButton>
                                    <GitHub color="primary"/>
                                </IconButton>
                                </a></li>
                            <li><a href="https://www.facebook.com/kirushanthi.kiru.39">
                                <IconButton>
                                    <Facebook color="primary"/>
                                </IconButton>
                                </a></li>
                            <li><a href="google.com">
                                <IconButton>
                                    <Instagram color="primary"/>
                                </IconButton>
                                </a></li>
                        </ul>
                    </div>
                    <div className=" float-right absolute bottom-5 right-40">
                        <img src={HLogo} width="600px" alt="home_pic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default header
