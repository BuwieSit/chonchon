import '../styles.css'
import 'animate.css';
import Button from '../components/Button'
import ScreenContainer from '../layout/screencontainer';
import { useNavigate } from 'react-router-dom';
import MessageBlock from '../components/MessageBlock';

export default function Home() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/second')
    }

    return (
        <>
            <ScreenContainer>
                <MessageBlock title={"Wishing you a happy birthday!"} message={"From Philippines to Vietnam! I hope you enjoy your day later!"}/>
                <Button text="Hello Chòn Chòn!" bgColor={'bg-red-300'} onClick={handleClick}/>
            </ScreenContainer>

        </>
    )
}