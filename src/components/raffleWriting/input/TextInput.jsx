import React from 'react';
import * as S from './style';

function TextInput(props) {
  return (
    <S.DetailWrapper>
      <S.TextInput placeholder={props.placeholder}/>
    </S.DetailWrapper>
  );
}

export default TextInput;
