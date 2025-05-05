import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Card from "./Card";
import Abil from "../assets/abil-logo.jpg";
import Cibc from '../assets/cibccaribbean_logo.jpeg';
const Job = ({image, period, description, role})=>(
    <Box display={'flex'} marginLeft={{base: 0, lg: "32px"}} marginTop={'36px'} marginBottom={'32px'}>
        <Box pl={{base: 6, lg: 0}} position="relative" top="-12px">
            <Image src={image} boxSize={"84px"} objectFit={'fill'} opacity={0.8}/>
        </Box>
        <Box ml={'22px'} mr={'32px'}>
            <Text fontSize={'14px'} fontWeight={'500'} color={'pink.300'}>{period}</Text>
            <Text fontSize={'16px'} fontWeight={'600'} color={'pink.400'} marginTop={'10px'} padding={0}>{role}</Text>
            <Text width={'250px'} fontSize={'14px'} fontWeight={'500'} color={'#eae7af'} marginTop={'30px'} padding={0}>
                    {description}
            </Text>
        </Box>
    </Box>
)

export default function Experience(){
    return(
        <Card>
            <Text fontSize={'24px'} fontWeight={'500'} color={'pink.400'} marginX="32px" marginTop={'32px'} >Experience</Text>
            <Job 
                image={Cibc}
                description={'Primarily focused on building user interfaces using React.js and Chakra-UI'}
                role={'Web Developer'}
                period={'January 2022 - August 2024'}
            />
            <Job 
                image={Abil}
                description={'Designed and developed full-stack applications using various frameworks including React.js and Django as well as PostgreSQL and Oracle.'}
                role={'Programmer Analyst'}
                period={'June 2021 - December 2021'}
            />
        </Card>
    )
}
