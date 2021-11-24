import axios from 'axios';
import { openAlert } from '../Redux/Slices/alertSlice';
import {
	setPending,
	setCard,
	updateTitle,
	updateDescription,
	addComment,
	updateComment,
	deleteComment,
	addMember,
	deleteMember,
	createLabel,
} from '../Redux/Slices/cardSlice';
import { setCardTitle } from '../Redux/Slices/listSlice';
const baseUrl = 'http://localhost:3001/card';

export const getCard = async (cardId, listId, boardId, dispatch) => {
	dispatch(setPending(true));
	try {
		const response = await axios.get(baseUrl + '/' + boardId + '/' + listId + '/' + cardId);

		const card = await JSON.parse(JSON.stringify(response.data));
		dispatch(setCard(card));
		dispatch(setPending(false));
	} catch (error) {
		dispatch(setPending(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const titleUpdate = async (cardId, listId, boardId, title, dispatch) => {
	try {
		dispatch(setCardTitle({ listId, cardId, title }));
		dispatch(updateTitle(title));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId, { title: title });
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const descriptionUpdate = async (cardId, listId, boardId, description, dispatch) => {
	try {
		dispatch(updateDescription(description));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId, { description: description });
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const comment = async (cardId, listId, boardId, text, userName, dispatch) => {
	try {
		dispatch(setPending(true));
		const response = await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/add-comment', {
			text: text,
		});
		dispatch(addComment(response.data));
		dispatch(setPending(false));
	} catch (error) {
		dispatch(setPending(false));
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const commentUpdate = async (cardId, listId, boardId, text, commentId, dispatch) => {
	try {
		dispatch(updateComment(commentId, text));
		await axios.put(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + commentId, {
			text: text,
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const commentDelete = async (cardId, listId, boardId, commentId, dispatch) => {
	try {
		dispatch(deleteComment(commentId));
		await axios.delete(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/' + commentId);
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const memberAdd = async (cardId, listId, boardId, memberId, memberName, dispatch) => {
	try {
		dispatch(addMember({memberId,memberName}));
		await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/add-member', {
			memberId: memberId,
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const memberDelete = async (cardId, listId, boardId, memberId, memberName, dispatch) => {
	try {
		dispatch(deleteMember({memberId}));
		await axios.delete(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/'+ memberId+'/delete-member');
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};

export const labelCreate = async (cardId, listId, boardId, text,color,backColor,  dispatch) => {
	try {
		dispatch(createLabel({text,color,backColor,selected:true}));
		await axios.post(baseUrl + '/' + boardId + '/' + listId + '/' + cardId + '/create-label', {
			text,
			color,
			backColor
		});
	} catch (error) {
		dispatch(
			openAlert({
				message: error?.response?.data?.errMessage ? error.response.data.errMessage : error.message,
				severity: 'error',
			})
		);
	}
};