import classImg from '../../assets/class.png';
import swimmingImg from '../../assets/swimming.png';
import playGroundImg from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className="bg-base-200 p-4">
            <h2 className="font-semibold text-primary">Q-Zone</h2>
            <div className='space-y-5'>
                <div>
                    <img src={swimmingImg} alt="" />
                </div>
                <div>
                    <img src={classImg} alt="" />
                </div>
                <div>
                    <img src={playGroundImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default QZone;