export class DanhSachMonAn {
  constructor() {
    this.mangMonAn = [];
  }
  themMonAn(mon) {
    this.mangMonAn = [...this.mangMonAn, mon];
  }

  timViTri(id) {
    let viTri = this.mangMonAn.findIndex((item) => {
      return item.maMon == id;
    });
    return viTri;
  }

  xoaMonAn(id) {
    let viTri = this.timViTri(id);
    viTri !== -1 && this.mangMonAn.splice(viTri, 1);
  }
}
