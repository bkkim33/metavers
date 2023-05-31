import { useEffect, useState } from "react";

const AdminPage0401 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin">
      <h2 className="AdminTit">사용자활동내역</h2>
      <div className="Admin_top_box">
        <div className="left">
          <input type="text" />
          {/* <label>검색</label> */}
        </div>
        <div className="right">
          <input type="text" />
          <span>~</span>
          <input type="text" />
        </div>
      </div>
      <div className="Admincontents">
        <div className="tbl">
          <table>
            <colgroup>
              <col width="80px" />
              <col width="auto" />
              <col width="auto" />
              <col width="auto" />
            </colgroup>
            <thead>
              <tr>
                <th className="tl">
                  <div>
                    <input type="checkbox" />
                  </div>
                </th>
                <th className="tl">유버스 이름</th>
                <th className="tl">UID</th>
                <th className="tl">아이디</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
              <tr>
                <td>
                  <div>
                    <input type="checkbox" />
                  </div>
                </td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage0401;
