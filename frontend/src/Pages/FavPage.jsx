import React, { useEffect, useState } from 'react'
import { Avatar, Box, Button, HStack, Heading, Img, Input, Spinner,Text } from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {AiFillHeart} from "react-icons/ai"
export const FavPage = () => {
    
const [recipe,setrecipe]=useState([])
const [loading,setLoading]=useState(false);

const handlelogout=()=>{
    localStorage.removeItem("webledger_token")
}

useEffect(()=>{
    axios.get("http://localhost:8080/fav").then((res)=>{
        console.log(res.data);
        setrecipe(res.data)
        }).catch((err)=>{
            console.log(err);
        })
},[])
  return (
    <Box>
        <Text fontSize={'35'} mt={'5'} fontWeight={'semibold'} color={'blue.400'} >All your favorite recipes are here.</Text>

        <Button bg={'red.500'} color={'white'} onClick={handlelogout()}
        _hover={{
            bg: 'red.500',
            color:'white'
                }}
        >Logout</Button>

        {
            loading?<Box h={'100vh'} w={'80%'} m={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}><Spinner/></Box>:<Box display={'grid'} gridTemplateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={'20px'} w={['90%','90%','80%']} m={'auto'} >
            {
                recipe && recipe.map((el,i)=>{
                    return <Box key={i} shadow={'md'} p={'20px'} borderRadius={'15px'} cursor={'pointer'} >
                       
                        <Img src={el.image} borderRadius={'20px'}/>
                        <HStack justifyContent={"space-evenly"} mt={'5'}>
                        <Heading textAlign={'center'} size={'sm'}>{el.title}</Heading>
                        <AiFillHeart size={'30'} color='red' />
                        </HStack>
                    </Box>
                }) 
            }
        </Box>
        }
        
    </Box>
  )
}
