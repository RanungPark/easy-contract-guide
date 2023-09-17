import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from 'styled-components';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  const TypographyWrapper = styled.div`
    width: 240px;
    height: 500px;
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
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 550 }}
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
        <Tab label="주의사항" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        임대차 계약서를 등록해주세요
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        예를 들어 내가 사는 곳이 ㅇㅇ오피스텔 A동 301호였는데, 부동산 임대차 계약서에는 ㅇㅇ오피스텔 가동 301호라고 쓰였다고 가정하면요, 언떡 같아 보이고 
      </TabPanel>
    </Box>
  );
}