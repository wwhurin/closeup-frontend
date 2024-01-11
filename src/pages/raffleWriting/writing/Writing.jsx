import React from 'react';
import * as S from './style';
import Header from '../../../components/raffleWriting/header/Header';
import WritingContent from '../../../components/raffleWriting/writingContent/WritingContent';
import Selectbox from '../../../components/raffleWriting/input/Selectbox';
import TextInput from '../../../components/raffleWriting/input/TextInput';
import TextLabel from '../../../components/raffleWriting/input/TextLabel';
import SmallButton from '../../../components/raffleWriting/button/SmallButton';
import TextArea from '../../../components/raffleWriting/input/TextArea';
import SubHeader from '../../../components/raffleWriting/header/SubHeader';
import TextNumber from '../../../components/raffleWriting/input/TextNumber';

function Writing() {
  return (
    <>
      <S.OneContentWrapper>
        <Header title={'래플 폼 작성'} />
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*카테고리"/>
          <SmallButton text="지난 래플 불러오기" />
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <Selectbox />
          <Selectbox />
        </S.OneLineWrapper>
      </S.OneContentWrapper>
      
      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*제목"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
        <TextInput placeholder="*제목을 입력해주세요 (20자 이내)"/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*응모기간"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextLabel value="시작일 : 2023.08.23 "/>
          <TextLabel value="종료일 : 2023.08.23 "/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*설명"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextArea placeholder="내용을 입력해주세요 (500자 이내)" />
        </S.OneLineWrapper>
      </S.OneContentWrapper>

      <S.OneContentWrapper>
        <S.OneLineWrapper>
          <SubHeader title="*당첨자 수"/>
        </S.OneLineWrapper>
        <S.OneLineWrapper>
          <TextNumber/>
        </S.OneLineWrapper>
      </S.OneContentWrapper>
    </>
  );
}

export default Writing;
        