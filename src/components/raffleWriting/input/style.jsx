import { styled } from 'styled-components';

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// custom select box css start
export const SelectBox = styled.div`
  position: relative;
  width: 120px;
  padding: 8px;
  border-radius: 5px;
  background-color: #ffffff3d;
  align-self: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  color: #fff;
  font-size: 12px;
  line-weight: 700;
  cursor: pointer;
  text-align: center;
  &::before {
    content: "⌵";
    position: absolute;
    top: 4px;
    right: 8px;
    color: #fff;
    font-size: 20px;
  }
`;
export const Label = styled.label`
  font-size: 14px;
  margin-left: 4px;
  text-align: center;
`;
export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 18px;
  left: 0;
  width: 100%;
  overflow: hidden;
  height: 90px;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 8px;
  background-color: #222222;
  color: #fefefe;
`;

export const Option = styled.li`
  font-size: 14px;
  padding: 6px 8px;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #595959;
  }
`;
// end of custom select box

export const TextInput = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #ffffff3d;
  border: 0px;
  width: 257px;
  height: 26px;

  &::placeholder {
		color: #black;
    text-align: center;
    font-family: Karla;
	}
`;

export const TextArea = styled.textarea`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #ffffff3d;
  border: 0px;
  width: 257px;
  height: 162px;

  &::placeholder {
		color: #black;
    text-align: center;
    vertical-align: middle;
    font-family: Karla;
    line-height: 162px;
	}
`;

export const TextLabel = styled.div`
  display: flex;
  color: #fff;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
  margin-top: 8px;
`;

export const TextNumberArea = styled.div`
  display: flex;
  height: 26px;
  width: 248px;
  background: #47474b;
  border-radius: 8px;
`

export const NumberButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background: #737376;
  border: 0px;
  padding: 0px;
`;

export const TextNumber = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  background: #47474b;
  border: 0px;
  width: 100%;
  height: 24px;
`