import React, { Component } from 'react'
import HeaderPhoto from './utilites/headerPhoto'

export class AboutUs extends Component {
    render() {
        return (
            <>
            <HeaderPhoto/>
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



                <div className='teaminof'>
                    <di className='teaminof2'>
                        <div className='membeinof'>
                            <img className='team_img' src='https://ca.slack-edge.com/TNGRRLUMA-U01P58VDJCW-6434980e0e7e-512' alt='' />
                            <h5> Yousef Salem </h5>
                            <p>Team Leader</p>
                        </div>

                        <div className='membeinof'>
                            <img className='team_img' src='https://ca.slack-edge.com/TNGRRLUMA-U01PC2A6Y02-3ac69b07630f-512' alt='' />
                            <h5> Mariam Odat </h5>
                            <p>Team Member</p>
                        </div>

                        <div className='membeinof'>
                            <img className='team_img' src='https://lh3.googleusercontent.com/ogw/ADGmqu9MYmcKDqRIfeTvZuiiNDk7rzW6Ost6B54WdErhgg=s83-c-mo' alt='' />
                            <h6> Murad Alshorman </h6>
                            <p>Team Member</p>
                        </div>

                        <div className='membeinof'>
                            <img className='team_img' src='https://ca.slack-edge.com/TNGRRLUMA-U01P8V4H129-7449edaea340-512' alt='' />
                            <h5> Sa'ed Jabali </h5>
                            <p>Team Member</p>
                        </div>

                        <div className='membeinof'>
                            <img className='team_img' src='https://ca.slack-edge.com/TNGRRLUMA-U01P58Y25K8-73a237908059-512' alt='' />
                            <h6> Mohammad Jaradat </h6>
                            <p>Team Member</p>
                        </div>
                    </di>
                </div>

            </>
        )
    }
}

export default AboutUs
