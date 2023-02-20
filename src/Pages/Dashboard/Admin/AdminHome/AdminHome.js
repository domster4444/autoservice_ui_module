import React from "react";
import styled from "styled-components";

// * assets
import Vehicle1 from "assets/images/most-visited-vehicle/1.jpg";
import Vehicle2 from "assets/images/most-visited-vehicle/2.jpg";
import Vehicle3 from "assets/images/most-visited-vehicle/3.jpg";
import Vehicle4 from "assets/images/most-visited-vehicle/4.jpg";
import Billbook from "assets/billbook/Billbook.docx";

// * components
import LineChart from "components/LineChart";
import VehicleCard from "components/VehicleCard";
import MechanicCarousel from "components/Carousel/MechanicCarousel";
import ReportCarousel from "components/Carousel/ReportCarousel";

const MechanicCarouselContainer = styled.div`
  cursor: move;
  width: 55vw;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const ReportsCarouselContainer = styled.div`
  cursor: move;
  width: 25vw;
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
const Admin = ({ chartData }) => {
  return (
    <DashboardContainer>
      <DashboardSection>
        <LeftSection style={{ height: "20rem" }}>
          <h6 className='my-2 text-primary-blue'>{chartData.title}</h6>
          <LineChart data={chartData.data} />
        </LeftSection>
        <RightSection>
          <h6 className='my-2 text-primary-blue'>Most visited vehicles</h6>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle1} carName='BA-1731' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle2} carName='BA-3542' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle3} carName='BA-104' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle4} carName='BA-756' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle1} carName='BA-1731' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle2} carName='BA-3542' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle3} carName='BA-104' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle4} carName='BA-756' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle1} carName='BA-1731' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle2} carName='BA-3542' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle3} carName='BA-104' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle4} carName='BA-756' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle1} carName='BA-1731' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle2} carName='BA-3542' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle3} carName='BA-104' carDescription={"last week"} billBookFile={Billbook} />
          </div>
          <div className='my-2'>
            <VehicleCard carImg={Vehicle4} carName='BA-756' carDescription={"last week"} billBookFile={Billbook} />
          </div>
        </RightSection>
      </DashboardSection>
      <DashboardSection>
        <LeftSection>
          <h6 className='my-2 text-primary-blue mb-5'>Mechanics</h6>
          <MechanicCarouselContainer>
            <MechanicCarousel slidesToShow={4} />
          </MechanicCarouselContainer>
        </LeftSection>
        <RightSection style={{ overflowX: "hidden" }}>
          <h6 className='my-2 text-primary-blue'>Reports</h6>
          <ReportsCarouselContainer>
            <ReportCarousel slidesToShow={2} />
          </ReportsCarouselContainer>
        </RightSection>
      </DashboardSection>
    </DashboardContainer>
  );
};

export default Admin;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DashboardSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  background-color: var(--primary-white);
  color: var(--primary-black);
  width: 65%;
  border-radius: 0.25rem;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const RightSection = styled.div`
  height: 22rem;
  padding: 0.25rem;
  overflow-y: scroll;

  width: 34.5%;
  border-radius: 0.25rem;
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-top: 0.75rem;
  }
`;
