import dice from '../assets/dice.png'
import Button from './Button';
import { FaPlay } from 'react-icons/fa';
function LandingPage({toggle}){

    return (
        <div className="w-screen h-screen flex">
            <img src={dice} alt="" />
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[90px] font-bold weight-700">DICE GAME</h1>
                <Button title="Start" icon={FaPlay} onClick={toggle}/>
            </div>
        </div>
    )
}

export default LandingPage;