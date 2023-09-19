import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import palette from '../../libs/styles/palette';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const TypographyWrapper = styled.div`
    width: 240px;
    height: 450px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
    display:none;
    }

    & {
    -ms-overflow-style: none;
    scrollbar-width: none;
    }
  `

  const TypographyCommnet = styled.div`
    color: ${palette.gray[8]};
    font-size: 1rem;
  `

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>
            <TypographyWrapper>
              <TypographyCommnet>
                {children}
              </TypographyCommnet>
            </TypographyWrapper>
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() { 
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 500 }}
    >
      <Tabs
        orientation="vertical"
        vant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}ari
      >
        <Tab label="사용법" {...a11yProps(0)} />
        <Tab label="표준계약서" {...a11yProps(1)} />
        <Tab label="건축물대장" {...a11yProps(2)} />
        <Tab label="등기부등본" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0} >
      <b>사용자 사용가이드</b><br/><br/>
      임대차 계약서를 올려주세요!!!.<br/><br/>
      올리신 임대차 계약서를 표준계약서와 비교해드립니다.<br/><br/>
      표준계약서만 비교할 시 정확도가 떨어질 수 있습니다.<br/><br/>
      더욱 정확한 진단을 위해 등기부등본과 건축물대장을 올려주세요.<br/><br/>
      등기부등본과 건축물대장까지 확인하시면 보다 정확한 비교를 하실 수 있습니다.<br/><br/>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
      <b>표준 계약서 분석</b><br/><br/>
      임대하고자 하는 부동산의 주소가 정확히 기재되어 있는지 확인<br/><br/>
      임대하고자 하는 부동산의 소유주와 거래자인 집주인과 일치하는지 확인<br/><br/>
      특약 사항을 확인하여 수리에 관한 협의를 마쳤는지 확인<br/><br/>
      건물의 구조,용도와 보증금을 확인하여 사기 피해 우려가 있는지 확인<br/><br/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <b>건축물대장 분석</b><br/><br/>
      임대차계약서의 주소와 건축물대장의 주소가 정확히 일치하는지 확인<br/><br/>
      임대차계약서의 임대인과 건축물대장의 소유자 현황이 일치하는지 확인<br/><br/>
      건축물대장의 소유권 지분을 확인하여 올바른 임대인과 계약이 이루어지고 있는지 확인<br/><br/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <b>등기부등본 분석</b><br/><br/>
      임대차계약서의 주소와 등기부등본의 주소가 정확히 일치하는지 확인<br/><br/>
      임대차계약서의 임대인과 등기부등본의 현재 소유자가 일치하는지 확인<br/><br/>
      등기부등본의 소유권 지분을 통해 올바른 임대인과 계약이 이루어지고 있는지 확인<br/><br/>
      등기부등본의 등기목적을 통해 임대계약에 적절치 않은 단어가 포함되어 있는지 확인<br/><br/>
      등기부등본의 채권최고액을 통해 임대차 보증금을 돌려받지 못할 위험이 있는지 확인<br/><br/>
      </TabPanel>
    </Box>
  );
}