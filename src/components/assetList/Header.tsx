import React from 'react';
import styled from 'styled-components';

import AssetButton from './AssetButton';
import Search from './../Search';

const Header = ({ assetList }: any) => {
  const categoryIcon = (value: string) => {
    switch (value) {
      case '노트북/데스크탑/서버':
        return <span>💻</span>;
      case '모니터':
        return <span>🖥️</span>;
      case '모바일기기':
        return <span>📱</span>;
      case '사무기기':
        return <span>🖨️</span>;
      case '기타장비':
        return <span>⌨️</span>;
      case '소프트웨어':
        return <span>🧑‍💻</span>;
      default:
        return;
    }
  };
  const equipmentCounts = [
    { name: '노트북/데스크탑/서버', count: assetList?.ldsTotalCount },
    { name: '모바일기기', count: assetList?.mobileTotalCount },
    { name: '모니터', count: assetList?.monitorTotalCount },
    { name: '사무기기', count: assetList?.officeequipmentTotalCount },
    { name: '기타장비', count: assetList?.otherequipmentTotalCount },
    { name: '소프트웨어', count: assetList?.softwareTotalCount },
  ];

  return (
    <>
      <AssetWrap>
        <div>
          <AssetNumber>
            비누랩스의 <span>{assetList?.totalCount ? String(assetList?.totalCount).padStart(2, '0') : '00'}</span>개
            자산
          </AssetNumber>
          <CategoryCountList>
            {equipmentCounts.map((equipment, index) => (
              <CategoryCount key={index}>
                {categoryIcon(equipment?.name)}
                {`${equipment?.name} ${equipment?.count ? equipment?.count : 0}대`}
              </CategoryCount>
            ))}
          </CategoryCountList>
        </div>
        <Search />
      </AssetWrap>
      <AssetButton />
    </>
  );
};

export default Header;

const AssetWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 8px;
`;
const AssetNumber = styled.h2`
  font-size: var(--heading2);
  span {
    color: var(--primary);
  }
  margin-bottom: 16px;
`;
const CategoryCountList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const CategoryCount = styled.li`
  background: #f4f4f4;
  border-radius: 8px;
  padding: 8px;
  font-weight: bold;
  color: var(--gray);
`;
