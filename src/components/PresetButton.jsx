import { chatStylePresets } from '../data/presets';
import useCssStore from '../store/useCssStore';

function PresetButtons() {
  const applyPreset = useCssStore((state) => state.applyPreset);

  return (
    <div className="preset-buttons">
      <button onClick={() => applyPreset(chatStylePresets.default)}>기본</button>
      <button onClick={() => applyPreset(chatStylePresets.textBalloon)}>말풍선</button>
      <button onClick={() => applyPreset(chatStylePresets.postIt)}>포스트잇</button>
      <button onClick={() => applyPreset(chatStylePresets.square)}>깔끔네모</button>
      <button onClick={() => applyPreset(chatStylePresets.code)}>8bit</button>
      <button onClick={() => applyPreset(chatStylePresets.textOnly)}>심플매직</button>
      <button onClick={() => applyPreset(chatStylePresets.ebook)}>E-Book</button>
      {/* 추가 프리셋 버튼들 */}
    </div>
  );
}

export default PresetButtons;