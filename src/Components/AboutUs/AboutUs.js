import React from 'react'

import {Row, Col} from 'antd'

function AboutUs() {
    return (
        <div className='mt-5 '>
            <div className=' px-3'>
                <Row gutter ={[16,16]}>
                    <Col md={{span:8,offset:8}}>
                        <h1 className=' mt-3 p-2 px-3'
                            style=  {{textDecorationStyle:'solid' ,textDecorationColor :'#1c226b' ,
                                    textDecorationLine: 'underline',textDecorationThickness: '4px',
                                    backgroundColor: '#5585b5',fontFamily : ' Helvetica',textAlign:"center"
                                    }}
                        >
                            <b><i> Resume-Builder </i></b>
                        </h1>
                    </Col>
                </Row>
            </div>
            <div >
                <Row gutter ={[16,16]}>
                    <Col md={{span:8,offset:8}}>
                        <div className=' mt-2  mb-5 p-2 px-3'
                            style= {{fontSize:'17px',
                                    textAlign: 'justify',
                                    textJustify : 'inter-word', }}
                        >
                            <i>
                                A Nice Place to create eye-catching and professional resume
                                and cover letter premium templates from Office help you 
                                stand out from other applicants and leave a lasting impression.
                                We have some of the best resume templates for job seekers in almost every field.
                                Our templates are professionally designed, employer-ready, 
                                User-friendly and easy to customize. Use our Resume Builder to create a professional resume in minutes.
                            </i>
                        </div>
                    </Col>
                </Row>
                
                <div className='media'>
                    <Row gutter ={[16,16]}>
                        <Col md={{span:8,offset:8}}>
                            <img className='align-self-center mx-auto' style={{maxWidth:'100%'}} src ="https://cdn.pixabay.com/photo/2017/10/06/09/34/group-2822423__340.png" alt="discussion"/>
                        </Col>
                    </Row>
                </div>
            </div>
            
            <div className='mt-5 px-3 '>
                <Row gutter ={[16,16]}>
                    <Col md={{span:8,offset:8}}>
                        <h3 className='px-4' style={{wordSpacing:"5px", letterSpacing:"1px"}}>
                            Share with your friends.
                        </h3>
                        
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default AboutUs
