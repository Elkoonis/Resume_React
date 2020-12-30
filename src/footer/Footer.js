import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="App-footer">
                
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>

                <body>
                    
                    <ul  id="contacts">

                        <li class="telegram"><a href="https://t.me/elko_onis" ><i class="fa fa-paper-plane fa-2x" aria-hidden="true" ></i></a></li>
                        <li class="google"><a href="mailto:onishchenko.vladyslav@gmail.com" target="_blank"><i class="fa fa-google fa-2x" aria-hidden="true"></i></a></li>
                        <li class="instagram"><a href="https://www.instagram.com/elko_onis/" ><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                        <li class="whatsapp"><a href="mailto:https://wa.me/+380984815380" target="_blank"><i class="fa fa-whatsapp fa-2x" aria-hidden="true"></i></a></li>

                    </ul>

                </body>

            </footer>

        )
    }

}

export default Footer;