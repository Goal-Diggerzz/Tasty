import { withAuth0 } from '@auth0/auth0-react'
import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export class Test extends Component {
    render() {
        const { user, isAuthinticated } = this.props.auth0
        return (
            <>
                <div>
                    <div className='ourinfo'>
                        <h2 className='header_1_info'> Our Story </h2>
                        <div className='p_1_info'>

                            <p>
                                Founded in 1999, Tusty made its mark on millions of people who live around the world. With our service,
                                you can make your own recipe and find many ingredients
                                from all cooking arts in the world. that our goal is to make the people and cookers happy everywhere.
                          </p>
                        </div>
                        <img className='header_img' src='https://www.graysonsrestaurants.com/new-website-2020/cms_admin/site/wp-content/uploads/2017/11/graysons-our-story.jpg' alt='' />

                        <h2 className='header_2_info'> INSPIRED BY MUM </h2>
                        <p className='p_2_info'>
                            Everything we do is inspired by our mother’s approach to cooking, life and business.
                            She taught us to have the confidence to make each recipe your own. Learn from those around you,
                            but let each dish reflect your style and personality. Cook with confidence and never ever imitate.
                         </p>


                    </div>

                    <div>
                        <div className="container3 container">
                            <div className="row row3">
                                <div className="col-md-5 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src='https://ca.slack-edge.com/TNGRRLUMA-U01PC2A6Y02-3ac69b07630f-512' className="img img-responsive" alt='' />
                                        <div className="profile-name">MARIAM ODAT</div>
                                        <div className="profile-username">mariamodat0@gmail.com</div>
                                        <div className="profile-icons "><a className='aboutus' href="https://m.facebook.com/marry.odat?ref=bookmarks"> <FaFacebook /></a><a className='aboutus' href="https://github.com/mariamodat"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/mwlite/in/mariam-odat-5a1635127"> <FaLinkedin /></a></div>
                                    </div>
                                </div>






                                <div className="col-md-5 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src="https://cdn.discordapp.com/attachments/844956956627173386/846859707322990652/1.jpg" className="img img-responsive" alt='' />
                                        <div className="profile-name">YOUSEF SALEM</div>
                                        <div className="profile-username">yousef_salem97@yahoo.com</div>
                                        <div className="profile-icons "><a className='aboutus' href="https://www.facebook.com/yousef.haimour.7"> <FaFacebook /></a><a className='aboutus' href="https://github.com/Yousef27h"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/yousef-salem/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>







                                <div className="col-md-5 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src='https://avatars.githubusercontent.com/u/79834333?v=4' className="img img-responsive" alt='' />
                                        <div className="profile-name">MOHAMMAD JARADAT</div>
                                        <div className="profile-username">muhmadjradat@gmail.com</div>
                                        <div className="profile-icons "><a className='aboutus' href="https://web.facebook.com/muhmad.jradat/"> <FaFacebook /></a><a className='aboutus' href="https://github.com/muhmadJaradat"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/mohammad-jaradat/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>







                                <div className="col-md-5 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src='https://lh3.googleusercontent.com/ogw/ADGmqu9MYmcKDqRIfeTvZuiiNDk7rzW6Ost6B54WdErhgg=s83-c-mo' className="img img-responsive" alt='' />
                                        <div className="profile-name">MURAD ALSHORMAN</div>
                                        <div className="profile-username">muhmadjradat@gmail.com</div>
                                        <div className="profile-icons "><a className='aboutus' href="https://web.facebook.com/muhmad.jradat/"> <FaFacebook /></a><a className='aboutus' href="https://github.com/muhmadJaradat"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/mohammad-jaradat/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>







                                <div className="col-md-5 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src='https://avatars.githubusercontent.com/u/79832641?v=4' className="img img-responsive" alt='' />
                                        <div className="profile-name">SAED JABALI</div>
                                        <div className="profile-username">saad.jabali@yahoo.com</div>
                                        <div className="profile-icons "><a className='aboutus' href="https://www.facebook.com/saad.jabali94"> <FaFacebook /></a><a className='aboutus' href="https://github.com/SaedJabali"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/saad-jabali-540b59138/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </>


        )
    }
}

export default withAuth0(Test)
