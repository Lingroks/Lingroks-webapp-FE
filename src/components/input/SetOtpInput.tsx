'use client'
import React, { useRef } from 'react';

const SetOtpInput = ({value, onChange}) => {
    const inputs = useRef([]);

    const handleChange = (e, index) => {
        const digit = e.target.value.replace(/\D/g, '');

        if (digit) {
            const newOtp = [...value];
            newOtp[index] = digit;
            onChange(newOtp.join(''));
            if (index < 3) {
                inputs.current[index + 1]?.focus();
            }
        }
    }

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            const newOtp = [...value];
            if (value[index]) {
                newOtp[index] = '';
                onChange(newOtp.join(''));
            } else if (index > 0) {
                inputs.current[index - 1]?.focus();
            }
        }
    }

    const handlePaste = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text');
        if (paste.length === 4) {
            onChange(paste);
        }
    }

    return(
        <div className="flex space-x-2">
            {Array(4).fill('').map((_, index) => (
                <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value= {value[index] || ''}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                ref={(el) => inputs.current[index] = el}
                className="w-12 h-12 text-center border rounded-lg"
                />
            ))} 
        </div>
    )
}

export default SetOtpInput;