import React from 'react';
import * as S from './style';

function TextArea(props) {
  return (
    <S.DetailWrapper>
      <S.TextArea placeholder={props.placeholder}/>
    </S.DetailWrapper>
  );
}

export default TextArea;
