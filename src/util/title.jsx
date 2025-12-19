
export default function Title({ text, color }) {
   
    return(
        <>
            <h2 className={`text-center font-bold ${color} text-2xl`}>{text}</h2>
        </>
    )
}