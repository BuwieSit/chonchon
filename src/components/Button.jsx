
export default function Button({ text, bgColor, fontColor, onClick }) {

    return (
        <>
            <button className={`animate__animated animate__jello aspect-auto p-5 shadow-[5px_5px_1px_black] ${bgColor} ${fontColor} border-red-50 hover:cursor-pointer hover:translate-y-[-10%] hover:shadow-[0_5px_5px_black] active:translate-y-[5%] rounded-[50px] text-[2rem] font-poppins duration-150 ease-in`} onClick={onClick}>{text}</button>
            
        </>
    )
}