import React, { useState, useEffect, useRef } from "react";
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
  const [msv, setMsv] = useState("");
  const [editMsv, setEditMsv] = useState("");
  const [namesv, setNamesv] = useState("");
  const [born, setBorn] = useState("");
  const [khoa, setKhoa] = useState("");
  const [sex, setSex] = useState("");
  const [code, setCode] = useState(0);
  const [datas, setDatas] = useState(datass);
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef();
  const reff = useRef();

  const Delete = (m) => {
    console.log(typeof(m))
    setDatas(datas.filter((e) =>{
        if(e.Msv.toString() === m.toString()){
            return false
        } else{
            return true
        }
  }))
  console.log(datas)
  };

  const Edit = (m) => {
    setMsv(m);
    setCode(m);
  };
  const Update = () => {
    var checkk = document.getElementById("checked");
    var input = checkk.getElementsByTagName("input");
    if (code === 0) {
      alert("Không có gì để cập nhật!");
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
      setNamesv("");
      setKhoa("");
      setBorn("");
      setEditMsv("");
      setMsv("")
      setSex("");
      input[0].checked = false;
      input[1].checked = false;
    }
  };
  useEffect(() => {
    var checkk = document.getElementById("checked");
    var input = checkk.getElementsByTagName("input");
    for (let i = 0; i < datas.length; i++) {
      if (datas[i].Msv.toString().indexOf(search) > -1) {
        var trr = document.getElementById(`index${datas[i].Msv}`);
        trr.style.display = "";
      } else {
        var tr = document.getElementById(`index${datas[i].Msv}`);
        tr.style.display = "none";
      }
    }
  }, [search, datas.length]);
  const Add = () => {
    var checkk = document.getElementById("checked");
    var input = checkk.getElementsByTagName("input");
    if (msv === "") {
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
        if (
          editMsv.toString() === datas[i].Msv.toString() ||
          msv.toString() === datas[i].Msv.toString()
        ) {
          alert("Bạn đã nhập trùng Mã sinh viên!");
          return;
        } else {
          setDatas((e) => [
            ...e,
            {
              Msv: msv,
              Tensv: namesv,
              Ngaysinh: born,
              Gioitinh: sex,
              Khoa: khoa,
            },
          ]);
          setNamesv("");
          setKhoa("");
          setBorn("");
          setMsv("");
          input[0].checked = false;
          input[1].checked = false;
          break;
        }
      }
    }
  };

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
                    value={msv || editMsv}
                    onChange={(e) => setMsv(e.target.value.toString())}
                    ref={ref}
                  ></input>
                </td>
                <td>
                  <input
                    ref={reff}
                    value={namesv}
                    onChange={(e) => setNamesv(e.target.value)}
                  ></input>
                </td>
                <td>
                  <input
                    value={born}
                    onChange={(e) => setBorn(e.target.value)}
                  ></input>
                </td>
                <td style={{ textAlign: "left" }} id="checked">
                  <input
                    ref={ref}
                    type="radio"
                    name="gioitinh"
                    value="Nam"
                    onChange={(e) => setSex(e.target.value)}
                  ></input>
                  <label>Nam</label>
                  <br></br>
                  <input
                    ref={ref}
                    type="radio"
                    name="gioitinh"
                    value="Nữ"
                    onChange={(e) => setSex(e.target.value)}
                  ></input>
                  <label>Nữ</label>
                </td>
                <td>
                  <input
                    value={khoa}
                    onChange={(e) => setKhoa(e.target.value)}
                  ></input>
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
