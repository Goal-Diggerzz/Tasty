import { withAuth0 } from '@auth0/auth0-react'
import React, { Component } from 'react'
// import { CardColumns } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import mariam from '../../assets/Webp.net-resizeimage.jpg'
// import yousef from '../../assets/yousef (1).jpg'
import jaradat from '../../assets/jaradat (1).jpg'
import shorman from '../../assets/shorman (1).jpg'
import saed from '../../assets/saed (1).jpg'
// import HeaderPhoto from '../utilites/headerPhoto'


export class Test extends Component {
    render() {
        return (
            <>
            {/* <HeaderPhoto/> */}
                <div>
                    <div className='ourinfo'>
                        <h2 className='header_1_info'> Our Story </h2>
                        <div className='p_1_info'>

                            <p>
                                Founded in 1999, Tasty made its mark on millions of people around the world. With our service,
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
                                <div className="col-md-2 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src={mariam} className="img img-responsive" alt='' />
                                        <div className="profile-name">MARIAM ODAT</div>
                                        {/* <div className="profile-username">mariamodat0@gmail.com</div> */}
                                        <div className="profile-icons "><a className='aboutus' href="https://m.facebook.com/marry.odat?ref=bookmarks"> <FaFacebook /></a><a className='aboutus' href="https://github.com/mariamodat"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/mwlite/in/mariam-odat-5a1635127"> <FaLinkedin /></a></div>
                                    </div>
                                </div>






                                <div className="col-md-2 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src='https://images-ext-1.discordapp.net/external/Q_Rw71LaAKgXu5XADSQ2_Cu14UJb1fx-sHUDN68eazE/%3F_nc_cat%3D102%26ccb%3D1-3%26_nc_sid%3D174925%26_nc_eui2%3DAeFyBRu2s3-sjCFAPVtB3V3HvMsA5sJTqqu8ywDmwlOqq4b3SA_oQEUiC7xOTtq8-rjQRhl8LHTyqSuj37QGQ8Cw%26_nc_ohc%3DyaexwErRVfwAX97H1sV%26_nc_ht%3Dscontent.famm6-1.fna%26oh%3Dcf5cd9acdd6d9d7bb4d055978e93396a%26oe%3D60D23339/https/scontent.famm6-1.fna.fbcdn.net/v/t1.6435-9/91786969_3137641562933432_6467247478121955328_n.jpg?width=676&height=676' className="img img-responsive" alt='' />
                                        <div className="profile-name">YOUSEF SALEM</div>
                                        {/* <div className="profile-username">yousef_salem97@yahoo.com</div> */}
                                        <div className="profile-icons "><a className='aboutus' href="https://www.facebook.com/yousef.haimour.7"> <FaFacebook /></a><a className='aboutus' href="https://github.com/Yousef27h"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/yousef-salem/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>







                                <div className="col-md-2 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src={jaradat} className="img img-responsive" alt='' />
                                        <div className="profile-name">MOHAMMAD JARADAT</div>
                                        {/* <div className="profile-username">muhmadjradat@gmail.com</div> */}
                                        <div className="profile-icons "><a className='aboutus' href="https://web.facebook.com/muhmad.jradat/"> <FaFacebook /></a><a className='aboutus' href="https://github.com/muhmadJaradat"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/mohammad-jaradat/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>







                                <div className="col-md-2 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src={shorman} className="img img-responsive" alt='' />
                                        <div className="profile-name">MURAD ALSHORMAN</div>
                                        {/* <div className="profile-username">muhmadjradat@gmail.com</div> */}
                                        <div className="profile-icons "><a className='aboutus' href="https://web.facebook.com/muhmad.jradat/"> <FaFacebook /></a><a className='aboutus' href="https://github.com/muhmadJaradat"> <FaGithub /></a><a className='aboutus' href="https://www.linkedin.com/in/mohammad-jaradat/"> <FaLinkedin /></a></div>
                                    </div>
                                </div>







                                <div className="col-md-2 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src={saed} className="img img-responsive" alt='' />
                                        <div className="profile-name">SAED JABALI</div>
                                        {/* <div className="profile-username">saad.jabali@yahoo.com</div> */}
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