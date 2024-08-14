import React from 'react';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

// TextF 컴포넌트
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '40px',
    backgroundColor: '#E9E9E9', // 입력 필드 배경색 설정
    '& fieldset': {
      borderColor: '#E9E9E9', // 기본 테두리 색상
      borderWidth: '2px', // 테두리 두께
    },
    '&:hover fieldset': {
      borderColor: 'black', // hover 상태에서 테두리 색상 변경
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black', // 포커스 상태에서 테두리 색상 변경
    },
  },
  '& input': {
    color: 'black', // 텍스트 색상 설정
  },
}));

// TextF 컴포넌트
const TextF = (props) => {
    return <StyledTextField {...props} />;
};

// Btn 컴포넌트
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#E9E9E9',
  color: '#000',
  width: '130px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '30px',
  '&:hover': {
    backgroundColor: '#E2E2E2',
  },
}));

const Btn = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export { TextF, Btn };
