import React from "react";
import { Box, Text, Link, Image, ButtonGroup, Button } from "@chakra-ui/react";

const BlogItem = (props) => {
    const {img, description, tags, title, code, demo} = props;
    return(
        <Box 
                display={'flex'} 
                bgColor={'#241663'}  
                borderRadius={'lg'} 
                width={{base: '100%', lg: '860px'}} 
                padding={'23px'}
                flexDirection={{base:'column', lg:'row'}}
                justifyContent={{base: 'center', lg: 'normal'}}
                alignItems={{base: 'center', lg: 'normal'}}
                borderWidth='0' 
                overflow='hidden'
                boxShadow={'dark-lg'}
                mt={'32px'}
                >   
               
                <Image h={'274px'} w={'322px'} src={img} borderRadius={'lg'} mr={{ lg:'32px'}} opacity={0.8}/>
                <Box width={'100%'} mt={'3px'}>
                    <ButtonGroup variant={'link'} marginBottom={'25px'} lineHeight={'20px'}>
                        {
                            tags.map((tag, i)=>{
                                return(
                                    <Button key={i} fontSize={'16px'} color={'yellow.300'}>#{tag}</Button>
                                )
                            })
                        }
                    </ButtonGroup>
                    <Text fontWeight={'500'} lineHeight={'30x'} fontSize={'24px'} marginBottom={'18px'} color={'pink.400'}>{title}</Text>
                    <Text w={{sm: 'sm', lg: 'lg'}} fontWeight={'500'} lineHeight={'20px'} fontSize={'16px'} color={'yellow.200'} marginBottom={'51px'}>
                        {description}
                    </Text>
                    <ButtonGroup >
                        <Link href={demo} isExternal>
                            <Button 
                                fontSize={'18px'} 
                                px={'40px'}
                                py={'13px'}
                                lineHeight={'21px'}
                                bgColor={'pink.500'}
                                borderRadius={'lg'}
                                fontWeight={'semibold'}
                                >
                                Demo
                            </Button>
                        </Link>
                        <Link href={code} isExternal>
                            <Button 
                                fontSize={'18px'}
                                px={'39px'}
                                py={'12px'}
                                variant={'outline'}
                                colorScheme={'pink'}
                                borderRadius={'lg'}
                                fontWeight={'semibold'}
                                >
                                Code
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Box>
            </Box>
    )
}

export default function Blog(){
    return(
        <Box 
            width={'100%'}
            mt={{sm:'32px', lg: '0px'}}
            >
            <Box>
                <Text 
                    padding={'22px'} 
                    bgColor={'#241663'}  
                    borderRadius={'lg'} 
                    marginBottom={'32px'}
                    borderWidth='0' 
                    overflow='hidden'
                    boxShadow={'dark-lg'}
                    color={'pink.400'}
                    fontWeight={'600'}
                    fontSize={'24px'}
                    >
                        Blog (2)
                    </Text>
            </Box>
            <BlogItem 
                tags={['JSX','ReactJS', 'NodeJS','CSS', 'Redux']}
                code={"https://github.com/nb341/Image-Uploader"}
                demo={"https://image-uploader-08jw.onrender.com/"}
                
                title={'Image Uploader'}
                description={'In this project I use React.js and CSS for the frontend as well as Redux for state management. I also use NodeJS to handle upload and storage to the server.'}
                />
            <BlogItem 
                tags={['JSX','ReactJS', 'NodeJS','CSS', 'Redux']}
                code={"https://github.com/nb341/Image-Uploader"}
                demo={"https://image-uploader-08jw.onrender.com/"}
               
                title={'Image Uploader'}
                description={'In this project I use React.js and CSS for the frontend as well as Redux for state management. I also use NodeJS to handle upload and storage to the server.'}
                />
                
        </Box>
    )
}
