import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import HomeComponent from './components/HomeComponent';
import NewsComponent from './components/NewsComponent';
import SwapComponent from './components/SwapComponent';
import PortfolioComponent from './components/PortfolioComponent';

function App() {
  return (
    <Box w="100%" minH="100vh" bg="brand.black" color="brand.white" p={4}>
      <Tabs variant="soft-rounded" colorScheme="brand.green">
        <TabList>
          <Tab>Home</Tab>
          <Tab>News</Tab>
          <Tab>Swap</Tab>
          <Tab>Portfolio</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <HomeComponent />
          </TabPanel>
          <TabPanel>
            <NewsComponent />
          </TabPanel>
          <TabPanel>
            <SwapComponent />
          </TabPanel>
          <TabPanel>
            <PortfolioComponent />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;