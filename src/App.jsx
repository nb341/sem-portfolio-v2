import React from 'react';
import {
  ChakraProvider,
  Center,
  Box,
  Flex,
  extendTheme
} from '@chakra-ui/react';
import PersonalDetails from './components/PersonalDetails';
import Skills from './components/Skills';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Blog from './components/Blog';
const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#160f30'
      },
      fonts: {
        body: 'Montserrat, sans-serif;'
      }
    },
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Center m={8} scrollBehavior="smooth" width={'100vw'} >
        <Flex direction={{lg:'row', base: 'column'}}>
          <Flex flexDirection={'column'} mr={{lg: '32px'}}>
            <Box>
               <PersonalDetails/>
            </Box>
            <Box mt={'32px'}>
               <Experience/>
            </Box>
            <Box mt={'32px'}>
          <Certificates/> 
            </Box>
          </Flex>

        
        
          <Box mt={{base: '32px', lg: '0px'}}>
              <Flex direction={'column'} >
                  <Box>
                    <Skills/> 
                  </Box>

                  
                  <Box marginTop={'32px'}>
                    <Education />
                  </Box>
                  <Box marginTop={'32px'}>
              <Projects/> 

                  </Box>
                  <Box marginTop={'32px'}>
              <Blog/> 

                  </Box>
              </Flex>
          </Box>
        </Flex>
        

      </Center>

    </ChakraProvider>
  );
}

export default App;