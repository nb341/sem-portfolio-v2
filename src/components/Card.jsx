import React from "react";
import { Box } from "@chakra-ui/react";
export default function Card({children, ...rest}){
    return(
        <Box
            bgColor={'#241663'} 
            w={{base: 'sm', md: '415px'}}
            borderWidth='0' 
            borderRadius='lg' 
            overflow='hidden'
            boxShadow={'dark-lg'}
            {...rest}
        >

          {children}

        </Box>
    )
}