# Technologies 🇫🇷

**Le projet a été réaliser avec les technologies suivante :**
	- MySql
	- NodeJs
	- ReactJs
	
# Instructions 🇫🇷

## BACKEND

1 - Décompresser l'archive. 

2 - Ouvrer le dossier avec **Visual Studio Code**.

3 - Ouvrer le **Terminal**.

4 - Taper ensuite cd **backend**.

5 - Ensuite, taper **yarn** ou **npm install**.

6 - Avec **TablePlus** ou **Autres** creer une **base de données** du nom que vous souhaitez.

7 - **Importer** la base de donnée au format **.sql** situer dans le dossier **/backend/DataBase** et **sauvegarder** votre base de donnée.

8 - Créer un dossier "config" dans **backend/**.

9 - Situer vous dans **backend/config** et créer un fichier "config.json" et situez vous dessus.

10 -  Mettez-y vos **Informations** de connexion à votre **Base de donnée**.

**Exemple :**
		
	{
	  "development": 
	    {
	        "username": "User",
		"password": "Password",
		"database": "DatabaseName",
		"host": "localhost",
		"dialect": "mysql",
		"dialectOptions": {
		"charset": "utf8_general_ci"
	    },
		"port": 3306
	    }
	}
	
11 - A la racine du dossier **backend**, creer un fichier **.env** et entrer les informations suivantes :

	TOKEN = "1234567890azertyuiop"(votre token)
	PORT = "4000" (votre port)
	
12 - Pour **Terminer** dans le **Terminal**, faites **yarn start** ou **npm start**.

## FRONTEND

1 - Ouvrez un nouveau **Terminal** et faites **cd frontend**.

2 - Tapez ensuite **yarn** ou **npm install**.

3 - Dans le dossier **/frontend/src/Config/** situez-vous sur le fichier **Api.js** et modifier les informations suivantes :

	baseURL: "http://localhost:4000"(port de votre Api(backend))
        
4 - Dans le **Terminal**, tapez **yarn start** ou **npm start**.
	
# Informations de connexion 🇫🇷

**Comptes :**
 - **Évaluateur**
 - Email : evaluateur@groupomania.com
 - Mot de passe : Evaluateur123@
 - **Mentor**
 - Email : mentor@groupomania.com
 - Mot de passe : Mentor123@
 - **Utilisateur**
 - Email : utilisateur@groupomania.com
 - Mot de passe : Utilisateur123@

**Informations :**

*Le profil **Évaluateur** ainsi que **Mentor** ont des droits d'administration.*

# A propos du projet 🇫🇷

Il s'agit du **Projet 7** de la formation **Développeur Web** sur **Openclassrooms**.


# Technologies 🇬🇧

**The project was carried out with the following technologies:**
	- MySql
	- NodeJs
	- ReactJs

# Steps 🇬🇧

## BACKEND

1 - Unzip the archive.

2 - Open the file with **Visual Studio Code**.

3 - Open the **Terminal**.

4 - Type  **cd backend**.

5 - Next, type **yarn** ou **npm install**.

6 - Now, with **TablePlus** or **Other Software** create a  **DataBase** with the name you want.

7 - ** Import ** the database in **. Sql format ** located in the ** / backend / DataBase ** folder and ** save ** your database.

8- Go to the ** backend ** folder and locate yourself in the ** config.json ** file.

9-  Enter your ** Information ** for connection to your ** Database **.

**Example :**
		
	{
	  "development": 
	    {
	        "username": "User",
		"password": "Password",
		"database": "DatabaseName",
		"host": "localhost",
		"dialect": "mysql",
		"dialectOptions": {
		"charset": "utf8_general_ci"
	    },
		"port": 3306
	    }
	}
	
10 - At the root of the ** backend ** folder, create a **. Env ** file and enter the following information:

	TOKEN = "1234567890azertyuiop"(Your Token)
	PORT = "4000" (Your Port)
	
11 - To ** Finish** in ** Terminal **, do ** yarn start ** or ** npm start **.

## FRONTEND

1 - Open a new ** Terminal ** and do ** cd frontend **.

2 - Then type ** yarn ** or ** npm install **.

3 - In the ** / frontend / Config / ** folder, find the ** Api.js ** file and modify the following information:

	baseURL: "http://localhost:4000"(Port of your API(backend))
        
4 - In the ** Terminal **, type ** yarn start ** or ** npm start **.

# Login Infos  🇬🇧

**Accounts :**
 - **Evaluator**
 - Email : evaluateur@groupomania.com
 - Mot de passe : Evaluateur123@
 - **Mentor**
 - Email : mentor@groupomania.com
 - Mot de passe : Mentor123@
 - **User**
 - Email : utilisateur@groupomania.com
 - Mot de passe : Utilisateur123@

# A propos du projet 🇬🇧

This is **Project 7** of the **Web Developer** training on **Openclassrooms**.


# Copyright 


<p align="center">
  <img src="https://zupimages.net/up/21/49/d21v.png" />
</p>