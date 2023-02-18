import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormErrorTag from "components/FormErrorTag/FormErrorTag";

// ? utilities
import LoginFormAnimation from "library/utilities/animations/LoginFormAnimation";
import LoginHeadingAnimation from "library/utilities/animations/LoginHeadingsAnimations";

// * components
import Logo from "components/Logo";
import Heading from "components/polymorphicComponents/Heading";
import SubParagraph from "components/SubParagraph";
import { TertiaryBtn } from "components/Buttons/Buttons";

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

const Login = () => {
  const onSubmit = (values, actions) => {
    actions.resetForm();
    alert(`submitted values ${values.phoneNumber} ${values.password}`);
  };

  const loginSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, "Invalid phone number")
      .required("Phone number is required"),
    password: Yup.string().min(5, "Too Short!").max(50, "Too Long!").required("Required"),
  });

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

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
        Maintenance Simplified
        {/* <div className='ms-2 pt-2'>
          <Skeleton style={{ width: "15rem", height: "1.5rem" }} duration={0.7} />
        </div> */}
      </Heading>
      <SubParagraph className='text-center'>
        One stop solution to all your car needs.
        {/* <div>
          <Skeleton style={{ width: "18rem", height: "0.9rem" }} duration={0.7} />
        </div> */}
      </SubParagraph>

      {/* ---------------------  */}

      <LoginFormAnimation>
        <LoginForm onSubmit={handleSubmit} className='mt-4'>
          <header>
            <Heading as='h5' className='text-white text-center'>
              Login
              {/* <div className='ms-2 pt-2'>
              <Skeleton style={{ width: "4rem", height: "0.8rem" }} duration={0.7} />
            </div> */}
            </Heading>
          </header>
          <FormInput name='phoneNumber' placeholder='Enter  phone number' type='text' className='roboto_regular mt-3 ' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
          {errors.phoneNumber && <FormErrorTag> {errors.phoneNumber}</FormErrorTag>}

          <FormInput name='password' placeholder='Enter  password' type='password' className='roboto_regular mt-3 ' value={values.password} onChange={handleChange} onBlur={handleBlur} />

          {errors.phoneNumber && <FormErrorTag> {errors.password}</FormErrorTag>}

          <div className='d-flex justify-content-end mt-3'>
            <Link to='/forgotpassword'>
              <SubParagraph className='text-center'>
                Forgot Password?
                {/* <div>
          <Skeleton style={{ width: "18rem", height: "0.9rem" }} duration={0.7} />
        </div> */}
              </SubParagraph>
            </Link>
          </div>

          <TertiaryBtn type='submit' className='text-white mt-3'>
            Login
          </TertiaryBtn>
        </LoginForm>
      </LoginFormAnimation>
    </LoginBody>
  );
};

export default Login;
