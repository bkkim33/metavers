import { useEffect, useState } from "react";

const AdminPage0403 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin">
      <h2 className="AdminTit">화이트리스트</h2>
      <div className="Admin_top_box">
        <div className="left">
          <select>
            <option>스페이스 목록</option>
            <option>스페이스 목록</option>
            <option>스페이스 목록</option>
            <option>스페이스 목록</option>
            <option>스페이스 목록</option>
          </select>
        </div>
        <div className="right">
          <input type="text" />
          {/* <label>검색</label> */}
        </div>
      </div>
      <div className="Admincontents">
        <div className="tbl">
          <table>
            <colgroup>
              <col width="200px" />
              <col width="200px" />
              <col width="200px" />
              <col width="auto" />
              <col width="200px" />
            </colgroup>
            <thead>
              <tr>
                <th className="tl">날짜</th>
                <th className="tl">시간</th>
                <th className="tl">닉네임</th>
                <th className="tl">UID</th>
                <th className="tl"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
              <tr>
                <td>2023-05-10</td>
                <td>이름영역</td>
                <td>UID 영역</td>
                <td>아이디</td>
                <td>
                  <button type="button" className="AdminBtn small on02">
                    해제
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="Admin_fot_btn">
        <button type="button" className="AdminBtn small on">
          계정 추가하기
        </button>
      </div>
    </div>
  );
};

export default AdminPage0403;
