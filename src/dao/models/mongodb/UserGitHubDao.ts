import {IUserGitHub} from '../entities/UserGitHub';
import { AbstractDao } from './AbstractDao';
import { Db } from 'mongodb';

export class UserGitHubDao extends AbstractDao <IUserGitHub>{
    public constructor(db: Db) {
		super('users', db);
	}

	createNewUser(userGitHub: IUserGitHub){
		const { ...newUser} = userGitHub;
		return this.createOne(newUser);
	}
}