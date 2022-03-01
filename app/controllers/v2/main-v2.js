import { DanhSachMonAn } from "../../models/v2/DanhSachMonAn.js";
import { MonAn } from "../../models/v2/MonAn-v2.js";
let dsmon = new DanhSachMonAn();
console.log(dsmon);

// hàm hiển thị món ăn
const hienThiDanhSach = (mangmon) => {
  let tbody = document.getElementById("tbodyFood");
  let content = "";
  mangmon.forEach((item) => {
    content += `<tr>
        <td>${item.maMon}</td>
        <td>${item.tenMon}</td>
        <td>${item.loaiMon}</td>
        <td>${item.gia}</td>
        <td>${item.khuyenMai}</td>
        <td>${item.tinhGiaKM()}</td>
        <td>${item.tinhTrang}</td>
        <td>
        <button class="btn btn-success" onclick="suaMon(${
          item.maMon
        })">Sửa</button>
        <button class="btn btn-danger" onclick="xoaMon(${
          item.maMon
        })">Xóa</button>
        </td>
    </tr>
    `;
  });

  tbody.innerHTML = content;
};

// thêm món
document.getElementById("btnThemMon").addEventListener("click", function () {
  //   console.log("yes");
  let maMon = document.getElementById("foodID").value;
  let tenMon = document.getElementById("tenMon").value;
  let loaiMon = document.getElementById("loai").value;
  let giaMon = document.getElementById("giaMon").value;
  let khuyenMai = document.getElementById("khuyenMai").value;
  let tinhTrang = document.getElementById("tinhTrang").value;
  let hinhMon = document.getElementById("hinhMon").value;
  let moTa = document.getElementById("moTa").value;
  let monAn = new MonAn(
    maMon,
    tenMon,
    loaiMon,
    giaMon,
    khuyenMai,
    tinhTrang,
    hinhMon,
    moTa
  );
  dsmon.themMonAn(monAn);
  hienThiDanhSach(dsmon.mangMonAn);
});

//xóa món

let xoaMon = (id) => {
  //   console.log("id", id);
  dsmon.xoaMonAn(id);
  hienThiDanhSach(dsmon.mangMonAn);
};
window.xoaMon = xoaMon;

// sửa món
let suaMon = (id) => {
  $("#exampleModal").modal("show");
};

window.suaMon = suaMon;
