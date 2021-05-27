import { withAuth0 } from '@auth0/auth0-react'
import React, { Component } from 'react'
import { CardColumns } from 'react-bootstrap'
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import mariam from '../../assets/Webp.net-resizeimage.jpg'
import yousef from '../../assets/yousef (1).jpg'
import jaradat from '../../assets/jaradat (1).jpg'
import shorman from '../../assets/shorman (1).jpg'
import saed from '../../assets/saed (1).jpg'
import HeaderPhoto from '../utilites/headerPhoto'


export class Test extends Component {
    render() {
        const { user, isAuthinticated } = this.props.auth0
        return (
            <>
                       <div className="article-header">
  <div className="article-details relative text-center">
    <img className="main-featured-image" src='https://i.stack.imgur.com/X9ptX.jpg' alt="Cafe Restaurant Relax" />             <div id="overlay" />
    <div className="header-title-blog text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="header-title-blog-box">
              <h1 className="post-title">
                                             </h1>
              <span><i  aria-hidden="true" /> Founded in 1999, Tusty made its mark on millions of people who live around the world.<br /> With our service,
                            you can make your own recipe and find many ingredients<br />
                            from all cooking arts in the world. <br />that our goal is to make the people and cookers happy everywhere.</span>
              
            </div>                   
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
  </div>
</div>
                <div>
                    <div className='ourinfo'>
                    <h2 style={{ fontFamily: `'Josefin Sans', sans-serif`, color: 'rgb(20, 63, 83)', fontWeight: 'bolder' }} className='header_1_info'> Team members who participated in the completion of this great project!</h2>
                        <div className='p_1_info'>

                        {/* <p className='aboutM'>
                        Founded in 1999, Tusty made its mark on millions of people who live around the world.<br /> With our service,
                            you can make your own recipe and find many ingredients<br />
                            from all cooking arts in the world. <br />that our goal is to make the people and cookers happy everywhere.
                          </p> */}
                        </div>

                     


                    </div>

                    <div>
                        <div className="container3 container">
                            <div className="row row3">
                                <div className="col-md-2 col-md-43">
                                    <hr />
                                    <div className="profile-card-2"><img src='https://ca.slack-edge.com/TNGRRLUMA-U01PC2A6Y02-3ac69b07630f-512' className="img img-responsive" alt='' />
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