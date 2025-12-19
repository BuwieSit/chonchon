import '../styles.css'
import Button from '../components/Button'
import ScreenContainer from '../layout/screencontainer'
import { useNavigate } from 'react-router-dom';

export default function Summary() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <>
            <ScreenContainer bgColor='bg-[#FFDEAD]'>
                <Button text={"Happy Birthday, Chòn Chòn!"} fontColor={'text-white'} bgColor={'bg-[#28282B]'} onClick={handleClick}/>
            </ScreenContainer>
        </>
    )
}