import '../styles.css'
import 'animate.css';
import Button from '../components/Button'
import ScreenContainer from '../layout/screencontainer';
import { useNavigate } from 'react-router-dom';


export default function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/second')
    }

    return (
        <>
            <ScreenContainer>
                <Button text="Click Me!" bgColor={'bg-white'} onClick={handleClick}/>
            </ScreenContainer>

        </>
    )
}