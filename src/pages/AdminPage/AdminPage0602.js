import { useEffect, useState } from "react";

const AdminPage0602 = ({ popName, setPopName }) => {
   const [isOn, setisOn] = useState(false);
   const toggleHandler = () => {
     setisOn(!isOn);
   };
   const [isOpen, setisOpen] = useState(false);
   const campusList = [
     { id: 1, name: "로그인" },
     { id: 2, name: "버스킹 참여" },
     { id: 3, name: "상담" },
     { id: 4, name: "스터디윗미" },
   ];
   const [selectedItem, setSelectedItem] = useState({ id: 0, name: "항목" });


  return (
    <div className="SpaceAdmin col2">
      <h2 className="AdminTit">포인트 지급/차감</h2>
      <div className="Admincontents col2 min">
        <div className="col_box pd">
          <h3 className="line">포인트</h3>
          <div className="point">
            <div className="point_user">
              <div className="choice_user_b">
                <ul>
                  {/* <li>
                    <p>사용자 아이디</p>
                    <button>삭제</button>
                  </li> */}
                </ul>
              </div>
              <button className="ico_btn_b">
                <img src="/resources/img/ico_plus_c.svg" />
                <span>계정추가</span>
              </button>
            </div>
          </div>
          <h3>
            포인트 입력 <span>(숫자만 작성 가능)</span>
          </h3>
          <div className="point_opt">
            <input type="number" />
            <div className="ui_select_admin">
              <button
                type="button"
                className={`select_trigger ${isOpen ? `open` : ""}`}
                onClick={() => {
                  setisOpen(!isOpen);
                }}
              >
                {selectedItem && <span>{selectedItem.name}</span>}
              </button>
              {isOpen && (
                <ul className="select_layer">
                  {campusList.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        className="option"
                        onClick={(e) => {
                          setSelectedItem(item);
                          setisOpen(!isOpen);
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {/* {selectedItem && (
                <ul
                  className="select_layer"
                  style={{ position: "relative", top: "0", zIndex: 1 }}
                >
                  <li>
                    <button type="button" className="option">
                      {selectedItem.name}
                    </button>
                  </li>
                </ul>
              )} */}
            </div>
          </div>
          <div className="fot_btn">
            <button type="button" className="AdminBtn small on">
              차감하기
            </button>
            <button type="button" className="AdminBtn small on02">
              지급하기
            </button>
          </div>
        </div>
      </div>
      <div className="Admincontents col2">
        <div className="col_box pd">
          <h3>
            지급/차감 이력
            <span>(7일간 저장 후 삭제 됩니다.)</span>
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
                  <th className="tl">지급/차감</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>50</td>
                  <td>차감</td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>50</td>
                  <td>차감</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage0602;
