import React from 'react';


const Home = () => {
    return (
        <div>
            <div className="lg-container h-screen bg-blue-900">
                <h1 className="text-blue-400 text-center mx-20 text-4xl font-semibold pt-40">About me</h1>
                <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0 m-20 mx-60">
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                    <p class="text-lg font-semibold text-justify">
                    I'm currently a final year student at the University of Moratuwa studying Information Technology. An enthusiastic, self-motivated person seeking exciting opportunities as an intern. I would like to gain more exposure to web and app development, JavaScript Coding, Java programming, UI/UX Design, and Software Engineering. 
                    </p>
                    </blockquote>
                    <figcaption class="font-medium">
                    <div class="text-yellow-500 font-semibold">
                        Kirushanthi Letchumanan
                    </div>
                    <div class="text-gray-500">
                        Colombo-12, Sri Lanka. 
                    </div>
                    </figcaption>
                    </div>
                </figure>
            </div>
        </div>
    )
}

export default Home
