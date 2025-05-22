

export function Inputbox({label , placeholder, onChange}) {
    
    return (
        <>
        <label>
        <div className="text-sm font-medium text-left py-2">
            {label}
            </div>
                <input type="text" onChange={onChange} name="" id="" className="w-full px-2 py-1 border rounded border-slate-200" placeholder={ placeholder} />
        </label>
        </>
    )
}