export function generateCSS(state, {
    forPreview = false,
    forCodeView = false
} = {}) {
    const {
        fontFamily,
        fontUrl,
        fontSize,
        lineHeight,
        fontEffect,
        fontEffectColor,
        shadowX,
        shadowY,
        shadowBlur,
        fontBold,
        blockNickname,
        boxEffect,
        boxBorder,
        boxEffectColor,
        boxShadowX,
        boxShadowY,
        boxShadowBlur,
        chatBgColor,
        chatTextColor,
        bodyBgColor,
        enableFadeOut,
        fadeDuration,
        chatMarginBottom,
        userIconSize,
        stickerSize,
        letterSpacing,
        paddingLeftRight,
        paddingTopBottom,
        showNotice,
        noticeText,
        noticeFontSize,
        noticeBgColor,
        noticeHeight,
        chatRadius,
        noticeRadius,
        showNickname,
        noticeTextColor,
    } = state;
    function rgbaToCss({ r, g, b, a }) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    const bodyExtras = forCodeView
        ? 'margin: 0 auto;\n  overflow: hidden;'
        : '';
    const rootDiv = forCodeView
        ? '#'
        : '.';
    const bodySelector = forCodeView
        ? 'body'
        : '.preview-box';
    const chattingHeight = forCodeView
        ? '100vh'
        : '100%';
    const viewchattingHeight = forCodeView
        ? ''
        : `max-height: calc(80vh - 4rem - 77px - ${noticeHeight}px) !important;`;
    const mediachattingHeight = forCodeView
        ? ''
        : `
        @media screen and (max-width: 1400px) {
            .preview-panel [class^=live_overlay_chatting] {
                max-height: calc(500px - 4rem - 77px - ${noticeHeight}px) !important;
            }
        }
        
        `;
    const fontEffectMap = {
        'thin-outline': `
[class^=live_chatting_message_text],
[class^=live_chatting_username_nickname] [class*=name_text],
[class*=live_chatting_username_has_gradient] [class^=live_chatting_username_nickname] {
  filter: drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 1px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  
}
[class*=live_chatting_username_has_gradient] [class^=live_chatting_username_nickname] [class*=name_text],
[class*=name_has_highlight] [class*=name_text] {
  filter: none;
}
`,
        'bold-outline': `
[class^=live_chatting_message_text],
[class^=live_chatting_username_nickname] [class*=name_text],
[class*=live_chatting_username_has_gradient] [class^=live_chatting_username_nickname] {
  filter: drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 2px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0.2px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0.1px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
  drop-shadow(${rgbaToCss(fontEffectColor)} 0px 0px 0px)
}
[class*=live_chatting_username_has_gradient] [class^=live_chatting_username_nickname] [class*=name_text],
[class*=name_has_highlight] [class*=name_text] {
  filter: none;
}
`,
        'shadow': `
[class^=live_chatting_message_text],
[class^=live_chatting_username_nickname] [class*=name_text],
[class*=live_chatting_username_has_gradient] [class^=live_chatting_username_nickname] {
  filter: drop-shadow(${rgbaToCss(fontEffectColor)} ${shadowX}px ${shadowY}px ${shadowBlur}px);
}
  [class*=live_chatting_username_has_gradient] [class^=live_chatting_username_nickname] [class*=name_text],
[class*=name_has_highlight] [class*=name_text] {
  filter: none;
}
`,
        'none': ''
    };
    const boxEffectMap = {
        'outline': `
  border: ${boxBorder}px solid ${rgbaToCss(boxEffectColor)}
`,
        'shadow': `
  box-shadow: ${rgbaToCss(boxEffectColor)} ${boxShadowX}px ${boxShadowY}px ${boxShadowBlur}px;
`,
        'none': ''
    };
    return `
@font-face {
  font-family: ${fontFamily};
  src: ${fontUrl};
  font-weight: 400;
  font-style: normal;
}
img,
svg {
    vertical-align: middle;
}
${bodySelector} {
  font-family: ${fontFamily};
  background-color: ${rgbaToCss(bodyBgColor)};
  ${fontBold
            ? `
  font-weight: 600;
  `
            : `
  font-weight: 400;
  `}
  ${bodyExtras}
}
[class^=live_overlay_chatting] {
  height: ${chattingHeight};
}
${showNotice
            ? `
${rootDiv}root {
  position: relative;
  padding-top: ${noticeHeight}px;
}
${rootDiv}root::before {
  content: '${noticeText}';
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${rgbaToCss(noticeTextColor)};
  background-color: ${rgbaToCss(noticeBgColor)};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: ${noticeFontSize}px !important;
  height: ${noticeHeight}px !important;
  border-radius: ${noticeRadius}px;
}
  
[class^=live_overlay_chatting] {
  height: calc(${chattingHeight} - ${noticeHeight}px);
  ${viewchattingHeight}
}

${mediachattingHeight}

`
            : ''}
[class^=live_chatting_message_wrapper] {
  font-size: ${fontSize}px !important;
  line-height: ${lineHeight}px !important;
  letter-spacing: ${letterSpacing}px !important;
  padding: ${paddingTopBottom}px ${paddingLeftRight}px !important;
}
[class^=live_chatting_username_wrapper] {
  vertical-align: middle;
}
[class^=live_overlay_item] {
  ${enableFadeOut
            ? `
    opacity: 0;
    animation-name: chatting;
    animation-duration: ${fadeDuration}s;
    animation-direction: normal;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  `
            : ''}
  background-color: ${rgbaToCss(chatBgColor)};
  border-radius: ${chatRadius}px;
  margin-bottom: ${chatMarginBottom}px;
  ${boxEffectMap[boxEffect] || ''}
}
${enableFadeOut
            ? `
@keyframes chatting {
    0%,
    100% {
        opacity: 0
    }
    1%,
    99% {
        opacity: 1
    }
}
@-webkit-keyframes chatting {
    0%,
    100% {
        opacity: 0
    }
    1%,
    99% {
        opacity: 1
    }
}
`
            : ''}
[class^=live_chatting_username_icon] img {
  width: ${userIconSize}px;
  height: ${userIconSize}px;
  position: relative;
}
[class^=live_chatting_username_icon] {
  vertical-align: top;
}
[class*=badge_container] {
  display: block;
}
${showNickname
            ? ''
            : `
[class*=live_chatting_username_container] {
  display: none;
}
  `}
${blockNickname
            ? `
[class*=live_chatting_username_container] {
  display: block;
}
  `
            : ''}
[class^=live_chatting_message_container] [class^=live_chatting_message_text] {
  color: ${rgbaToCss(chatTextColor)}!important;
  vertical-align: baseline;
}
[class^=live_chatting_message_text] img {
  width: ${stickerSize}px;
  height: ${stickerSize}px;
}
${fontEffectMap[fontEffect] || ''}
[class*=name_has_highlight] [class*=name_text] {
    margin: -2px;
    padding: 2px 4px;
    border-radius: 6px;
}
[class*=live_chatting_username_nickname] {
    font-weight: inherit;
}
`.trim();
}