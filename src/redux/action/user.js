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
      dispatch({ type: "LOGIN_SUCCESS", payload: "dang nhap thanh cong" });

      localStorage.setItem("userInfo", JSON.stringify(result.data));
      localStorage.setItem(
        "accessToken",
        JSON.stringify(result.data.accessToken)
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAIL", payload: "dang nhap that bai" });
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
      dispatch({ type: "REGISTER_SUCCESS", payload: "dang ky thanh cong" });
    } catch (error) {
      dispatch({ type: "REGISTER_FAIL", payload: "dang ky that bai" });
      console.log(error);

    }
  };
};
