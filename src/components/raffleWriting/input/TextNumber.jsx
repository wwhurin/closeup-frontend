import React from 'react';
import { useState } from 'react';
import * as S from './style';

function TextNumber(props) {
  let init = 0;
  const [num, setNum] = useState(1);
  const increase = () => {
    setNum(num + 2);
  };
  const decrease = () => {
    setNum(num - 2);
  };
  const increase2 = () => {
    console.log('increase2');
    setNum(num + Number(init));
  };
  const decrease2 = () => {
    setNum(num - Number(init));
  };

    const numHandle = (e) => {
      console.log(e);
      console.log('numHandle : ' + e.target.value);
      init = e.target.value;
    };
  
    return (
      <S.TextNumberArea>
      <S.NumberButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
          <g clip-path="url(#clip0_387_2081)">
            <path d="M19.7917 13.5417H5.20833V11.4584H19.7917V13.5417Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_387_2081">
              <rect width="25" height="25" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        </S.NumberButton>
        <S.TextNumber type="text" onChange={numHandle} />
        <S.NumberButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_387_2005)">
              <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_387_2005">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </S.NumberButton>
      </S.TextNumberArea>
    );
}

export default TextNumber;
