import { authModalState } from '@/atoms/AuthModalAtom';
import { auth } from '@/firbase/clientApp';
import {
	useDisclosure,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Flex,
	Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import Authinputs from './Authinputs';
import OAuthButtons from './OAuthButtons';

const AuthModal: React.FC = () => {
	const [modalState, setModalState] = useRecoilState(authModalState);
	const [user, loading, error] = useAuthState(auth);

	const handleClose = () => {
		setModalState((prev) => ({
			...prev,
			open: false,
		}));
	};

	useEffect(() => {
		if (user) handleClose();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<>
			<Modal
				isOpen={modalState.open}
				onClose={handleClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader textAlign='center'>
						{modalState.view === 'login' && 'Login'}
						{modalState.view === 'signup' && 'Sign up'}
						{modalState.view === 'resetPassword' && 'Reset Password'}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display='flex'
						flexDirection='column'
						alignItems='center'
						justifyContent='center'
						pb={6}>
						<Flex
							direction='column'
							align='center'
							justify='center'
							width='70%'>
							<OAuthButtons />
							<Text
								color='gray.500'
								fontWeight={700}>
								OR
							</Text>
							<Authinputs />
							{/* <ResetPassword /> */}
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};
export default AuthModal;
