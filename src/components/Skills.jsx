import React from "react";
import { Box, Heading, Flex, Tag } from "@chakra-ui/react";
import Card from "./Card";

export default function Skills(){

    const fEnd = [ 'React.js', 'NextJS', 'Angular', 'Chakra-UI', 'Material UI', 'Redux', 'JavaScript', 'LeafletJS', 'jQuery', 'CSS/SCSS', 'TailwindCSS', 'Bootstrap'];
    const bEnd = [ 'Python', 'Django', 'NodeJS', 'Express.js', 'Java', 'C#', '.NET','SQL Server', 'PostgreSQL', 'Oracle', 'MySQL', 'MongoDB']
    return(
        <Box 
            display={'flex'}
            flexDirection={{base:'column', lg:'row'}}
        >

            <Card padding={'23px'} mr={{lg: '32px'}} mt={{sm:'32px', lg: '0px'}}>
                <Heading as='h5' size='sm' color={'pink.500'} fontSize={'18px'} fontWeight={700}>
                    FRONT END
                </Heading>
                <Flex margin={0}  spacing={2} paddingTop={2} color={'yellow.200'} wrap={'wrap'}>
                    {fEnd.map((skill,i)=>{
                        return(
                            <Tag 
                                key={i} 
                                m={2}
                                ml={0}
                                borderRadius='full'
                                borderWidth={2}
                                borderColor={'purple.800'}
                                boxShadow={'dark-lg'} 
                                variant='solid' 
                                fontWeight={'700'} 
                                color={'yellow.400'} 
                                bgGradient='linear(315deg, #d4418e 0%, #0652c5 74%)'>{skill}</Tag>
                        )
                    })}
                </Flex>  
            </Card>

            <Card mt={{base:'32px', lg: '0px'}} padding={'23px'}>
                <Heading as='h5' size='sm' color={'pink.500'} fontSize={'18px'} fontWeight={700}>
                    BACK END
                </Heading>
                <Flex margin={0}  spacing={2} paddingTop={2} color={'yellow.200'} wrap={'wrap'}>
                    {bEnd.map((skill,i)=>{
                        return(
                            <Tag key={1+i} borderWidth={2}                            m={2} borderColor={'purple.800'}
                            ml={0} boxShadow={'dark-lg'} borderRadius='full' variant='solid' fontWeight={'700'} color={'yellow.400'} bgGradient='linear(315deg, #d4418e 0%, #0652c5 74%)'>{skill}</Tag>
                        )
                    })}
                </Flex>  
            </Card>
        </Box>
    )
}
