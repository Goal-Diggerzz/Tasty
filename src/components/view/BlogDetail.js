import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
import {Container,Col ,Row} from 'react-bootstrap'
import { BsCalendar } from 'react-icons/bs';


export class BlogDetail extends Component {
    render() {
  setTimeout(() => console.log(this.props), 2000);
  const {Image,title,userName,email,text}=this.props.blogdata
        console.log(this.props);
        return (
          <>
            <div className="article-header">
  <div className="article-details relative text-center">
    <img className="main-featured-image" src={Image} alt="Cafe Restaurant Relax" />             <div id="overlay" />
    <div className="header-title-blog text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            <div className="header-title-blog-box">
              <h1 className="post-title">
                {title}                              </h1>
              <span><i  aria-hidden="true" /><BsCalendar/> May 27, 2021</span>
              
            </div>                   
          </div>
        </div>
      </div>
    </div>
    <div className="clearfix" />
  </div>
</div>
<Container>
<Row>
<Col>
<h1 style={{textAlign:'center',fontFamily:'Signika'}}>
  DESCRIPTION: <br/>
</h1>
<p style={{textAlign:'center',fontFamily:'Signika',fontSize:'1.03rem'}}>
  {text}
</p>
</Col>


<Col>
<h1 style={{textAlign:'center',fontFamily:'Signika'}}>
  Posted By
</h1>
<h3 style={{textAlign:'center',fontFamily:'Signika'}}>
  {userName}
</h3>
</Col>

</Row>

</Container>
</>

        )
    }
}

export default withAuth0(BlogDetail);
