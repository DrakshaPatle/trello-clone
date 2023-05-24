
import { combineReducers } from "redux";
import ProjectSlice from "./ProjectSlice";
import WorkspaceSlice from "./WorkspaceSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const userPersistConfig = {
	key: "user",
	storage: storageSession,
};
const companyPersistConfig = {
	key: "company",
	storage: storageSession,
};


export default combineReducers({
	projectRoot: persistReducer(userPersistConfig, ProjectSlice),
	workspaceRoot: persistReducer(companyPersistConfig, WorkspaceSlice),
});
