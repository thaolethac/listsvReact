import React, { useState, useEffect } from "react";
import "./Listsv.css";
const datass = [
  {
    Msv: 21000645,
    Tensv: "Lê Thạc Thao",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nữ",
    Khoa: "Kiểm toán viên",
  },
  {
    Msv: 21000642,
    Tensv: "Lê Thạc Thao",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nữ",
    Khoa: "Kiểm toán viên",
  },
  {
    Msv: 21000245,
    Tensv: "Le Cha Zoo",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nữ",
    Khoa: "Kiểm toán viên",
  },
  {
    Msv: 21000455,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000102,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21001456,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000655,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000365,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000789,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
  {
    Msv: 21000546,
    Tensv: "Lee Min Ho",
    Ngaysinh: "05/09/2003",
    Gioitinh: "Nam",
    Khoa: "Diễn viên",
  },
];
const Listsv = () => {
  const [editMsv, setEditMsv] = useState();
  const [namesv, setNamesv] = useState("");
  const [born, setBorn] = useState("");
  const [khoa, setKhoa] = useState("");
  const [sex, setSex] = useState("");
  const [code, setCode] = useState(0);
  const [datas, setDatas] = useState(datass);
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("");
  const Delete = (m) => {
    document.getElementById(`index${m}`).remove();
    console.log(m);
  };

  const Edit = (e, m) => {
    setEditMsv(m);
    setCode(m);
  };
  const Update = () => {
    console.log(code);
    if (code === 0) {
      alert("Không có gì để cập nhật");
    } else {
      var list = document.getElementById(`index${code}`);
      var td = list.getElementsByTagName("td");
      if (namesv === "") {
        td[1].innerHTML = td[1].textContent;
      } else {
        td[1].innerHTML = namesv;
      }
      if (sex === "") {
        td[3].innerHTML = td[3].textContent;
      } else {
        td[3].innerHTML = sex;
      }
      if (born === "") {
        td[2].innerHTML = td[2].textContent;
      } else {
        td[2].innerHTML = born;
      }
      if (khoa === "") {
        td[4].innerHTML = td[4].textContent;
      } else {
        td[4].innerHTML = khoa;
      }
    }
  };

  const Add = () => {
    if (editMsv === "") {
      alert("Bạn chưa nhập ô Mã sinh viên!");
    } else if (namesv === "") {
      alert("Bạn chưa nhập ô Tên sinh viên!");
    } else if (born === "") {
      alert("Bạn chưa nhập ô Ngày sinh!");
    } else if (sex === "") {
      alert("Bạn chưa chọn ô Giới tính!");
    } else if (khoa === "") {
      alert("Bạn chưa nhập ô Khoa!");
    } else {
      for (let i = 0; i < datas.length; i++) {
        if (editMsv === datas[i].Msv.toString()) {
          setCheck(false);
          alert("Bạn đã nhập trùng Mã sinh viên!");
          return;
        } else {
          setDatas((e) => [
            ...e,
            {
              Msv: editMsv,
              Tensv: namesv,
              Ngaysinh: born,
              Gioitinh: sex,
              Khoa: khoa,
            },
          ]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    var body = document.getElementById("tbody");
    var tr = body.getElementsByTagName("tr");
    console.log(search);
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].Msv.toString().indexOf(search) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  });

  return (
    <div>
      <div>
        <form className="form-1">
          <label>Tìm kiếm:</label>
          <input
            type="text"
            name="search"
            placeholder="Nhập mã sinh viên....."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Tìm kiếm</button>
        </form>
        <div>
          <table className="table-1">
            <thead>
              <tr>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Ngày sinh</th>
                <th>Giới tính</th>
                <th>Khoa</th>
                <th>Thêm</th>
                <th>Cập nhật</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    value={editMsv}
                    onChange={(e) => setEditMsv(e.target.value)}
                  ></input>
                </td>
                <td>
                  <input onChange={(e) => setNamesv(e.target.value)}></input>
                </td>
                <td>
                  <input onChange={(e) => setBorn(e.target.value)}></input>
                </td>
                <td style={{ textAlign: "left" }}>
                  <input
                    type="radio"
                    name="gioitinh"
                    value="Nam"
                    onChange={(e) => setSex(e.target.value)}
                  ></input>
                  <label>Nam</label>
                  <br></br>
                  <input
                    type="radio"
                    name="gioitinh"
                    value="Nữ"
                    onChange={(e) => setSex(e.target.value)}
                  ></input>
                  <label>Nữ</label>
                </td>
                <td>
                  <input onChange={(e) => setKhoa(e.target.value)}></input>
                </td>
                <td>
                  <button onClick={Add}>Thêm</button>
                </td>
                <td>
                  <button onClick={Update}>Cập nhật</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <table className="table-2" id="table-1">
          <thead>
            <tr>
              <th>Mã sinh viên</th>
              <th>Tên sinh viên</th>
              <th>Ngày sinh</th>
              <th>Giới tính</th>
              <th>Khoa</th>
              <th>Sửa</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {datas.map((data, index) => (
              <tr key={index} id={`index${data.Msv}`}>
                <td>{data.Msv}</td>
                <td>{data.Tensv}</td>
                <td>{data.Ngaysinh}</td>
                <td>{data.Gioitinh}</td>
                <td>{data.Khoa}</td>
                <td>
                  <button onClick={() => Edit(data.Msv)}>Sửa</button>
                </td>
                <td>
                  <button onClick={() => Delete(data.Msv)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listsv;
