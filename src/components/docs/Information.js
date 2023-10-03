import React from 'react';
import { styled } from 'styled-components';
import palette from '../../libs/styles/palette';
import { useSelector } from 'react-redux';

const InformationBlock = styled.div`
  margin-bottom: 4rem;
`;

const InformationWrapper = styled.div`
  .note {
    margin-bottom: 1rem;
    font-size: 0.65rem;
    color: ${palette.gray[6]};
  }

  .red {
    margin-top: 2rem;
    color: #ef6681;
    font-size: 0.75rem;
    opacity: 0.7;
  }

  .header {
    font-size: 1.05rem;
    font-weight: bold;
    color: black;
    margin-bottom: 0.5rem;
  }

  margin-top: 2rem;
  margin-left: 4rem;
  margin-right: 4rem;
  font-size: 0.95rem;
  color: ${palette.gray[7]};
`
const Informations = styled.div`
  display: flex;
  justify-content:space-between;
`

const InformationList = styled.div`
  
`

const InformationItem = styled.div`
  
`

const Signature = styled.div`
  border: 1px solid #868e96;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 5rem;
`

const Information = () => {

  const {
    hostType, 
    tenantType, 
    hostInputFirst,
    hostInputSecond,
    hostAddress,
    hostRestAddress,
    hostPhoneNum,
    tenantInputFirst,
    tenantInputSecond,
    tenantAddress,
    tenantRestAddress,
    tenantPhoneNum,
    } = useSelector(({optionFirst, optionSixth, optionSeventh}) => ({
        hostType: optionFirst.hostType,
        tenantType: optionFirst.tenantType,
        hostInputFirst: optionSixth.hostInputFirst,
        hostInputSecond: optionSixth.hostInputSecond,
        hostAddress: optionSixth.hostAddress,
        hostRestAddress: optionSixth.hostRestAddress,
        hostPhoneNum: optionSixth.hostPhoneNum,
        tenantInputFirst: optionSeventh.tenantInputFirst,
        tenantInputSecond: optionSeventh.tenantInputSecond,
        tenantAddress: optionSeventh.tenantAddress,
        tenantRestAddress: optionSeventh.tenantRestAddress,
        tenantPhoneNum: optionSeventh.tenantPhoneNum,
      }))

  return (
    <InformationBlock>
      { hostType !== '' || tenantType !== '' ? <>
        <InformationWrapper>
          <div className='note'>
            ※ 본 계약을 증염하기 위하여 계약 당사자가 이의 없음을 확인하고 각각 성명⋅날인 후 임대인, 임차인은 각각 1통씩 보관한다
          </div>
        </InformationWrapper>
      </> : <></>}

      { hostInputFirst !== '' ||
        hostInputSecond !== '' ||
        hostAddress !== '' ||
        hostRestAddress !== '' ||
        hostPhoneNum !== '' ? <>
          <InformationWrapper>
            <div className='header'>임대인</div>
            {
              hostType === '법인명' ? <>
              <Informations>
                <InformationList>
                  <InformationItem>법인명:{hostInputFirst}</InformationItem>
                  <InformationItem>대표이사:{hostInputSecond}</InformationItem>
                  <InformationItem>주소:{hostAddress + hostRestAddress}</InformationItem>
                  <InformationItem>전화번호:{hostPhoneNum}</InformationItem>
                </InformationList>
                <Signature>(서명)</Signature>
              </Informations>
              </> : (hostType === '상호(사업체명)' ? <>
              <Informations>
                <InformationList>
                  <InformationItem>상호(사업체명):{hostInputFirst}</InformationItem>
                  <InformationItem>사업주명:{hostInputSecond}</InformationItem>
                  <InformationItem>주소:{hostAddress + hostRestAddress}</InformationItem>
                  <InformationItem>전화번호:{hostInputFirst}</InformationItem>
                </InformationList>
                <Signature>(서명)</Signature>
              </Informations>
              </> : <>
              <Informations>
                <InformationList>
                  <InformationItem>성명:{hostInputFirst}</InformationItem>
                  <InformationItem>주민번호:{hostInputSecond}</InformationItem>
                  <InformationItem>주소:{hostAddress + hostRestAddress}</InformationItem>
                  <InformationItem>전화번호:{hostPhoneNum}</InformationItem>
                </InformationList>
                <Signature>(서명)</Signature>
              </Informations>
              </>)
            }
          </InformationWrapper>
        </> : <></>}
      
      { tenantInputFirst !== '' ||
        tenantInputSecond !== '' ||
        tenantAddress !== '' || 
        tenantRestAddress !== '' ||
        tenantPhoneNum !== '' ? <>
          <InformationWrapper>
            <div className='header'>임차인</div>
            {
              tenantType === '법인명' ? <>
              <Informations>
                <InformationList>
                  <InformationItem>법인명:{tenantInputFirst}</InformationItem>
                  <InformationItem>대표이사:{tenantInputSecond}</InformationItem>
                  <InformationItem>주소:{tenantAddress + tenantRestAddress}</InformationItem>
                  <InformationItem>전화번호:{tenantPhoneNum}</InformationItem>
                </InformationList>
                <Signature>(서명)</Signature>
              </Informations>
              </> : (tenantType === '상호(사업체명)' ? <>
              <Informations>
                <InformationList>
                  <InformationItem>상호(사업체명):{tenantInputFirst}</InformationItem>
                  <InformationItem>사업주명:{tenantInputSecond}</InformationItem>
                  <InformationItem>주소:{tenantAddress + tenantRestAddress}</InformationItem>
                  <InformationItem>전화번호:{tenantPhoneNum}</InformationItem>
                </InformationList>
                <Signature>(서명)</Signature>
              </Informations>
              </> : <>
              <Informations>
                <InformationList>
                  <InformationItem>성명:{tenantInputFirst}</InformationItem>
                  <InformationItem>주민번호:{tenantInputSecond}</InformationItem>
                  <InformationItem>주소:{tenantAddress + tenantRestAddress}</InformationItem>
                  <InformationItem>전화번호:{tenantPhoneNum}</InformationItem>
                </InformationList>
                <Signature>(서명)</Signature>
              </Informations>
              </>)
            }
          </InformationWrapper>
        </> : <></>}
      
      { hostType !== '' || tenantType !== '' ? <>
        <InformationWrapper>
          <div className='red'>
            주택임대차 관련 분쟁은 전문가로 구성된 대한법률구조공단 분쟁조정위원회에게 신속하고 효율적으로 해결할 수 있습니다 (국번없는 132)
          </div>
        </InformationWrapper>
      </> : <></>}
        
    </InformationBlock >
  );
};

export default Information;