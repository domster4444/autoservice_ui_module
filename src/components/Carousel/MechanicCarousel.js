import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const Item = styled.div`
  width: 100%;
  border-radius: 1rem;
  margin: 15px 5px;
`;

const CarouselCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MechanicCarousel = ({ slidesToShow = 3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    autoplay: true,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Tushar%20Luitel%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Tushar Luitel</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div
              className='d-flex
   justify-content-center my-4 cursor'
            >
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Shabda%20Shrestha%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Sabda Shrestha</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Rishav%20Aryal%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Rishav Aryal</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Prayusha%20Acharya%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Prayusha Acharya</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Sarbagya%20Sapkota%20%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Sarbagya Sapkota</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/KUSHAL%20SHAKYA%20CSIT-min.JPG' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Kushal Shakya</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Amulaya%20Kumar%20Dahal%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Amulya Dahal</h6>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div>
            <div className='d-flex justify-content-center my-4 cursor'>
              <img className='mechanic-img' src='https://doko.dwit.edu.np/images/studentProfile/Archita%20Kadel%20CSIT-min.jpg' alt='' />
            </div>
            <h6 className='text-primary-blue text-center'>Swikriti Kandel</h6>
          </div>
        </Item>
      </CarouselCard>
    </Slider>
  );
};

export default MechanicCarousel;
