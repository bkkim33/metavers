import { useEffect, useState } from "react";

const AdminPage05 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin col2">
      <h2 className="AdminTit">메세지 관리</h2>
      <div className="Admincontents col2 min">
        <div className="col_box pd">
          <h3 className="line">관리자 메시지 보내기</h3>
          <dl className="user">
            <dt>수신자</dt>
            <dd>
              <div className="message_user">
                <div className="choice_user_b">
                  <ul>
                    <li>
                      <p>사용자 아이디</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자 아이디</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자 아이디</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자 아이디</p>
                      <button>삭제</button>
                    </li>
                    <li>
                      <p>사용자</p>
                      <button>삭제</button>
                    </li>
                  </ul>
                </div>
                <button className="ico_btn_b">
                  <img src="/resources/img/ico_plus_c.svg" />
                  <span>계정추가</span>
                </button>
              </div>
            </dd>
          </dl>
          <h3>메시지 내용</h3>
          <div className="message">
            <textarea placeholder="내용을 입력해주세요."></textarea>
          </div>
          <div className="fot_btn">
            <button type="button" className="AdminBtn small on">
              보내기
            </button>
          </div>
        </div>
      </div>
      <div className="Admincontents col2">
        <div className="col_box pd">
          <h3 className="tit">
            메시지 이력
            <dl className="date_box">
              <dt>날짜</dt>
              <dd>
                <div>
                  <input type="text" value="23-03-22" />
                  <label>
                    <img src="/resources/img/ico_date20x20.svg" />
                  </label>
                </div>
                <span>~</span>
                <div>
                  <input type="text" value="23-03-22" />
                  <label>
                    <img src="/resources/img/ico_date20x20.svg" />
                  </label>
                </div>
              </dd>
            </dl>
          </h3>
          <div className="tbl bg">
            <table>
              <colgroup>
                <col width="120px" />
                <col width="100px" />
                <col width="130px" />
                <col width="auto" />
                <col width="160px" />
              </colgroup>
              <thead>
                <tr>
                  <th className="tl">날짜</th>
                  <th className="tl">시간</th>
                  <th className="tl">수신자</th>
                  <th colSpan="2" className="tl">
                    메시지 내용
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2023-03-20</td>
                  <td>00:13:05</td>
                  <td>전체사용자</td>
                  <td>
                    <span>숙명여대 더본코리아 이벤트가 시작됩니다.</span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className={`AdminBtn small on02`}
                      onClick={toggleHandler}
                    >
                      내용 보기
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage05;
