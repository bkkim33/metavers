import { useEffect, useState } from "react";

const AdminPage0601 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin">
      <h2 className="AdminTit">포인트 자동 지급</h2>
      <div className="Admincontents">
        <div className="tbl line bold">
          <table>
            <colgroup>
              <col width="auto" />
              <col width="auto" />
              <col width="auto" />
            </colgroup>
            <thead>
              <tr>
                <th className="tl">활동</th>
                <th className="tl">기준</th>
                <th className="tl">포인트</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
              <tr>
                <td>로그인</td>
                <td>입장</td>
                <td>
                  <input type="number" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage0601;
