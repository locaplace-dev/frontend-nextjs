// InputField 컴포넌트 - value와 onChange를 props로 받음
const TextField: React.FC<{
  type: string
  label: string
  value: string
  onChange: (value: string) => void
  error: string
}> = ({ type, label, value, onChange, error }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value) // 부모 컴포넌트에서 전달된 onChange 호출
  }

  return (
    <div className="w-full  flex-col justify-start items-start gap-2 inline-flex">
      <div className="w-full" style={{ marginBottom: '20px' }}>
        <label className="text-black text-sm  font-['Spoqa Han Sans Neo'] ">
          {label}
        </label>
        <div className="flex-col justify-start items-start gap-2 flex w-full">
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={`${label} 입력`}
            className="w-full text-stone-300 text-base "
            style={{
              borderBottom: '1px solid #000',
              outline: 'none',
            }}
          />
          <div className="h-4">
            <p className="w-80 text-red-400 text-xs leading-tight">{error}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TextField
