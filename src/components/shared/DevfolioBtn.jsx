/* eslint-disable max-len */
import React from 'react';
import "./DevfolioBtn.css"

const RegisterButton = () => {
  // React.useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //   }}
    // >
    //   <div
    //     className='apply-button'
    //     data-hackathon-slug='hacknitr4'
    //     data-button-theme='light-inverted'
    //     style={{ height: '44px', minWidth: '270px', marginTop: '2rem', marginRight: '14px', background: 'White' }}
    //   >
    //     Apply with Devfolio
    //   </div>
    // </div>
    <div className="btn" ontouchstart="">
        <div className="register_btn">
          <button><a href="">REGISTER</a></button>
        </div>
      </div>
  );
};

export default RegisterButton;



// import React from "react"

// function DevfolioBtn() {
//   return (
//     <div>
//       <button>Register</button>
//     </div>
//   )
// }
// export default DevfolioBtn