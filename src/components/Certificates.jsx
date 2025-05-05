import React from "react";
import { Box, Text, Link } from "@chakra-ui/react";
import Card from "./Card";

const Item = ({title, name, link})=>(
    <Box marginY={'32px'}>
            <Text fontSize={'18px'} fontWeight={'600'} color={'yellow.200'}>
                {title}
            </Text>
            <Text fontSize={'16px'} fontWeight={'500'} color={'pink.400'}>
                <Link href={link} isExternal>{name}</Link>
            </Text>

    </Box>
    )

export default function Certificates(){
    return(
            <Card padding={'32px'}>
                <Text fontSize={'24px'} fontWeight={'500'} color={'pink.400'}>Certificates</Text>
                <Item title={'HackerRank'} name={'Problem Solving'} link={'https://www.hackerrank.com/certificates/1b4ebe603655'}/>
                <Item title={'HackerRank'} name={'C++'} link={'https://www.hackerrank.com/certificates/5d98e12759a2'}/>
                <Item title={'Udemy'} name='Complete A.I. & Machine Learning, Data Science Bootcamp' link={'https://www.udemy.com/certificate/UC-b41b4955-b2b9-424d-a4b9-0c237e534e3b/'} /> 
                <Item title={'Udemy'} name={'Azure Data Factory for Beginners - Build Data Ingestion'} link={'https://www.udemy.com/certificate/UC-c0d6cc3e-b854-4bfd-85fa-c37b22ed1d41/'} />
                <Item name={'70-461, 761: Querying Microsoft SQL Server with Transact-SQL'} title={'Udemy'} link={'https://www.udemy.com/certificate/UC-5231bef6-ded1-48aa-9127-f126edc017cb/'} />
             </Card>
    )
}
