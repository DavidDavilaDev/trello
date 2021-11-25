import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cardId: '',
	title: '',
	labels: [],
	members: [],
	watchers: [],
	activities: [],
	checklists: [],
	owner: '',
	description: '',
	pending: false,
};

const cardsSlice = createSlice({
	name: 'card',
	initialState,
	reducers: {
		reset: (state) => initialState,
		setPending: (state, action) => {
			state.pending = action.payload;
		},
		setCard: (state, action) => {
			state.cardId = action.payload._id;
			state.title = action.payload.title;
			state.labels = action.payload.labels;
			state.members = action.payload.members;
			state.watchers = action.payload.watchers;
			state.activities = action.payload.activities;
			state.owner = action.payload.owner;
			state.listTitle = action.payload.listTitle;
			state.listId = action.payload.listId;
			state.boardId = action.payload.boardId;
			state.description = action.payload.description;
			state.checklists = action.payload.checklists;
		},
		updateTitle: (state, action) => {
			state.title = action.payload;
		},
		updateDescription: (state, action) => {
			state.description = action.payload;
		},
		addComment: (state, action) => {
			state.activities = action.payload;
		},
		updateComment: (state, action) => {
			const { commentId, text } = action.payload;
			state.activities = state.activities.map((activity) => {
				if (activity._id === commentId) {
					activity.text = text;
				}
				return activity;
			});
		},
		deleteComment: (state, action) => {
			state.activities = state.activities.filter((act) => act._id !== action.payload);
		},
		addMember: (state, action) => {
			const { memberId, memberName } = action.payload;
			state.members.unshift({ user: memberId, name: memberName });
		},
		deleteMember: (state, action) => {
			const { memberId } = action.payload;
			state.members = state.members.filter((member) => member.user !== memberId);
		},
		createLabel: (state, action) => {
			const { _id, text, color, backColor } = action.payload;
			state.labels.unshift({ _id, text, color, backColor, selected: true });
		},
		updateLabel: (state, action) => {
			const { labelId, text, color, backColor } = action.payload;
			state.labels = state.labels.map((label) => {
				if (label._id === labelId) {
					label.text = text;
					label.color = color;
					label.backColor = backColor;
				}
				return label;
			});
		},
		deleteLabel: (state, action) => {
			state.labels = state.labels.filter((label) => label._id !== action.payload);
		},
		updateLabelSelection: (state, action) => {
			const { labelId, selected } = action.payload;
			state.labels = state.labels.map((label) => {
				if (label._id === labelId) {
					label.selected = selected;
				}
				return label;
			});
		},
		updateCreatedLabelId: (state, action) => {
			state.labels = state.labels.map((label) => {
				if (label._id === 'notUpdated') {
					label._id = action.payload;
				}
				return label;
			});
		},
		createChecklist: (state, action) => {
			const { _id, title } = action.payload;
			state.checklists.push({ _id, title, items:[] });
		},
		updateCreatedChecklist: (state, action) => {
			state.checklists = state.checklists.map((checklist) => {
				if (checklist._id === 'notUpdated') {
					checklist._id = action.payload;
				}
				return checklist;
			});
		},
		deleteChecklist: (state, action) => {
			state.checklists = state.checklists.filter((list) => list._id !== action.payload);
		},
	},
});

export const {
	reset,
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
	updateLabel,
	deleteLabel,
	updateLabelSelection,
	updateCreatedLabelId,
	createChecklist,
	updateCreatedChecklist,
	deleteChecklist,
} = cardsSlice.actions;
export default cardsSlice.reducer;
