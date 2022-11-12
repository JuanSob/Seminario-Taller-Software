import { getConnection } from "@server/dao/models/mongodb/MongoDBConn";
import { UserGitHubDao } from "@server/dao/models/mongodb/UserGitHubDao";

export class UserGitHub {
	private dao: UserGitHubDao;
	public constructor() {
		getConnection()
			.then(conn => {
				this.dao = new UserGitHubDao(conn);
			})
			.catch(ex => console.error(ex));
	}

	public registerUser(username: string, gitHubId:string, profileUrl:string, photos:[])
	{
		const newUserGitHub = {
			username,
			gitHubId,
			created: new Date(),
			profileUrl,
			photos,
			userType: 'GitHubUser'
		}
		return this.dao.createNewUser(newUserGitHub);
	}
}