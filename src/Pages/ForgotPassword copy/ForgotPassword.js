import React from "react";
import styled from "styled-components";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// ? utilities
import LoginFormAnimation from "library/utilities/animations/LoginFormAnimation";
import LoginHeadingAnimation from "library/utilities/animations/LoginHeadingsAnimations";

// * components
import Logo from "components/Logo";
import Heading from "components/polymorphicComponents/Heading";
import SubParagraph from "components/SubParagraph";
// * skeleton components
import LogoSkeleton from "components/Logo/LogoSkeleton";
import Skeleton from "react-loading-skeleton";

const LoginBody = styled.main`
  min-height: 100vh;
  background: var(--primary-blue);
`;

const LoginForm = styled.form`
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FormInput = styled.input`
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.4rem 0.75rem;
`;

const TertiaryButton = styled.button`
  padding: 0.45rem 1.5rem;
  outline: none;
  border: none;
  background: #0c3a60;
  border-radius: 0.5rem;
  transition: 0.5s;

  &:active {
    /* bouncing effect  */
    transform: scale(0.95);
    transition: 0.1s;
  }

  &:hover {
    background: #0c3a60;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
`;

const ForgotPassword = () => {
  return (
    <LoginBody>
      {/* ---------------------  */}
      <LoginHeadingAnimation>
        <div className='d-flex justify-content-center pt-5'>
          <Logo size='50px' alt='deerwalk logo' className='mt-5 mb-4' />
          {/* <div className='mt-5 mb-4'>
          <LogoSkeleton />
        </div> */}
        </div>
      </LoginHeadingAnimation>
      <Heading as='h1' className='text-white text-center mt-4'>
        Deerwalk Autoservice
        {/* <div className='ms-2 pt-2'>
          <Skeleton style={{ width: "15rem", height: "1.5rem" }} duration={0.7} />
        </div> */}
      </Heading>

      <div className='text-center display-3 mt-3 mb-2 text-white'>
        <RiLockPasswordFill />
      </div>

      <header>
        <Heading as='h5' className='text-white text-center'>
          Forgot Password
          {/* <div className='ms-2 pt-2'>
              <Skeleton style={{ width: "4rem", height: "0.8rem" }} duration={0.7} />
            </div> */}
        </Heading>
      </header>
      <SubParagraph className='text-center'>
        We will send you otp for password reset.
        {/* <div>
          <Skeleton style={{ width: "18rem", height: "0.9rem" }} duration={0.7} />
        </div> */}
      </SubParagraph>

      {/* ---------------------  */}

      <LoginFormAnimation>
        <LoginForm>
          <FormInput placeholder='Enter  phone number' type='text' className='roboto_regular mt-3 ' />
          <div className='d-flex justify-content-end mt-3'>
            <Link to='/'>
              <SubParagraph className='text-center'>
                Back to login ?
                {/* <div>
          <Skeleton style={{ width: "18rem", height: "0.9rem" }} duration={0.7} />
        </div> */}
              </SubParagraph>
            </Link>
          </div>

          <TertiaryButton className='text-white'>Submit</TertiaryButton>
        </LoginForm>
      </LoginFormAnimation>
    </LoginBody>
  );
};

export default ForgotPassword;
