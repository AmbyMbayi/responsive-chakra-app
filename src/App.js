import logo from './logo.svg';
import './App.css';
import { Box, Text } from '@chakra-ui/react';
function App() {
	return (
		<Box>
			<Box border="solid 1px red" height="200px" backgroundColor={[ 'yellow', 'red', 'white', 'primary.500' ]}>
				<Text fontSize={{ base: '20px', md: '40px', lg: '60px' }}>This is box</Text>
			</Box>
			<Box border="solid 1px black" height="200px">
				<Text
					fontSize={{ base: '20px', md: '40px', lg: '60px' }}
					_hover={{
						backgroundColor: [ 'red', 'green', 'purple', 'magenta' ]
					}}>
					Hover Me
				</Text>
			</Box>
		</Box>
	);
}

export default App;
