import React from 'react';
import { useState } from 'react';
import * as S from './style';

function Selectbox(props) {
  const [currentValue, setCurrentValue] = useState("1학년");
  const [showOptions, setShowOptions] = useState(false);

  const handleOnChangeSelectValue = (e) => {
    const { innerText } = e.target;
    setCurrentValue(innerText);
  };

  return (
    <S.SelectBox onClick={() => setShowOptions((prev) => !prev)}>
      <S.Label>{currentValue}</S.Label>
      <S.SelectOptions show={showOptions}>
      <S.Option onClick={handleOnChangeSelectValue}>1학년</S.Option>
        <S.Option onClick={handleOnChangeSelectValue}>2학년</S.Option>
        <S.Option onClick={handleOnChangeSelectValue}>3학년</S.Option>
        <S.Option onClick={handleOnChangeSelectValue}>4학년</S.Option>
      </S.SelectOptions>
    </S.SelectBox>
  );
}

export default Selectbox;
