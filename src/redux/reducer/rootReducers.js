
import { combineReducers } from "redux";
import boardReducer from "./boardReducer";
import workspaceReducer from "./workspaceReducer";
import bucketReducer from './bucketReducer'
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import userReducer from './userReducer';
import cardReducer from './cardReducer'
const boardPersistConfig = {
	key: "board",
	storage: storageSession,
};
const workspacePersistConfig = {
	key: "workspace",
	storage: storageSession,
};

const bucketPersistConfig = {
	key: "bucket",
	storage: storageSession,
};
const userPersistConfig = {
	key: "user",
	storage: storageSession,
};
const cardPersistConfig = {
	key: "card",
	storage: storageSession,
};
export default combineReducers({
	boardRoot: persistReducer(boardPersistConfig,boardReducer),
	workspaceRoot: persistReducer(workspacePersistConfig, workspaceReducer),
	bucketRoot: persistReducer(bucketPersistConfig, bucketReducer),
	userRoot:persistReducer(userPersistConfig,userReducer),
	cardRoot:persistReducer(cardPersistConfig,cardReducer)

});
