import { useEffect, useState } from "react";

const AdminPage0603 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin col2">
      <div className="Admincontents col2 h100">
        <h2 className="AdminTit">사용자 포인트 내역</h2>
        <div className="col_box pd">
          <h3 className="tlt flex minh">
            개별 포인트 보유 현황
            <input type="text" />
            {/* <label>검색</label> */}
          </h3>
          <div className="tbl bg">
            <table>
              <colgroup>
                <col width="180px" />
                <col width="auto" />
              </colgroup>
              <thead>
                <tr>
                  <th className="tl">닉네임</th>
                  <th className="tl">보유 포인트</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>전체사용자</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>전체사용자</td>
                  <td>1,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="Admincontents col2 h100">
        <h2 className="AdminTit">
          <dl>
            <dt>전체 사용자 포인트 보유 현황 : </dt>
            <dd className="point">
              <span>120,999</span>P
            </dd>
          </dl>
        </h2>
        <div className="col_box pd">
          <h3 className="minh">
            포인트 활동 내역
            <span>(3일간 저장 후 삭제 됩니다.)</span>
          </h3>
          <div className="tbl bg">
            <table>
              <colgroup>
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
                <col width="auto" />
              </colgroup>
              <thead>
                <tr>
                  <th className="tl">날짜</th>
                  <th className="tl">시간</th>
                  <th className="tl">닉네임</th>
                  <th className="tl">포인트</th>
                  <th className="tl">활동내역</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>+ 50</td>
                  <td>지급</td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>+ 50</td>
                  <td>자동 지급</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage0603;
