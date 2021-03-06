interface validateRegisterInputInterface {
  nickName: string;
  email: string;
  passWord: string;
  passWordCheck: string;
  phoneNumber: string;
}

export const validateRegisterInput = (inputForm: validateRegisterInputInterface) => {
  const returnForm: validateRegisterInputInterface = {
    nickName: '',
    email: '',
    passWord: '',
    passWordCheck: '',
    phoneNumber: '',
  };

  if (inputForm.nickName.length < 4) {
    returnForm.nickName = '너무 짧은 이름입니다';
  } else if (inputForm.nickName.length > 11) {
    returnForm.nickName = '너무 긴 이름입니다';
  } else {
    returnForm.nickName = 'ok';
  }

  if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(inputForm.email)) {
    returnForm.email = 'ok';
  } else {
    returnForm.email = '유효하지 않은 이메일입니다';
  }

  if (inputForm.passWord.length < 7) {
    returnForm.passWord = '너무 짧은 암호입니다';
  } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(inputForm.passWord)) {
    returnForm.passWord = '최소 1자리 이상의 숫자와 특수문자가 필요합니다';
  } else {
    returnForm.passWord = 'ok';
  }

  if (inputForm.passWord !== inputForm.passWordCheck) {
    returnForm.passWordCheck = '암호가 다릅니다';
  } else if (inputForm.passWordCheck.length < 7) {
    returnForm.passWordCheck = '너무 짧은 암호입니다';
  } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(inputForm.passWordCheck)) {
    returnForm.passWordCheck = '최소 1자리 이상의 숫자와 특수문자가 필요합니다';
  } else {
    returnForm.passWordCheck = 'ok';
  }

  if (/^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/.test(inputForm.phoneNumber)) {
    returnForm.phoneNumber = 'ok';
  } else {
    returnForm.phoneNumber = '유효하지 않은 전화번호입니다';
  }

  return returnForm;
};
