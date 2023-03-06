import * as Yup from "yup";
import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { storeDataByValue } from "services/LocalStorageService";
import styled from "styled-components";
import FormErrorTag from "components/FormErrorTag/FormErrorTag";
import toastMsg from "library/utilities/toastMsg";

//*services
import { UserApiService } from "services/auth/AuthService";

//?  states import
import { useDispatch } from "react-redux";
import { setLoggedUser } from "redux/features/loggedUser/loggedUserSlice";

// ? utilities
import LoginFormAnimation from "library/utilities/animations/LoginFormAnimation";
import LoginHeadingAnimation from "library/utilities/animations/LoginHeadingsAnimations";

// * components
import Logo from "components/Logo";
import Heading from "components/polymorphicComponents/Heading";
import SubParagraph from "components/SubParagraph";
import { TertiaryBtn } from "components/Buttons/Buttons";

// ? rkt query import
import { useGetAllCategoriesQuery } from "redux/api/category/categoryApi";
import { usePostAuthUserMutation } from "redux/api/auth/authApi";

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
  const navigate = useNavigate();
  if (localStorage.getItem("accessToken")) {
    navigate("/dashboard-monthly");
  }
  const dispatch = useDispatch();

  const onSubmit = async (values, actions) => {
    UserApiService.getAllUsers(values)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toastMsg("Login successful", true);
          dispatch(setLoggedUser(res.data.user));
          res.data.accessToken && storeDataByValue("accessToken", res.data.accessToken);
          // use dispatch to set logged user
          navigate("/dashboard-monthly");
        }
      })
      .catch((err) => {
        console.log(err);
        toastMsg(err.response.data.message, false);
      });
    actions.resetForm();
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
      <LoginHeadingAnimation>
        <div className='d-flex justify-content-center pt-5'>
          <Logo size='50px' alt='deerwalk logo' className='mt-5 mb-4' />
        </div>
      </LoginHeadingAnimation>
      <Heading as='h1' className='text-white text-center mt-4'>
        Maintenance Simplified
      </Heading>
      <SubParagraph className='text-center'>One stop solution to all your car needs.</SubParagraph>
      <LoginFormAnimation>
        <LoginForm onSubmit={handleSubmit} className='mt-4'>
          <header>
            <Heading as='h5' className='text-white text-center'>
              Login
            </Heading>
          </header>
          <FormInput name='phoneNumber' placeholder='Enter  phone number' type='text' className='roboto_regular mt-3 ' value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
          {errors.phoneNumber && <FormErrorTag> {errors.phoneNumber}</FormErrorTag>}
          <FormInput name='password' placeholder='Enter  password' type='password' className='roboto_regular mt-3 ' value={values.password} onChange={handleChange} onBlur={handleBlur} />
          {errors.phoneNumber && <FormErrorTag> {errors.password}</FormErrorTag>}
          <div className='d-flex justify-content-end mt-3'>
            <Link to='/forgotpassword'>
              <SubParagraph className='text-center'>Forgot Password?</SubParagraph>
            </Link>
          </div>
          <TertiaryBtn className='text-white mt-3' onClick={onSubmit}>
            Login
          </TertiaryBtn>
        </LoginForm>
      </LoginFormAnimation>
    </LoginBody>
  );
};

export default Login;
