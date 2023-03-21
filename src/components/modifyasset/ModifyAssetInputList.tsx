import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import { modifyAssetlistState, modifyAssetTypeState, modifyState } from '../../recoil/assets';
import { assetObjType, modifyListType } from '../../types/asset';

import SelectCategory from './SelectCategory';
import SelectDepartment from './SelectDepartment';
import SelectStatus from './SelectStatus';
import InputAsset from './InputAsset';
import InputNumber from './InputNumber';

const ModifyAssetInputList = () => {
  const modifyAssetType = useRecoilValue(modifyAssetTypeState);
  const [modifyassetlist, setModifyassetlist] = useRecoilState(modifyAssetlistState);
  const modify = useRecoilValue(modifyState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const identifier = Number(window.localStorage.getItem('identifier'));
    const type = e.target.name as string;
    let value: string | number = e.target.value; // Allow value to be either a string or number
    const newList = [...modifyassetlist];
    if (type === 'quantity') {
      value = Number(value); // Convert value to a number
    }
    newList[0] = {
      ...newList[0],
      [type]: value as string, // Use a type assertion to tell TypeScript that value is a string
      identifier,
    };

    setModifyassetlist(newList);
  };

  useEffect(() => {
    const modifyList = [{ ...modify[0] }];
    setModifyassetlist(modifyList);
  }, []);

  const assetInput = (modifyAssetType: assetObjType) => {
    switch (modifyAssetType.title) {
      case '수량':
        return <InputNumber modifyAssetType={modifyAssetType} handleChange={handleChange} />;
      case '품목':
        return <SelectCategory modifyAssetType={modifyAssetType} handleChange={handleChange} />;
      case '팀':
        return <SelectDepartment modifyAssetType={modifyAssetType} handleChange={handleChange} />;
      case '상태':
        return <SelectStatus modifyAssetType={modifyAssetType} handleChange={handleChange} />;
      default:
        return <InputAsset modifyAssetType={modifyAssetType} handleChange={handleChange} />;
    }
  };

  return (
    <AssetTypeContainer>
      {modifyAssetType.map((modifyAssetType) => (
        <AssetInputWrap key={modifyAssetType.type}>{assetInput(modifyAssetType)}</AssetInputWrap>
      ))}
    </AssetTypeContainer>
  );
};

export default ModifyAssetInputList;

const AssetTypeContainer = styled.ul`
  display: flex;
`;

const AssetInputWrap = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--sub);
  flex: 1;
  position: relative;
`;
