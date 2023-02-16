import AuthModal from '@/components/Modal/Auth/AuthModal';
import { auth } from '@/firbase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { signOut, User } from 'firebase/auth';
import React from 'react';
import AuthButtons from './AuthButtons';
import Icons from './Icons';

type RightContentProps = {
	user?: User | null;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => {
	return (
		<>
			<AuthModal />
			<Flex>
				{user ? <Icons /> : <AuthButtons />}
				{/* <Menu /> */}
			</Flex>
		</>
	);
};
export default RightContent;
