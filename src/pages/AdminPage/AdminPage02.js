import { useEffect, useState } from "react";

const AdminPage02 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin">
      <h2 className="AdminTit">강사 설정</h2>
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
      <div className="Admin_fot_btn">
        <button type="button" className="AdminBtn small on">
          계정 추가하기
        </button>
        <button type="button" className="AdminBtn small on02">
          삭제
        </button>
      </div>
    </div>
  );
};

export default AdminPage02;
