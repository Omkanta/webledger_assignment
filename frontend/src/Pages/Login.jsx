
import {
  Flex,
  Box,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {auth} from "../configure/config"
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

export default function Login() {
    const navigate=useNavigate()

    const handleLogin=()=>{
        signInWithPopup(auth,new GoogleAuthProvider).then((res)=>{
         const user={
             email:res.user.email,
             name:res.user.name
         }
         axios.post("http://localhost:8080/user",user).then((res)=>{
         localStorage.setItem("webledger_token",JSON.stringify(res.data.email))
         console.log(res.data);
         navigate('/recipe')
         }).catch((err)=>{
             console.log(err);
         })
 
 
        }).catch((err)=>{
         console.log(err);
        })
 
     }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up/ Sign in
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            using your Google account !
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Stack spacing={10} pt={2}>
                <Text>Please select your google account.</Text>
              <Button
              onClick={handleLogin}
                loadingText="Submitting"
                size="lg"
                bg={'blue.100'}
                color={'white'}
                _hover={{
                  bg: 'blue.200',
                }}>
                <FcGoogle fontSize={'25px'} />
              </Button>
            </Stack>

          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}