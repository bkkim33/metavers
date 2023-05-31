import { useEffect, useState } from "react";

const NpcTourEnd = ({ popName, setPopName }) => {

    const [isMark, setisMark] = useState(false);
    const [isOn, setisOn] = useState(false);
    const toggleHandler = () => {
    setisOn(!isOn);
    };

    return (
    <>
        <div className="Npc-guide">
            <button type="button" className="subclose close16" onClick={(e) => {setPopName('TourEnd');}} />
            <div className="popTit">유버스의 안내 NPC</div>
            <img className="Npc-img" src="/resources/img/npc.png" alt="NPC 이미지" />
            <div className="con-wrap">
                <div className="con-inner-col">
                    <div className="Invite-guide tit-15Bk">
                        안녕! 나는 유버스야 ^^ 앞으로 잘 부탁해!<br />
                        여긴 도서관이야~! 들어가서 열심히 공부도 하고 랭킹도 올려봐!
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                        {/* 안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니?안녕! 캠퍼스에 대한 정보를 알고싶니? */}
                    </div>
                    <button type="button" className="skip-btn" onClick={(e) => {setPopName();}}>
                        다음
                        <span className="skip12"></span>
                    </button>
                </div>
            </div>
        </div>
    </>
    );
};
export default NpcTourEnd;
