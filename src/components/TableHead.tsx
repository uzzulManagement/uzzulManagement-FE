import React from 'react';
import styled from 'styled-components';
import check from '../assets/icon/check.png';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <InputWrap>
          <CheckboxLabel>
            <CheckboxInput
              type="checkbox"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <span />
          </CheckboxLabel>
        </InputWrap>
        <Assetcategory>번호</Assetcategory>
        <Assetcategory>실사용자</Assetcategory>
        <Assetcategory>제품명</Assetcategory>
        <Assetcategory>품목</Assetcategory>
        <Assetcategory>시리얼번호</Assetcategory>
        <Assetcategory>팀</Assetcategory>
        <Assetcategory>제조사</Assetcategory>
        <Assetcategory>취득일자</Assetcategory>
        <Assetcategory>자산위치</Assetcategory>
        <Assetcategory>상태</Assetcategory>
        <Assetcategory>비고</Assetcategory>
      </tr>
    </thead>
  );
};

export default TableHead;
const InputWrap = styled.th`
  width: 36px;
  padding: 16px 8px;
  display: flex;
  justify-content: center;
`;
const Assetcategory = styled.th`
  font-weight: 500;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #999999;
  text-align: left;
  :nth-child(2) {
    width: 64px;
  }
  :nth-child(3) {
    width: 112px;
  }
  :nth-child(4) {
    width: 188px;
  }
  :nth-child(5) {
    width: 196px;
  }
  :nth-child(6) {
    width: 132px;
  }
  :nth-child(7) {
    width: 132px;
  }
  :nth-child(8) {
    width: 104px;
  }
  :nth-child(9) {
    width: 132px;
  }
  :nth-child(10) {
    width: 104px;
  }
  :nth-child(11) {
    width: 204px;
  }
`;

const CheckboxInput = styled.input`
  display: block;
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background-image: url(${check});
    }
  }

  &:not(:checked) + span {
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
      background-color: #f4f4f4;
      border-radius: 4px;
    }
  }
`;

const CheckboxLabel = styled.label`
  position: relative;
  display: block;
  cursor: pointer;
`;