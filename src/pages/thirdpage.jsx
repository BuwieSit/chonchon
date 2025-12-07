import '../styles.css'
import '../styles.css'
import Button from '../components/Button'
import ScreenContainer from '../layout/screencontainer'
import { useNavigate } from 'react-router-dom';



export default function ThirdPage() {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/summary')
    }

    return(
        <>
            <ScreenContainer bgColor='bg-green-300'>
                <Button text={"Keep Going!"} bgColor={'bg-[#28282B]'} fontColor={'text-white'} onClick={handleClick}/>
            </ScreenContainer>
            
        </>
    )   
}