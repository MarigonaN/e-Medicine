import React, { Component } from 'react';
import { AiFillGithub,AiFillLinkedin  } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
class Footer extends Component {
    render() {
        return (
     
          <>      

         

        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright © Marigona Nuhija 2020</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://github.com/MarigonaN"><AiFillGithub /></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/marigona-nuhija-02275a173/"><AiFillLinkedin/></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://mail.google.com/mail/u/0/#inbox"><SiGmail/></a>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <a class="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>

</>





      
        
        );
    }
}

export default Footer;