import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	ModalFooter,
	Box,
	Divider,
	Text,
	Input,
	Stack,
	Checkbox,
	Flex,
	Icon,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';
import { HiLockClosed } from 'react-icons/hi';

type CreateCommunityModalProps = {
	open: boolean;
	handleClose: () => void;
};

const CreateCommunityModal: React.FC<CreateCommunityModalProps> = ({
	open,
	handleClose,
}) => {
	const [communityName, setCommunityName] = useState('');
	const [charsRemaining, setCharsRemaining] = useState(21);
	const [communityType, setCommunitytype] = useState('public');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.value.length > 21) return;

		setCommunityName(event.target.value);
		setCharsRemaining(21 - event.target.value.length);
	};

	const onCommunityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCommunitytype(event.target.name);
	};
	return (
		<>
			<Modal
				isOpen={open}
				onClose={handleClose}
				size='lg'>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader
						display='flex'
						flexDir='column'
						fontSize={15}
						padding={3}>
						Create Community
					</ModalHeader>
					<Box
						pl={3}
						pr={3}>
						<Divider />
						<ModalCloseButton />
						<ModalBody
							display='flex'
							flexDir='column'
							padding='10px 0px'>
							<Text
								fontWeight={600}
								fontSize={15}>
								Name
							</Text>
							<Text
								fontSize={11}
								color='gray.500'>
								Commuinty names including capitalization cannot be changed
							</Text>
							<Text
								position='relative'
								top='28px'
								left='10px'
								width='20px'
								color='gray.500'>
								r/
							</Text>
							<Input
								position='relative'
								value={communityName}
								size='sm'
								pl='22px'
								onChange={handleChange}
							/>
							<Text
								fontSize='9pt'
								color={charsRemaining === 0 ? 'red' : 'gray.500'}>
								{charsRemaining}Characters Reamaining
							</Text>
							<Box>
								<Text
									mt={4}
									mb={4}>
									Community Type
								</Text>
								<Stack>
									<Checkbox
										name='public'
										isChecked={communityType === 'public'}
										onChange={onCommunityChange}>
										<Flex align='center'>
											<Icon
												as={BsFillPersonFill}
												color='gray.500'
												mr={2}
											/>
											<Text
												fontSize='10pt'
												mr={1}>
												Public
											</Text>
											<Text
												fontSize='8pt'
												color='gray.500'
												pt={1}>
												Anyone can view, post and comment to this community
											</Text>
										</Flex>
									</Checkbox>
									<Checkbox
										name='restricted'
										isChecked={communityType === 'restricted'}
										onChange={onCommunityChange}>
										<Flex align='center'>
											<Icon
												as={BsFillEyeFill}
												color='gray.500'
												mr={2}
											/>
											<Text
												fontSize='10pt'
												mr={1}>
												Restricted
											</Text>
											<Text
												fontSize='8pt'
												color='gray.500'
												pt={1}>
												Anyone can view this community, but only approved users can post
											</Text>
										</Flex>
									</Checkbox>
									<Checkbox
										name='private'
										isChecked={communityType === 'private'}
										onChange={onCommunityChange}>
										<Flex align='center'>
											<Icon
												as={HiLockClosed}
												color='gray.500'
												mr={2}
											/>
											<Text
												fontSize='10pt'
												mr={1}>
												Private
											</Text>
											<Text
												fontSize='8pt'
												color='gray.500'
												pt={1}>
												Only approved users can view and submit to this community
											</Text>
										</Flex>
									</Checkbox>
								</Stack>
							</Box>
						</ModalBody>
					</Box>

					<ModalFooter
						bg='gray.100'
						borderRadius='0px 0px 10px 10px'>
						<Button
							variant='outline'
							height='30px'
							mr={3}
							onClick={handleClose}>
							Cancel
						</Button>
						<Button
							height='30px'
							onClick={() => {}}>
							Create Community
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default CreateCommunityModal;
