import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from '@mui/icons-material/Key';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./Register.scss";
function Register(props) {
  //history
  const history = useNavigate();
  //useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = useForm();

  //[] array user
  // let accountUser = [];
  // console.log(localStorage.getItem('user'))
  // if (localStorage.getItem('user')) {
  //       accountUser.push(JSON.parse(localStorage.getItem('user')));
  // }
  let accounts = JSON.parse(localStorage.getItem('user')) || [];
  //trả data là object ={}
  const onSubmit = (data) => {
    
    return new Promise(resolve => {
      //thêm toast
    toast.success('🦄Thêm thành công!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      })
      setTimeout(() =>{
  // if(accounts.indexOf(accounts.account) === -1){
    console.log(data);
    console.log(accounts);
    accounts.push(data);
    localStorage.setItem("user",JSON.stringify(accounts));
      history("/login");
        resolve(true);
  // }else alert("trùng tài khoản")
      },3000);
    });
  }
  return (
    <div className="container-fluid register">
      <div className="container">
        <section className="">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div
                  className="card text-black"
                >
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Đăng ký tài khoản
                        </p>

                        <form
                          className="mx-1 mx-md-4"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <AccountCircleIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                id="form3Example1c"
                                
                                fullWidth
                                label="Tài Khoản"
                                name="account"
                                {...register("account", { required: true })}
                              />
                              {errors.account?.type ==="required" &&  <p className="p-error">Mời bạn nhập tài khoản</p>}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <KeyIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="password"
                                id="form3Example3c"
                               
                                fullWidth
                                label="Mật khẩu"
                                name="password"
                                {...register("password", {
                                  required: true,
                                  minLength: 8
                                  // pattern:
                                  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                                })}
                                
                              />
                              {errors.password?.type ==="required" && <p className="p-error">Mời bạn nhập mật khẩu</p>}
                              {errors.password?.type ==="minLength" && <p className="p-error">Mật khẩu phải lớn hơn 8 kí tự</p>}
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <KeyIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="password"
                                id="form3Example4c"
                                
                                fullWidth
                                label="Nhập lại mật khẩu"
                                name="repassword"
                                {...register("repassword",{required: true,validate: (value) => {
                                  const { password } = getValues();
              return password === value || "Mật khẩu không khớp nhau!";
                                  // pattern:
                                }  // /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/,
                                })}
                              />
                              {errors.repassword?.type ==="required" && <p className="p-error">Mời bạn nhập mật khẩu</p>}
                              {/* {errors.repassword?.type ==="minLength" && <p className="p-error">Mật khẩu phải lớn hơn 8 kí tự</p>} */}
                              {errors.repassword && <p className="p-error">{errors.repassword.message}</p>}
                            </div>
                            
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <DriveFileRenameOutlineIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                id="form3Example4cd"
                               
                                fullWidth
                                label="Họ tên"
                                name="name"
                                {...register("name", { required: true })}
                              />
                              {errors.name?.type ==="required" && <p className="p-error">Mời bạn nhập Họ tên</p>}
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <EmailIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                id="form3Example4cd"
                                
                                fullWidth
                                label="Email"
                                name="email"
                                {...register("email", {
                                  required: true,
                                  pattern:
                                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                })}
                              />
                              {errors.email?.type ==="required" && <p className="p-error">Mời bạn nhập email</p>}
                              {errors.email?.type ==="pattern" && <p className="p-error">Email chưa đúng định dạng</p>}
                            </div>
                          </div>
                          <FormLabel id="demo-radio-buttons-group-label">
                            Gender:
                          </FormLabel>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <div className="form-outline flex-fill mb-0">
                              <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="row-radio-buttons-group"
                              >
                                <FormControlLabel
                                  value="female"
                                  control={<Radio />}
                                  label="Female"
                                  // name="gender"
                                  {...register("gender")}
                                />
                                <FormControlLabel
                                  value="male"
                                  control={<Radio />}
                                  label="Male"
                                  // name="gender"
                                  {...register("gender")}
                                />
                                <FormControlLabel
                                  value="other"
                                  control={<Radio />}
                                  label="Other"
                                  // name="gender"
                                  {...register("gender")}
                                />
                              </RadioGroup>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <CalendarMonthIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="date"
                                id="form3Example4cd"
                                fullWidth
                                name="date"
                                {...register("date", { required: true })}
                              />
                              {errors.date?.type ==="required" && <p className="p-error">Mời bạn chọn ngày sinh</p>}

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <BusinessIcon fontSize="large" />
                            <div className="form-outline flex-fill mb-0">
                              <TextField
                                type="text"
                                id="form3Example4cd"             
                                fullWidth
                                label="Địa chỉ"
                                name="address"
                                {...register("address", { required: true })}
                              />
                              {errors.address?.type ==="required" && <p className="p-error">Mời bạn nhập địa chỉ</p>}

                            </div>
                          </div>
                          {/* <div className="form-check d-flex justify-content-center mb-5">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3c"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="form2Example3"
                            >
                              I agree all statements in{" "}
                              <a href="#!">Terms of service</a>
                            </label>
                          </div> */}

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            {/* {Object.keys(errors).length !== 0 && (
                              <ul className="error-container">
                                {errors.account?.type === "required" && (
                                  <li>Name bỏ trống</li>
                                )}
                                {errors.password?.type ==="required" && <li>Name is required</li>}
          {errors.password?.type ==="minLength" && <li>Password nhỏ is required</li>}
          {errors.email?.type ==="required" && <li>bỏ trống</li>}
          {errors.email?.type ==="pattern" && <li>Chưa đúng validate</li>}
                              </ul>
                            )} */}
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                              
                            >
                              Register
                            </button>
                            <ToastContainer />
                           
                          </div>
                        </form>

                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Register;
