import { baseService } from "./serviceBase";

export class UserService extends baseService {
  constructor() {
    super();
  }

  login = (user) => {
    return this.post("/api/QuanLyNguoiDung/DangNhap", user);
  };

  register = (user) => {
    return this.post("/api/QuanLyNguoiDung/DangKy", user);
  };
}

export const userService = new UserService();
