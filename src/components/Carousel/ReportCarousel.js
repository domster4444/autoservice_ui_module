import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import XLSIcon from "assets/images/xlsx.png";
import Reports from "assets/reports/report1.xlsx";

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

const ReportCarousel = ({ slidesToShow = 3 }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    autoplay: true,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <CarouselCard>
        <Item>
          <div className='download-report-card'>
            <div className='d-flex justify-content-center mb-4 cursor'>
              <img className='report-logo-img' src={XLSIcon} alt='file icon' />
            </div>
            <h6 className='text-primary-blue text-center'>Report1</h6>
            <p className='cursor text-primary-blue text-center'>
              <a download href={Reports} className='link-nav text-decoration-none'>
                <i className='bx bx-download'></i>
                Download
              </a>
            </p>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div className='download-report-card'>
            <div className='d-flex justify-content-center mb-4 cursor'>
              <img className='report-logo-img' src={XLSIcon} alt='file icon' />
            </div>
            <h6 className='text-primary-blue text-center'>Report2</h6>
            <p className='cursor text-primary-blue text-center'>
              <a download href={Reports} className='link-nav text-decoration-none'>
                <i className='bx bx-download'></i>
                Download
              </a>
            </p>
          </div>
        </Item>
      </CarouselCard>
      <CarouselCard>
        <Item>
          <div className='download-report-card'>
            <div className='d-flex justify-content-center mb-4 cursor'>
              <img className='report-logo-img' src={XLSIcon} alt='file icon' />
            </div>
            <h6 className='text-primary-blue text-center'>Report3</h6>
            <p className='cursor text-primary-blue text-center'>
              <a download href={Reports} className='link-nav text-decoration-none'>
                <i className='bx bx-download'></i>
                Download
              </a>
            </p>
          </div>
        </Item>
      </CarouselCard>
    </Slider>
  );
};

export default ReportCarousel;
