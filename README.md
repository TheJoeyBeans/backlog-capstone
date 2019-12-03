BackLog: 
Users can keep track of games they want to play:
	-Games that are already owned
	-Games that are not owned. 
	-Games can be marked as currently playing
		-STRETCH GOAL: Steam API to notify user of sales when games they want to play but don’t own go on sale. 
Users can keep track of games they’ve completed: 
	-Give final impressions 
	-Recommendation: Yes or No 

UserList: 
siteUsers: []

Users: 
-E-mail/Password
-backLogGames: []
-completedGames: []
-Recommended Games:[]
-STRETCH GOAL:
	-Following: []
	-Followers: []


Games: 
-Title
-Cover Art
-Studio
-Year
-Platform
-playing: boolean
-final impression
-recommended: boolean

APIs:
-Gamedata will be fetched by RAWG Video Games Database
STRETCH GOAL: Steam API to ping sales(???) Checkout Docs

User Stories: 
-When not signed in everyone should be able to access search functionality. 
-signed in users will be able to search for games and click to add them to their: backlog or completed. 
-User backlog will be a list of titles. Game title, cover art, and platform will be visible for each title. Within the backlog list, users will be able to transfer titles to completed. Games can be marked as “Currently Playing” Users can mark games on their backlog as wish listed or already owned. Users can filter the list by wishlist or owned. 
[STRETCHGOAL: wishlisted games will be marked as “ON SALE” when on sale]
-Completed list will show list of user’s completed games. Game title, cover art, platform, and recommended or not will be visible if the user has recommended or not recommended a title. Clicking on game will take user to a page which recommendation and final impression.
-User will be able to delete items from all lists and edit final impressions/recommendation on played lists. 
[Stretch Goals]
-Users will be able to look up other users and see their game lists. Users can follow other users and see what users are following them. 

WIREFRAME ROUGH DRAFT: 
https://imgur.com/a/GiTTusv
