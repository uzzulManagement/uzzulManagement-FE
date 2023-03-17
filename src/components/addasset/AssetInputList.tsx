import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';

import { assetlistState, postAssetTypeState } from '../../recoil/assets';
import { handleChangeType } from '../../types/asset';

import SelectCategory from './SelectCategory';
import SelectDepartment from './SelectDepartment';
import SelectStatus from './SelectStatus';
import InputNumber from './InputNumber';
import AssetInput from './InputAsset';

const AssetInputList = () => {
  const postAssetType = useRecoilValue(postAssetTypeState);
  const [assetlist, setassetlist] = useRecoilState(assetlistState);

  const handleChange: handleChangeType = (e) => {
    const identifier = window.localStorage.getItem('identifier');
    const type = e.target.name;
    const value = e.target.value;
    const index = Number(e.target.id);
    const newList = [...assetlist];
    newList[index] = {
      ...newList[index],
      [type]: value,
      identifier: String(identifier),
    };
    setassetlist(newList);
  };

  const assetInput = (assetType: { title: string; type: string; inputType: string; img?: string }, index: number) => {
    switch (assetType.title) {
      case '수량':
        return <InputNumber assetType={assetType} index={index} handleChange={handleChange} />;
      case '품목':
        return <SelectCategory assetType={assetType} index={index} handleChange={handleChange} />;
      case '팀':
        return <SelectDepartment assetType={assetType} index={index} handleChange={handleChange} />;
      case '상태':
        return <SelectStatus assetType={assetType} index={index} handleChange={handleChange} />;
      default:
        return <AssetInput assetType={assetType} index={index} handleChange={handleChange} />;
    }
  };
  return (
    <div>
      {assetlist.map((v, index) => {
        return (
          <AssetTypeContainer key={index}>
            {postAssetType.map((assetType) => (
              <AssetInputWrap key={assetType.title}>{assetInput(assetType, index)}</AssetInputWrap>
            ))}
          </AssetTypeContainer>
        );
      })}
    </div>
  );
};

export default AssetInputList;

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