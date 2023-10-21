import { Avatar, Box, Button, HStack, Heading, Img, Input, Spinner,Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {AiFillHeart} from "react-icons/ai"

const Recipe = () => {

const user_email=localStorage.getItem("webledger_token")||null

const [recipe_name,setName]=useState("")
const [recipe,setRecipe]=useState([])
const [loading,setLoading]=useState(false)
const navigate=useNavigate()
const handleSearch=()=>{
    setLoading(true)
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=abd70084fbcd4cffb2822b7e1a33d571&query=${recipe_name}`)
    .then((res)=>{
        setLoading(false)
        setRecipe(res.data.results);
    }).catch((err)=>{
        setLoading(false)
        console.log(err);
    })
}

const handleFav=(id,title,image)=>{
    let obj={
        user_email,
        recipe_name:title,
        recipe_id:id,
        recipe_image:image
    }
    console.log(obj);
    axios.post("http://localhost:8080/fav/add",obj).then((res)=>{
        console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
}

  return (
    <Box>
        <Text fontSize={'35'} mt={'5'} fontWeight={'semibold'} color={'blue.400'} >Search any recipe you want !!</Text>

        <Button bg={'red.500'} color={'white'} mr={'15'}
        _hover={{
            bg: 'red.500',
            color:'white'
                }}
        >Logout</Button>
        <Button onClick={()=>navigate(`/favpage`)}
        >Favorite recipe  <AiFillHeart ml="4" size={'20'} color='red'/></Button>
        <Box display={'flex'} w={['80%','50%','25%']} m={'35px auto'} gap={'5px'}>
            <Input placeholder={"Enter recipe here..."} onChange={(e)=>setName(e.target.value)} />
            <Button onClick={handleSearch} colorScheme={'facebook'}>Search</Button>
        </Box>
        {
            loading?<Box h={'100vh'} w={'80%'} m={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}><Spinner/></Box>:<Box display={'grid'} gridTemplateColumns={['repeat(1, 1fr)','repeat(2, 1fr)','repeat(3, 1fr)']} gap={'20px'} w={['90%','90%','80%']} m={'auto'} >
            {
                recipe && recipe.map((el,i)=>{
                    return <Box key={i} shadow={'md'} p={'20px'} borderRadius={'15px'} cursor={'pointer'} onClick={()=>{handleFav(el.id,el.title,el.image)}}>
                       
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

export default Recipe
