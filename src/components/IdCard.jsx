import myPic from '../assets/logo.png';
import qrCode from '../assets/qr-code.svg';

const IdCard = () => {
  return (
    <>
      <div className="id-card-tag"></div>
      <div className="id-card-tag-strip"></div>
      <div className="id-card-hook"></div>
      <div className="id-card-holder">
        <div className="id-card">
          <div>
            <img src={myPic} alt="myPic" className="w-28 mt-4 mx-auto" />
          </div>
          <div className="photo">
            <img src={qrCode} alt="Qr Code" className="w-32 mt-4 mx-auto" />
          </div>
          <h2 className="text-lg font-bold">Abdulrahman Moussa</h2>
          <h3 className="text-xs font-medium">Frontend Developer</h3>
          <h3 className="text-xs font-light mt-2">@3bdulrahmn69</h3>
        </div>
      </div>
    </>
  );
};

export default IdCard;
