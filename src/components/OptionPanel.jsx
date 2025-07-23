import React from 'react';
import useCssStore from '../store/useCssStore';
import ColorPickerField from './ColorPickerField';
function OptionPanel() {
    const {
        fontFamily, setFontFamily,
        fontSize, setFontSize,
        lineHeight, setLineHeight,
        fontEffect, setFontEffect,
        fontEffectColor, setFontEffectColor,
        shadowX, setShadowX,
        shadowY, setShadowY,
        shadowBlur, setShadowBlur,
        boxEffect, setBoxEffect,
        boxEffectColor, setBoxEffectColor,
        boxBorder, setBoxBorder,
        boxShadowX, setBoxShadowX,
        boxShadowY, setBoxShadowY,
        boxShadowBlur, setBoxShadowBlur,
        chatBgColor, setChatBgColor,
        chatTextColor, setChatTextColor,
        bodyBgColor, setBodyBgColor,
        enableFadeOut, setEnableFadeOut,
        fadeDuration, setFadeDuration,
        chatMarginBottom, setChatMarginBottom,
        userIconSize, setUserIconSize,
        stickerSize, setStickerSize,
        showNotice, setShowNotice,
        noticeText, setNoticeText,
        noticeFontSize, setNoticeFontSize,
        noticeBgColor, setNoticeBgColor,
        noticeHeight, setNoticeHeight,
        chatRadius, setChatRadius,
        noticeRadius, setNoticeRadius,
        showNickname, setShowNickname,
        fontBold, setFontBold,
        blockNickname, setBlockNickname,
        noticeTextColor, setNoticeTextColor,
        viewerNickname, setViewerNickname,
        letterSpacing, setLetterSpacing,
        paddingLeftRight, setPaddingLeftRight,
        paddingTopBottom, setPaddingTopBottom,
        nameBgColor, setNameBgColor,
        nameColor, setNameColor,
        nameColorCheck, setNameColorCheck
    } = useCssStore();
    const fontList = [
        {
            name: `'CookieRun-Regular'`,
            label: 'CookieRun',
            url: `url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/CookieRun-Regular.woff') format('woff')`
        },
        {
            name: `'SeoulAlrimTTF-Heavy'`,
            label: '서울알림체',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/2505-1@1.0/SeoulAlrimTTF-Heavy.woff2') format('woff2')`
        },
        {
            name: `'NanumSquareNeo'`,
            label: '나눔스퀘어 네오',
            url: `url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.eot?#iefix) format("embedded-opentype"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.woff) format("woff"), url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumSquareNeo/NanumSquareNeoTTF-bRg.ttf) format("truetype")`
        },
        {
            name: `'ONE-Mobile-POP'`,
            label: '원스토어 모바일POP체',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff') format('woff')`
        },
        {
            name: `'DungGeunMo'`,
            label: '둥근모꼴',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff')`
        },
        {
            name: `'TheJamsil5Bold'`,
            label: '더잠실체',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302_01@1.0/TheJamsil5Bold.woff2') format('woff2')`
        },
        {
            name: `'KCC-Ganpan'`,
            label: 'KCC간판체',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2')`
        },
        {
            name: `'S-CoreDream-3Light'`,
            label: '에스코어드림',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff')`
        },
        {
            name: `'Paperlogy'`,
            label: '페이퍼로지',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-3@1.0/Paperlogy-8ExtraBold.woff2') format('woff2')`
        },
        {
            name: `'Cafe24Supermagic-Bold-v1.0'`,
            label: '카페24슈퍼매직',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-2@1.0/Cafe24Supermagic-Bold-v1.0.woff2') format('woff2')`
        },
        {
            name: `'HakgyoansimNadeuriTTF-B'`,
            label: '학교안심 나들이',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimNadeuriTTF-B.woff2') format('woff2')`
        },
        {
            name: `'HakgyoansimChilpanjiugaeTTF-B'`,
            label: '학교안심 칠판지우개',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimChilpanjiugaeTTF-B.woff2') format('woff2')`
        },
        {
            name: `'HakgyoansimGeurimilgiTTF-R'`,
            label: '학교안심 그림일기',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/2408-5@1.0/HakgyoansimGeurimilgiTTF-R.woff2') format('woff2')`
        },
        {
            name: `'Bareun_hipi'`,
            label: '바른히피',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_01@1.0/Bareun_hipi.woff') format('woff')`
        },
        {
            name: `'Hana_handwriting'`,
            label: '하나손글씨',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/naverfont_05@1.0/Hana_handwriting.woff') format('woff')`
        },
        {
            name: `'RIDIBatang'`,
            label: '리디바탕',
            url: `url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff')`
        },
    ];
    return (
        <div className='option-wrapper'>
            <div className='chatting_row'>
                <label>
                    <span className='label'>시청자 별명 (글자길이 테스트용)</span>
                    <input
                        type="text"
                        value={viewerNickname}
                        onChange={(e) => setViewerNickname(e.target.value)}
                    />
                </label>
            </div>
            <div className='chatting_row'>
                <ColorPickerField
                    label="전체 배경색 (투명 사용을 권장합니다.)"
                    color={bodyBgColor}
                    onChange={setBodyBgColor}
                    allowTransparent={true}
                />
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>글꼴 선택</span>
                    <select
                        value={fontFamily}
                        onChange={(e) => {
                            const selected = fontList.find(f => f.name === e.target.value);
                            if (selected) {
                                setFontFamily(selected.name, selected.url);
                            }
                        }}
                    >
                        {fontList.map(font => (
                            <option key={font.name} value={font.name}>{font.label}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>글자 크기 <span className="range-size">{fontSize}px</span></span>
                    <input type="range" min="14" max="64" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='inline_label'>글자 두껍게</span>
                    <input type="checkbox" checked={fontBold} onChange={e => setFontBold(e.target.checked)} />
                </label>
            </div>
            <div className='chatting_row'>
                <fieldset>
                    <span className='label'>글자 효과</span>
                    <label><input type="radio" name="fontEffect" value="none" checked={fontEffect === 'none'} onChange={e => setFontEffect(e.target.value)} />효과 없음</label>
                    <label><input type="radio" name="fontEffect" value="thin-outline" checked={fontEffect === 'thin-outline'} onChange={e => setFontEffect(e.target.value)} />글자 테두리 얇게</label>
                    <label><input type="radio" name="fontEffect" value="bold-outline" checked={fontEffect === 'bold-outline'} onChange={e => setFontEffect(e.target.value)} />글자 테두리 두껍게</label>
                    <label><input type="radio" name="fontEffect" value="shadow" checked={fontEffect === 'shadow'} onChange={e => setFontEffect(e.target.value)} />글자 그림자</label>
                </fieldset>
                {fontEffect !== 'none' && (
                    <div className="effectOptions">
                        <ColorPickerField
                            label="글자 효과 및 테두리 색상"
                            color={fontEffectColor}
                            onChange={setFontEffectColor}
                            allowTransparent={false}
                        />
                        {fontEffect === 'shadow' && (
                            <>
                                <label>
                                    <span className='label'>
                                        그림자 X 오프셋 <span className="range-size">{shadowX}px</span>
                                    </span>
                                    <input
                                        type="range"
                                        min="-10"
                                        max="10"
                                        value={shadowX}
                                        onChange={e => setShadowX(Number(e.target.value))}
                                    />
                                </label>
                                <label>
                                    <span className='label'>
                                        그림자 Y 오프셋 <span className="range-size">{shadowY}px</span>
                                    </span>
                                    <input
                                        type="range"
                                        min="-10"
                                        max="10"
                                        value={shadowY}
                                        onChange={e => setShadowY(Number(e.target.value))}
                                    />
                                </label>
                                <label>
                                    <span className='label'>
                                        그림자 흐림 <span className="range-size">{shadowBlur}px</span>
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        value={shadowBlur}
                                        onChange={e => setShadowBlur(Number(e.target.value))}
                                    />
                                </label>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>줄 간격 <span className="range-size">{lineHeight}px</span></span>
                    <input type="range" min="18" max="100" value={lineHeight} onChange={e => setLineHeight(Number(e.target.value))} />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>글자 간격 <span className="range-size">{letterSpacing}px</span></span>
                    <input
                        type="range"
                        min="-2"
                        max="10"
                        step="0.1"
                        value={letterSpacing}
                        onChange={(e) => setLetterSpacing(parseFloat(e.target.value))}
                    />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>채팅 상하 여백 <span className="range-size">{paddingTopBottom}px</span></span>
                    <input
                        type="range"
                        min="0"
                        max="24"
                        step="1"
                        value={paddingTopBottom}
                        onChange={(e) => setPaddingTopBottom(parseFloat(e.target.value))}
                    />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>채팅 좌우 여백 <span className="range-size">{paddingLeftRight}px</span></span>
                    <input
                        type="range"
                        min="0"
                        max="36"
                        step="1"
                        value={paddingLeftRight}
                        onChange={(e) => setPaddingLeftRight(parseFloat(e.target.value))}
                    />
                </label>
            </div>
            <div className='chatting_row'>
                <ColorPickerField
                    label="채팅 배경색"
                    color={chatBgColor}
                    onChange={setChatBgColor}
                    allowTransparent={true}
                />
            </div>
            <div className='chatting_row'>
                <ColorPickerField label="채팅 글자색" color={chatTextColor} onChange={setChatTextColor} allowTransparent={false} />
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>채팅 박스 둥글기 <span className="range-size">{chatRadius}px</span></span>
                    <input type="range" min="0" max="48" value={chatRadius} onChange={e => setChatRadius(Number(e.target.value))} />
                </label>
            </div>
            <div className='chatting_row'>
                <fieldset>
                    <span className='label'>채팅 박스 효과</span>
                    <label><input type="radio" name="boxEffect" value="none" checked={boxEffect === 'none'} onChange={e => setBoxEffect(e.target.value)} />효과 없음</label>
                    <label><input type="radio" name="boxEffect" value="outline" checked={boxEffect === 'outline'} onChange={e => setBoxEffect(e.target.value)} />박스 테두리</label>
                    <label><input type="radio" name="boxEffect" value="shadow" checked={boxEffect === 'shadow'} onChange={e => setBoxEffect(e.target.value)} />박스 그림자</label>
                </fieldset>
                {boxEffect !== 'none' && (
                    <div className="effectOptions">
                        <ColorPickerField
                            label="채팅 박스 효과 및 테두리 색상"
                            color={boxEffectColor}
                            onChange={setBoxEffectColor}
                            allowTransparent={true}
                        />
                        {boxEffect === 'outline' && (
                            <label>
                                <span className='label'>
                                    채팅 박스 테두리 두께 <span className="range-size">{boxBorder}px</span>
                                </span>
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
                                    value={boxBorder}
                                    onChange={e => setBoxBorder(Number(e.target.value))}
                                />
                            </label>
                        )}
                        {boxEffect === 'shadow' && (
                            <>
                                <label>
                                    <span className='label'>
                                        채팅 박스 그림자 X 오프셋 <span className="range-size">{boxShadowX}px</span>
                                    </span>
                                    <input
                                        type="range"
                                        min="-10"
                                        max="10"
                                        value={boxShadowX}
                                        onChange={e => setBoxShadowX(Number(e.target.value))}
                                    />
                                </label>
                                <label>
                                    <span className='label'>
                                        채팅 박스 그림자 Y 오프셋 <span className="range-size">{boxShadowY}px</span>
                                    </span>
                                    <input
                                        type="range"
                                        min="-10"
                                        max="10"
                                        value={boxShadowY}
                                        onChange={e => setBoxShadowY(Number(e.target.value))}
                                    />
                                </label>
                                <label>
                                    <span className='label'>
                                        채팅 박스 그림자 흐림 <span className="range-size">{boxShadowBlur}px</span>
                                    </span>
                                    <input
                                        type="range"
                                        min="0"
                                        max="20"
                                        value={boxShadowBlur}
                                        onChange={e => setBoxShadowBlur(Number(e.target.value))}
                                    />
                                </label>
                            </>
                        )}
                    </div>
                )}
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='inline_label'>채팅 사라짐 효과 사용</span>
                    <input type="checkbox" checked={enableFadeOut} onChange={e => setEnableFadeOut(e.target.checked)} />
                </label>
                {enableFadeOut && (
                <div className="effectOptions">
                    <label>
                        <span className='label'>채팅 유지 시간 <span className="range-size">{fadeDuration}초</span></span>
                        <input type="range" min="10" max="60" value={fadeDuration} onChange={e => setFadeDuration(Number(e.target.value))} />
                    </label>
                </div>
                )}
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>채팅 사이 간격 <span className="range-size">{chatMarginBottom}px</span></span>
                    <input type="range" min="0" max="50" value={chatMarginBottom} onChange={e => setChatMarginBottom(Number(e.target.value))} />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='inline_label'>시청자 이름 보이기</span>
                    <input type="checkbox" checked={showNickname} onChange={e => setShowNickname(e.target.checked)} />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='inline_label'>시청자 이름 줄바꿈</span>
                    <input type="checkbox" checked={blockNickname} onChange={e => setBlockNickname(e.target.checked)} />
                </label>
                {blockNickname && (
                <div className='effectOptions'>
                {/* 방송공지 사용 체크시 노출 */}
                    <ColorPickerField label="이름 배경색" color={nameBgColor} onChange={setNameBgColor} allowTransparent={true} />
                </div>
                )}
            </div>
            <div className="chatting_row">
                    <label>
                        <span className='inline_label'>시청자 이름 글자색 강제설정</span>
                        <input type="checkbox" checked={nameColorCheck} onChange={e => setNameColorCheck(e.target.checked)} />
                    </label>
                    {nameColorCheck && (
                        <ColorPickerField label="" color={nameColor} onChange={setNameColor} allowTransparent={false} />
                    )}
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>뱃지 크기 <span className="range-size">{userIconSize}px</span></span>
                    <input type="range" min="24" max="48" value={userIconSize} onChange={e => setUserIconSize(Number(e.target.value))} />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='label'>이모티콘 크기 <span className="range-size">{stickerSize}px</span></span>
                    <input type="range" min="24" max="96" value={stickerSize} onChange={e => setStickerSize(Number(e.target.value))} />
                </label>
            </div>
            <div className='chatting_row'>
                <label>
                    <span className='inline_label'>방송 공지 사용</span>
                    <input type="checkbox" checked={showNotice} onChange={e => setShowNotice(e.target.checked)} />
                </label>
                {showNotice && (
                <div className='effectOptions'>
                {/* 방송공지 사용 체크시 노출 */}
                    <label>
                        <span className='label'>공지 내용</span>
                        <input type="text" value={noticeText} onChange={e => setNoticeText(e.target.value)} />
                    </label>

                    <label>
                        <span className='label'>공지 글자 크기 <span className="range-size">{noticeFontSize}px</span></span>
                        <input type="range" min="16" max="64" value={noticeFontSize} onChange={e => setNoticeFontSize(Number(e.target.value))} />
                    </label>

                    <ColorPickerField label="공지 글자색" color={noticeTextColor} onChange={setNoticeTextColor} allowTransparent={false} />

                    <ColorPickerField
                        label="공지 배경색"
                        color={noticeBgColor}
                        onChange={setNoticeBgColor}
                        allowTransparent={true}
                    />
                    <label>
                        <span className='label'>공지 높이 <span className="range-size">{noticeHeight}px</span></span>
                        <input type="range" min="40" max="100" value={noticeHeight} onChange={e => setNoticeHeight(Number(e.target.value))} />
                    </label>
                    <label>
                        <span className='label'>공지 박스 둥글기 <span className="range-size">{noticeRadius}px</span></span>
                        <input type="range" min="0" max="48" value={noticeRadius} onChange={e => setNoticeRadius(Number(e.target.value))} />
                    </label>
                {/* 방송공지 사용 체크시 노출 */}
                </div>
                )}
            </div>
        </div>
    );
}
export default OptionPanel;
