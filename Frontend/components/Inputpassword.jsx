import { useState } from "react"


export function Inputpassword({ label, placeholder, onChange }) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        <label>
        <div className="text-sm font-medium text-left py-2">
            {label}
                </div>
                <div className="relative w-72">

                    <input type={showPassword ? "text" : "password"} onChange={onChange} className="w-full px-2 py-1 border rounded border-slate-200" placeholder={placeholder} />
                    
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => { setShowPassword(!showPassword) }}>
                        {showPassword ? "👁️" : "🙈"}
                    </button>
                </div>
                
        </label>
        </>
    )
}