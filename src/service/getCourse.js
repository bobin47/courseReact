import { baseService } from "./serviceBase";

export class GetCourseService extends baseService {
  constructor() {
    super();
  }

  getCourse = () => {
    return this.get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01");
  };

  getCourseDetail = (id) => {
    return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`);
  };

  dangKyKhoaHoc = (value) => {
    return this.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", value);
  };

  xoaKhoaHoc = (maKhoaHoc) => {
    return this.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);
  };
}

export const getCourseService = new GetCourseService();
