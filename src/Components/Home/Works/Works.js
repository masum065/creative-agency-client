import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';

import work1 from '../../../images/carousel-1.png'
import work2 from '../../../images/carousel-2.png'
import work3 from '../../../images/carousel-3.png'
import work4 from '../../../images/carousel-4.png'
import work5 from '../../../images/carousel-5.png'
import Slider from 'react-slick';
import SingleWork from './SingleWork';


const workData = [
    {
        img: work1,
    },
    {
        img: work2,
    },
    {
        img: work3,
    },
    {
        img: work4,
    },
    {
        img: work5,
    }
]


const Works = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility: false,
        navText: false,
        arrows: false,
        margin: 50,
      };

    return (
        <WorskStle>
            <div className='section-padding'>
                <SectionTitle color='#FFFFFF'>Here are some of <span>our works</span></SectionTitle>
                <div className="padding-top-50"></div>
                <Slider {...settings}>

                    {
                        workData.map((work, index) =><SliderBox key={index + 1}> <SingleWork work={work}/> </SliderBox>)
                    }                       
                </Slider>
        
            </div>
        </WorskStle>
    );
};

const WorskStle = styled.section`
    background: #111430;
    position: relative;

    ::before{
        position: absolute;
        left: 0;
        top : 0;
        width: 85px;
        height: 100%;
        content: '';
        background: #111430;
        z-index: 2;
    }

    .padding-top-50{
        padding-top: 50px;
    }
    .slick-dots{

        bottom: -75px;

        li {
            position: relative;
            display: inline-block;
            width: 20px;
            height: 20px;
            margin: 0px 3px;
            padding: 0;
            cursor: pointer;
            
            button {
                line-height: 10px;
                width: 10px;
                height: 10px;
                padding: 8px;
                color: #242A65;
                background: #242A65;
                border-radius: 50%;
                margin: 5px 0px;

                :before {
                    line-height: 10px;
                    width: 10px;
                    height: 10px;
                    content: '';
                }
            }
            
        }
        .slick-active {
            
            button{
                color: #FBD062;
                background: #FBD062;
            }
        }

    } 


`
const SliderBox = styled.div`
    margin-left: 100px;
    padding: 0px 18px;
`
export default Works;