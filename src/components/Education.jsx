import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Card from "./Card";
import Abil from "../assets/the_university_of_south_dakota_logo.jpeg";
import Cibc from '../assets/1631340759693.jpeg';
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

export default function Education(){
    return(
        <Card>
            <Text fontSize={'24px'} fontWeight={'500'} color={'pink.400'} marginX="32px" marginTop={'32px'} >Experience</Text>
            <Job 
                image={Cibc}
                description={'B.A.Sc in Computer Engineering with Specialisation in Network and Telecommunications Engineering'}
                role={'University of Trinidad and Tobago'}
                period={'September 2017 - July 2020'}
            />
            <Job 
                image={Abil}
                description={'MSc in Computer Science'}
                role={'University of South Dakota'}
                period={'August 2024 - December 2025'}
            />
        </Card>
    )
}
