import React from "react";
import { Box, Text, Link, Image, ButtonGroup, Button } from "@chakra-ui/react";

const BlogItem = (props) => {
    const {description, tags, title, code, demo} = props;
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
           

                    <Text fontWeight={'500'} lineHeight={'30x'} fontSize={'24px'} marginBottom={'18px'} color={'pink.400'}>{title}</Text>
                    <Text w={{sm: 'sm', lg: 'lg'}} fontWeight={'500'} lineHeight={'20px'} fontSize={'16px'} color={'yellow.200'} marginBottom={'51px'}>
                        {description}
                    </Text>
                   
               
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
                
                title={`Why AI can't replace software engineers`}
                description={'While AI has made significant progress in code generation, testing, and automation, it’s far from replacing software engineers. Writing code is only a fraction of what software engineers do—they design systems, solve complex problems, understand user needs, and make architectural decisions that require creativity, critical thinking, and context. AI tools like Copilot can assist by speeding up repetitive tasks, but they lack the deep understanding, judgment, and adaptability needed to navigate real-world software projects. Rather than replacing engineers, AI enhances their capabilities, making them more efficient and allowing them to focus on higher-level problem solving.'}
                />
            <BlogItem 
                tags={['JSX','ReactJS', 'NodeJS','CSS', 'Redux']}
                code={"https://github.com/nb341/Image-Uploader"}
                demo={"https://image-uploader-08jw.onrender.com/"}
               
                title={`Why .NET is better than Spring`}
                description={'Many developers find .NET, particularly ASP.NET Core, more streamlined and easier to work with compared to Spring due to its modern, integrated tooling, excellent performance, and cross-platform support. .NET’s tight integration with Visual Studio, built-in dependency injection, and minimal configuration make it faster to get projects up and running. ASP.NET Core often outperforms Spring Boot in benchmarks, and C# as a language is considered more concise and expressive than Java by some. Additionally, Microsoft’s strong backing, extensive documentation, and growing open-source ecosystem make .NET a compelling choice for building scalable, high-performance web applications.'}
                />
                
        </Box>
    )
}
