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
      localStorage.setItem("userInfo", JSON.stringify(result.data));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(result.data.accessToken)
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const RegisterAction = (user) => {
  return async (dispatch) => {
    try {
      const result = await userService.register(user);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };
};


