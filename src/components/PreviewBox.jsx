import React from 'react';
import { useState } from 'react'; // import React 있는 줄에 추가
import useCssStore from '../store/useCssStore';
import { generateCSS } from '../utils/generateCSS';
import fan from './img/fan_03.png'
import gold from './img/gold.png'
import icon1 from './img/icon1.png'
import bg1 from './img/bg1.jpg';
import bg2 from './img/bg2.jpg';
import bg3 from './img/bg3.jpg';

import './css/default.css'
function PreviewBox() {
    const cssState = useCssStore((state) => state);
    const viewerNickname = useCssStore((state) => state.viewerNickname);
    const cssCode = generateCSS(cssState, { forPreview: true });
    const previewScale = cssState.previewScale;
    const setPreviewScale = cssState.setPreviewScale;
    const [bgImage, setBgImage] = useState(bg1);

    return (
        <div
            className="preview-panel"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className='preview-wrapper'>
                <div className='live-wrapper'>
                    <h2 style={{ color: bgImage === bg2 ? '#000000' : undefined }}>실시간 미리보기
                        <p>(배율은 반영되지 않습니다. obs등에서 직접 사이즈 조절해주세요.)</p>
                    </h2>
                    <style>{cssCode}</style>
                    <div className='button-wrapper' style={{ marginBottom: 12 }}>
                        <button onClick={() => setPreviewScale(0.5)}>0.5배</button>
                        <button onClick={() => setPreviewScale(0.75)}>0.75배</button>
                        <button onClick={() => setPreviewScale(1)}>1배</button>
                        <button onClick={() => setBgImage(bg1)}>기본 배경</button>
                        <button onClick={() => setBgImage(bg2)}>밝은 배경</button>
                        <button onClick={() => setBgImage(bg3)}>어두운 배경</button>
                    </div>
                </div>
                <div className="preview-box">
                    <div className="root" style={{ transform: `scale(${previewScale})` }}>
                        <div className="live_overlay_chatting__gG7gu">
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_wrapper__iJpJB"><span className="live_chatting_username_icon__6Dj7b"><span className="badge_container__a64XB"><img src={gold} alt="" width="28" height="28" /></span></span><span className="live_chatting_username_icon__6Dj7b"><span className="badge_container__a64XB"><img src={icon1} alt="" width="28" height="28" /></span></span><span className="live_chatting_username_icon__6Dj7b"><span className="badge_container__a64XB"><img src={fan} alt="" width="28" height="28" /></span></span></span><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgb(255, 255, 255)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">님이 1,000치즈를 후원했습니다.<br />치즈후원테스트입니다.<img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /><img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /></span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_wrapper__iJpJB"><span className="live_chatting_username_icon__6Dj7b"><span className="badge_container__a64XB"><img src={icon1} alt="" width="28" height="28" /></span></span></span><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgba(20, 21, 23, 0)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">투명닉네임적용테스트</span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_wrapper__iJpJB"><span className="live_chatting_username_icon__6Dj7b"><span className="badge_container__a64XB"><img src={icon1} alt="" width="28" height="28" /></span></span></span><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgb(201, 206, 220)` }}><span className="name_has_highlight__jLpxr"><span className="name_text__yQG50" style={{ backgroundColor: `rgb(62, 18, 82)` }}>{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">하이라이트닉네임테스트</span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr live_chatting_username_has_gradient__zFzFH" style={{ marginRight: 6 }}><span className="live_chatting_username_wrapper__iJpJB"><span className="live_chatting_username_icon__6Dj7b"><span className="badge_container__a64XB"><img src={fan} alt="" width="28" height="28" /></span></span></span><span className="live_chatting_username_nickname__dDbbj" style={{ backgroundImage: `linear-gradient(to right, rgb(243, 230, 89), rgb(254, 122, 134))`, color: `rgb(243, 230, 89)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">그라디언트닉네임테스트</span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgb(173, 210, 222)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">안녕하세요. 형광팬 시청자 입니다. 긴글 테스트입니다. 긴글은 이렇게 들어갑니다. 하지만 너무나 만들고 향할 것 향할 없든 리가 꽃잎을 이렇게 생명이 일편단심 까닭입니다. 나는 무엇인지 백골이 까닭입니다. 살았었다 향해 소멸시키는 먼지와 가난한 붉은 가실 가을 이었다.<img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /><img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /></span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgb(173, 210, 222)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">짧은글 테스트 입니다.</span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgb(173, 210, 222)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH"><img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /><img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /></span></div>
                                </div>
                            </div>
                            <div className="live_overlay_item__Sg18i live_overlay_message__lLCT1">
                                <div className="live_chatting_message_container__vrI-y live_chatting_message_is_overlay__cALCf">
                                    <div className="live_chatting_message_wrapper__xpYre"><span className="live_chatting_username_container__m1-i5 live_chatting_username_is_message__jvTvP live_chatting_username_is_overlay__A8Xmr" style={{ marginRight: 6 }}><span className="live_chatting_username_nickname__dDbbj" style={{ color: `rgb(173, 210, 222)` }}><span className=""><span className="name_text__yQG50">{viewerNickname}</span></span></span></span><span className="live_chatting_message_text__DyleH">짧은글 테스트 입니다.<img alt="" src="https://ssl.pstatic.net/static/nng/glive/icon/c_05.png?type=f60_60" /></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PreviewBox;