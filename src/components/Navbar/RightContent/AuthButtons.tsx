import { authModalState } from '@/atoms/AuthModalAtom';
import { useSetRecoilState } from 'recoil';
import { Button } from '@chakra-ui/react';
import React from 'react';

const AuthButtons: React.FC = () => {
	const setAuthModalState = useSetRecoilState(authModalState);
	return (
		<>
			<Button
				variant='outline'
				height='28px'
				display={{ base: 'none', sm: 'flex' }}
				width={{ base: '70px', md: '110px' }}
				mr={2}
				onClick={() => setAuthModalState({ open: true, view: 'login' })}>
				Log In
			</Button>
			<Button
				height='28px'
				display={{ base: 'none', sm: 'flex' }}
				width={{ base: '70px', md: '110px' }}
				mr={2}
				onClick={() => setAuthModalState({ open: true, view: 'signup' })}>
				Sing Up
			</Button>
		</>
	);
};
export default AuthButtons;
