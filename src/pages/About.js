import React from 'react';
import Layout from '../components/Layout';
import { InstagramIcon } from '../components/icons'

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This project was built for my Portofolio</p>

                <a className="btn btn-primary" href="https://instagram.com/afrahimself">
                    <InstagramIcon width={"30px"}/> <span className="ml-2 mr-4">instagram</span></a>
            </div>
        </Layout>
     );
}
 
export default About;