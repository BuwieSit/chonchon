import '../styles.css'
import Button from '../components/Button'
import ScreenContainer from '../layout/screencontainer'
import { useNavigate } from 'react-router-dom';

export default function SecondPage() {
    
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/third')
    }
    return(
        <>
            <ScreenContainer bgColor='bg-red-300'>
                <Button text={"Happy Birthday!"} bgColor={'bg-green-600'} onClick={handleClick}/>
            </ScreenContainer>
            
        </>
    )   
}