import React, { useState, useRef, useEffect } from 'react';
import { RgbaColorPicker } from 'react-colorful';

function ColorPickerField({ label, color, onChange, disabled, allowTransparent = true }) {
    const [showPicker, setShowPicker] = useState(false);
    const [useTransparent, setUseTransparent] = useState(color.a === 0);
    const [inputValue, setInputValue] = useState(rgbaToCss(color));

    const pickerRef = useRef(null); // 👈 컬러 피커 박스 참조

    useEffect(() => {
        function handleClickOutside(e) {
            if (pickerRef.current && !pickerRef.current.contains(e.target)) {
                setShowPicker(false);
            }
        }
        if (showPicker) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPicker]);

    function rgbaToCss({ r, g, b, a }) {
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }

    useEffect(() => {
        setInputValue(rgbaToCss(color));
        setUseTransparent(color.a === 0);
    }, [color]);

    function cssToRgba(input) {
        const regex = /rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([0-9.]+)?\)/i;
        const match = input.match(regex);
        if (match) {
            return {
                r: Number(match[1]),
                g: Number(match[2]),
                b: Number(match[3]),
                a: match[4] !== undefined ? Number(match[4]) : 1
            };
        }
        return null;
    }

    function getContrastTextColor({ r, g, b }) {
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? '#000' : '#fff';
    }

    const handleColorChange = (newColor) => {
        const finalColor = useTransparent && allowTransparent
            ? { ...newColor, a: 0 }
            : { ...newColor, a: newColor.a ?? 1 };

        setInputValue(rgbaToCss(finalColor));
        onChange(finalColor);
    };

    const handleTransparentToggle = (e) => {
        const isChecked = e.target.checked;
        setUseTransparent(isChecked);
        const updated = { ...color, a: isChecked ? 0 : 1 };
        setInputValue(rgbaToCss(updated));
        onChange(updated);
    };

    const handleInputChange = (e) => {
        const val = e.target.value;
        setInputValue(val);
        const parsed = cssToRgba(val);
        if (parsed) {
            setUseTransparent(parsed.a === 0);
            onChange(parsed);
        }
    };

    return (
        <div className="color_picker" style={{ position: 'relative' }}>
            <label>
                <span className="label">{label}</span>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={() => !disabled && setShowPicker(!showPicker)}
                    disabled={disabled}
                    style={{
                        width: '100%',
                        height: '34.4px',
                        padding: '6px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        boxSizing: 'border-box',
                        backgroundColor: rgbaToCss(color),
                        color: color.a === 0 ? '#aaa' : getContrastTextColor(color),
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        opacity: disabled ? 0.3 : 1,
                    }}
                />
            </label>

            {showPicker && !disabled && (
                <div
                    ref={pickerRef}
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 999,
                        marginTop: '6px',
                        background: '#fff',
                        padding: '12px',
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                    }}
                >
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
