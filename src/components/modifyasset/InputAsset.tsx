import React, { useRef } from 'react';
import styled from 'styled-components';
import { inputParameterType } from '../../types/asset';
import { modifyState } from '../../recoil/assets';
import { useRecoilValue } from 'recoil';

const InputAsset = ({ assetType, handleChange }: inputParameterType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const modifyList = useRecoilValue(modifyState);

  const placeholder = () => {
    switch (assetType.type) {
      case 'name':
        return '이름';
      case 'product':
        return 'ex)맥북프로 2022 14`';
      case 'serialNumber':
        return '109MZRP033662';
      case 'team':
        return '마케팅';
      case 'manufacturer':
        return 'ex)Apple';
      case 'acquisitionDate':
        return '날짜선택';
      case 'location':
        return '31층';
      case 'note':
        return '작성하기';
      default:
        return '';
    }
  };
  const foundItem = modifyList.find((modify) => modify[assetType.type] !== undefined);
  const value = foundItem ? foundItem[assetType.type] : '';

  return (
    <div>
      <TitleWrap>
        {assetType.title}
        {assetType.essential && <EssentialCircle />}
      </TitleWrap>
      <InputAssetContainer
        type={assetType.inputType}
        maxLength={10}
        onChange={handleChange}
        name={assetType.type}
        defaultValue={value}
        ref={inputRef}
        placeholder={placeholder()}
      />
    </div>
  );
};

export default InputAsset;

const InputAssetContainer = styled.input`
  background: #f4f4f4;
  width: 100%;
  padding: 13px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  color: #333;
  ::placeholder {
    font-weight: 500;
    font-size: 14px;
    color: #cccccc;
  }
`;

const TitleWrap = styled.h3`
  display: flex;
  align-items: center;
  gap: 3px;
`;
const EssentialCircle = styled.p`
  width: 6px;
  height: 6px;
  background: #eb5757;
  border-radius: 100%;
`;
