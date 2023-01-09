import axios from "axios";

export const getCoursesAction = async (dispatch) => {
  try {
    const result = await axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
    });
    console.log(result);
    dispatch({
      type: "GET_COURSES",
      payload: result.data,
    });
  } catch (errors) {
    console.log(errors);
  }
};

export const getDetailCourseAction = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
        method: "GET",
      });

      dispatch({
        type: "DETAIL_COURSE",
        payload: result.data,
      });
    } catch (error) {}
  };
};

export const dangKyKhoaHocAction = (value) => {
  return async (dispatch) => {
    try {
      const a = localStorage.getItem("accessToken").length;

      const result = await axios({
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
        method: "POST",
        data: value,
        headers: {
          Authorization: `Bearer ${localStorage
            .getItem("accessToken")
            .slice(1, a - 1)}`,
        },
      });
      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const xoaKhoaHocAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const a = localStorage.getItem("accessToken").length;
      const result = await axios.delete(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage
              .getItem("accessToken")
              .slice(1, a - 1)}`,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const getAllUserAction = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
      );

      console.log(result.data);

      dispatch({
        type: "GET_ALL_USER",
        payload: result.data,
      });
    } catch (error) {}
  };
};

export const xoaNguoiDungAction = (taiKhoan) => {
  return async (dispatch) => {
    console.log(taiKhoan);
    try {
      const a = localStorage.getItem("accessToken").length;
      const result = await axios.delete(
        `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage
              .getItem("accessToken")
              .slice(1, a - 1)}`,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const capNhatNguoiDungAction = (value) => {
  return async (dispatch) => {
    try {
      const a = localStorage.getItem("accessToken").length;
      const result = await axios.put(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
        value,
        {
          headers: {
            Authorization: `Bearer ${localStorage
              .getItem("accessToken")
              .slice(1, a - 1)}`,
          },
        }
      );

      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const themNguoiDungAction = (value) => {
  return async (dispatch) => {
    try {
      const a = localStorage.getItem("accessToken").length;

      const result = await axios.post(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
        value,
        {
          headers: {
            Authorization: `Bearer ${localStorage
              .getItem("accessToken")
              .slice(1, a - 1)}`,
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const themKhoaHocAction = (value) => {
  return async (dispatch) => {
    try {
      const a = localStorage.getItem("accessToken").length;

      const result = await axios.post(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
        value,
        {
          headers: {
            Authorization: `Bearer ${localStorage
              .getItem("accessToken")
              .slice(1, a - 1)}`,
          },
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};