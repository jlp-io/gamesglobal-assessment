Games Global Full Stack Assessment - Jamie Paterson

The first step is to clone the repository using git clone. Afterwards, The Postgres database should be configured first, followed by the backend program, and finally with the frontend program.

Running the postgres database
1) Install postgres.app at https://postgresapp.com/downloads.html
2) Install PgAdmin at https://www.pgadmin.org/download/
3) Once the app has downloaded, open it and Click "Initialize" on the Postgres UI to create a new server
4) Open PGAdmin and find the database labelled "postgres" on the left-hand side. This is the DB for the app and you will later need to run a script here.
5) Copy the SQL script found in the konbert... file in the backend folder, and paste the script into the PgAdmin Query Tool, which is found by right-clicking the "Tables" tab found via the following dropdown on the left-hand side: (Databases -> postgres -> Schemas -> Tables). You can run the script by clicking the black play button.
6) If the data output is successful, then your database will be loaded with the relevant data.

Getting started with the Backend 
1) Open terminal
2) cd backend
3) dotnet run --launch-profile https
4) Check if the backend is live by loading the URL https://localhost:7126/swagger/index.html in your browser

Getting started with the Frontend
1) Open new terminal window
2) cd into frontend
3) npm install
4) npm start
