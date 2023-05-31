import { useEffect, useState } from "react";

const AdminPage04 = ({ popName, setPopName }) => {
  const [isOn, setisOn] = useState(false);
  const toggleHandler = () => {
    setisOn(!isOn);
  };

  return (
    <div className="SpaceAdmin col2">
      <div className="AdminTit center">
        <button> 처음 </button>
        <button> 이전 </button>
        <h2>2023. 05. 08 ~ 2023. 05. 12</h2>
        <button> 다음 </button>
        <button> 마지막 </button>
      </div>
      <div className="Admincontents col2">
        <h3>방문자 수</h3>
        <div className="col_box">
          <div className="grap">그래프 영역</div>
          <div className="grap_info">
            <dl className="info">
              <dt>오늘 방문자 수</dt>
              <dd>17</dd>
            </dl>
            <dl className="info">
              <dt>오늘 방문자 수</dt>
              <dd>17</dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="Admincontents col2">
        <h3 className="tit">
          <span>가입자 수</span>
          <dl className="info">
            <dt>전체 가입자 수</dt>
            <dd className="red">17</dd>
          </dl>
        </h3>
        <div className="col_box">
          <div className="grap">그래프 영역</div>
          <div className="grap_info">
            <dl className="info">
              <dt>오늘 방문자 수</dt>
              <dd>17</dd>
            </dl>
            <dl className="info">
              <dt>오늘 방문자 수</dt>
              <dd>17</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage04;
