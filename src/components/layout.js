import React from 'react';
import { SEO, HeroImage, Navbar, Footer } from '../components';

export default function Layout(props) {
    var { title, children, image } = props;

    return (
        <div className='is-flex is-flex-direction-column' style={{ minHeight: '100vh' }}>
            <SEO title={title} />
            <HeroImage
                image={image}
                header={
                    <Navbar />
                }
                footer={
                    <div className="m-6"></div>
                }
            >
                <div className="container has-text-centered">
                    <div className="title is-1 has-text-light">
                        {title}
                    </div>
                </div>    
            </HeroImage>            

            <div className="section is-flex-grow-1 has-text-centered">
                <div className="title is-1">
                    CONTENT
                </div>
                <p>Hello world</p>
                {children}
            </div>

            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Home',
    image: null,
    children: null,
}