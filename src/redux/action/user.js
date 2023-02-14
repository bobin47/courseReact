import axios from "axios";
import { userService } from "../../service/userService";

export const LoginAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: user,
      });
      console.log(result);
      await dispatch({ type: "LOGIN_SUCCESS", payload: {message:"Đăng nhập thành công" ,user:result.data}});

      localStorage.setItem("userInfo", JSON.stringify(result.data));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(result.data.accessToken)
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: "Đăng nhập không thành công" });
      console.log("error", error);
    }
  };
};

export const RegisterAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await axios.post(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        user
      );
      console.log(result.data);
      dispatch({ type: "REGISTER_SUCCESS", payload: "Đăng ký thành công" });
    } catch (error) {
      dispatch({ type: "REGISTER_FAIL", payload: "Đăng ký không thành công" });
      console.log(error);

    }
  };
};
