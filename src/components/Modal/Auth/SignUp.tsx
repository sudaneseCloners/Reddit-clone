import { authModalState } from '@/atoms/AuthModalAtom';
import { auth } from '@/firbase/clientApp';
import { Input, Button, Flex, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp: React.FC = () => {
	const setAuthmodalState = useSetRecoilState(authModalState);
	const [signUpForm, setSignUpForm] = useState({
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [error, setError] = useState('');
	const [createUserWithEmailAndPassword, user, loading, userError] =
		useCreateUserWithEmailAndPassword(auth);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (error) setError('');
		if (signUpForm.password !== signUpForm.confirmPassword) {
			setError('Passwords do not match');
			return;
		}
		// password match
		createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
	};

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSignUpForm((prev) => ({
			...prev,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<form onSubmit={onSubmit}>
			<Input
				required
				name='email'
				placeholder='email'
				type='email'
				mb={2}
				onChange={onChange}
				fontSize='10pt'
				_placeholder={{ color: 'gray.500' }}
				_hover={{
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				bg='gray.50'
			/>
			<Input
				required
				name='password'
				placeholder='password'
				type='password'
				onChange={onChange}
				mb={2}
				fontSize='10pt'
				_placeholder={{ color: 'gray.500' }}
				_hover={{
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				bg='gray.50'
			/>
			<Input
				required
				name='confirmPassword'
				placeholder='confirm password'
				type='password'
				onChange={onChange}
				mb={2}
				fontSize='10pt'
				_placeholder={{ color: 'gray.500' }}
				_hover={{
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				_focus={{
					outline: 'none',
					bg: 'white',
					border: '1px solid',
					borderColor: 'blue.500',
				}}
				bg='gray.50'
			/>
			{(error || userError) && (
				<Text
					textAlign='center'
					color='red'
					fontSize='10pt'>
					{error || userError?.message}
				</Text>
			)}
			<Button
				type='submit'
				width='100%'
				mt={2}
				mb={2}
				isLoading={loading}>
				Sing Up
			</Button>
			<Flex
				fontSize='9pt'
				justifyContent='center'>
				<Text mr={1}>Already a redditor?</Text>
				<Text
					color='blue.500'
					fontWeight={700}
					cursor='pointer'
					onClick={() =>
						setAuthmodalState((prev) => ({
							...prev,
							view: 'login',
						}))
					}>
					LOG IN
				</Text>
			</Flex>
		</form>
	);
};
export default SignUp;
