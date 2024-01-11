import React from 'react';

import * as S from './style';

function WritingContent(props) {
  return (
    <S.DetailWrapper>
      <S.SubTitle>{props.title}</S.SubTitle>
    </S.DetailWrapper>
  );
}

export default WritingContent;
