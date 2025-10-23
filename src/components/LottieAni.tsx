import { Player } from '@lottiefiles/react-lottie-player'
import { logolotie } from "../assets";

const LottieAni = () => {
    return (
        <div className="w-64 h-64">
            <Player
                src={logolotie} // replace with your Lottie file path
                autoplay
                // loop
                controls // adds Play / Pause / Stop buttons
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    )
}

export default LottieAni