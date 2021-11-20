import React, { useState } from 'react';
import {
	Container,
	FeatureContainer,
	Title,
	RowContainer,
	Avatar,
	AddAvatar,
	Label,
	AddLabel,
	CheckBox,
	DateDropDown,
	DateText,
	CompleteLabel,
} from './styled';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Features = () => {
	const [dateCheck, setDateCheck] = useState(false);

	return (
		<Container>
			<FeatureContainer>
				<Title>Members</Title>
				<RowContainer>
					<Avatar>QE</Avatar>
					<AddAvatar>+</AddAvatar>
				</RowContainer>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Labels</Title>
				<RowContainer>
					<Label color='#61bd4f' hoverColor='#71cd5f'>
						Done
					</Label>
					<Label color='#61bd4f' hoverColor='#71cd5f'>
						Done
					</Label>
					<Label color='#61bd4f' hoverColor='#71cd5f'>
						Done
					</Label>
					<Label color='#61bd4f' hoverColor='#71cd5f'>
						Done
					</Label>
					<Label color='#61bd4f' hoverColor='#71cd5f'>
						Done
					</Label>
					<AddLabel>+</AddLabel>
				</RowContainer>
			</FeatureContainer>
			<FeatureContainer>
				<Title>Dates</Title>
				<RowContainer>
					<CheckBox
						checked={dateCheck}
						onClick={() => {
							setDateCheck(!dateCheck);
						}}
					>
						{dateCheck && <CheckIcon fontSize='0.1rem' />}
					</CheckBox>
					<DateDropDown>
						<DateText>Nov 17 - Nov 30 at 3:57 AM</DateText>
						<CompleteLabel show={dateCheck}>complete</CompleteLabel>
						<ArrowDownIcon style={{ marginBottom: '0.2rem' }} fontSize='small' />
					</DateDropDown>
				</RowContainer>
			</FeatureContainer>
		</Container>
	);
};

export default Features;
