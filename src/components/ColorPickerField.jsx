import React, { useState } from 'react';
import { RgbaColorPicker } from 'react-colorful';
function ColorPickerField({ label, color, onChange, disabled, allowTransparent = true }) {
    const [showPicker, setShowPicker] = useState(false);
    const [useTransparent, setUseTransparent] = useState(color.a === 0);
    function rgbaToCss({ r, g, b, a }) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    const boxStyle = {
        width: '100%',
        height: '34.4px',
        border: '1px solid #ccc',
        display: 'block',
        backgroundColor: rgbaToCss(color),
        cursor: disabled ? 'not-allowed' : 'pointer',
        verticalAlign: 'text-bottom',
        opacity: disabled ? 0.3 : 1,
        borderRadius: 6
    };
    const handleColorChange = (newColor) => {
        if (useTransparent && allowTransparent) {
            onChange({ ...newColor, a: 0 });
        } else {
            onChange({ ...newColor, a: newColor.a ?? 1 });
        }
    };
    const handleTransparentToggle = (e) => {
        const isChecked = e.target.checked;
        setUseTransparent(isChecked);
        if (isChecked) {
            onChange({ ...color, a: 0 });
        } else {
            onChange({ ...color, a: 1 });
        }
    };
    return (
        <div className='color_picker'>
            <label>
                <span className='label'>{label}</span>
                <span
                    style={boxStyle}
                    onClick={() => !disabled && setShowPicker(!showPicker)}
                />
                
            </label>
                {showPicker && !disabled && (
                    <div style={{ marginTop: '8px' }}>
                        <RgbaColorPicker color={color} onChange={handleColorChange} />
                        {allowTransparent && (
                            <label style={{ display: 'block', marginTop: '6px' }}>
                                <input
                                    type="checkbox"
                                    checked={useTransparent}
                                    onChange={handleTransparentToggle}
                                />{' '}
                                투명하게
                            </label>
                        )}
                    </div>
                )}
        </div>
    );
}
export default ColorPickerField;
