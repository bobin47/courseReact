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
      dispatch({
        type: "DELETE_USER_SUCCESS",
        payload: "Xoá Người dùng thành công",
      });
      console.log(result);
    } catch (error) {
      dispatch({
        type: "DELETE_USER_FAIL",
        payload: "Xoá Người dùng không thành công",
      });
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
      dispatch({
        type: "UP_DATE_USER_SUCCESS",
        payload: "Cập nhật người dùng thành công",
      });
      console.log(result);
    } catch (error) {
      dispatch({
        type: "UP_DATE_USER_FAIL",
        payload: "Cập nhật người dùng không thành công",
      });
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
      dispatch({
        type: "ADD_USER_SUCCESS",
        payload: "Thêm người dùng thành công",
      });
      console.log(result);
    } catch (error) {
      dispatch({
        type: "ADD_USER_FAIL",
        payload: "Thêm người dùng không thành công",
      });
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
      dispatch({
        type: "ADD_COURSE_SUCCESS",
        payload: "Thêm khoá học thành công",
      });
      console.log(result);
    } catch (error) {
      dispatch({
        type: "ADD_COURSE_FAIL",
        payload: "Thêm khoá học không thành công",
      });
      console.log(error);
    }
  };
};

export const CapNhatKhoaHoc = (value) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
        value
      );
      dispatch({
        type: "UPDATE_COURSE_SUCCESS",
        payload: "Cập nhật khoá học thành công",
      });
      console.log(result);
    } catch (error) {
      dispatch({
        type: "UPDATE_COURSE_FAIL",
        payload: "Cập nhật khoá học không thành công",
      });
      console.log(error);
    }
  };
};

export const xoaKhoaHocAction = (maKhoaHoc) => {
  console.log(maKhoaHoc);
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
      dispatch({
        type: "DELETE_COURSE_SUCCESS",
        payload: "Xoá khoá học thành công",
      });
      // console.log(result);
    } catch (error) {
      dispatch({
        type: "DELETE_COURSE_FAIL",
        payload: "Xoá khoá học không thành công",
      });
      console.log(error.response);
    }
  };
};
