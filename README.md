Games Global Full Stack Assessment - Jamie Paterson

The first step is to clone the repository using git clone. Afterwards, The Postgres database should be configured first, followed by the backend program, and finally with the frontend program.

Running the postgres database
1) Install postgres.app at https://postgresapp.com/downloads.html
2) Install PgAdmin at https://www.pgadmin.org/download/
3) Open Postgres and Click "Initialize" to create a new server
4) Open PGAdmin and find the database labelled "postgres" on the left-hand side. This is the DB for the app and you will later need to run a script here.
5) Copy the SQL script found in the "konbert-export..." file in the backend folder, and paste the script into the PgAdmin Query Tool, which is found by right-clicking the "Tables" tab found via the following dropdown on the left-hand side: (Databases -> postgres -> Schemas -> Tables). You can run the script by clicking the black play button.
6) If the data output is successful, then your database will be loaded with the relevant data.

Getting started with the Backend 
1) Install the .NET SDK if you haven't already at https://dotnet.microsoft.com/en-us/download/dotnet/8.0. You can check if .NET is already installed via the dotnet --info command.
2) Open terminal
3) dotnet tool install --global dotnet-ef
4) cd backend
5) dotnet ef migrations add InitialCreate —-context AppDbContext
6) dotnet ef database update —-context AppDbContext
7) dotnet restore
8) dotnet run --launch-profile https
9) Check if the backend is live by loading the URL https://localhost:7126/swagger/index.html in your browser

Getting started with the Frontend
1) Open new terminal window
2) cd into frontend
3) npm install
4) npm start

Testing the CRUD endpoints with Swagger
  Swagger can be accessed at the following URL: https://localhost:7126/swagger/
  You should start your endpoint testing with the POST endpoint, and post the sample object provided. Afterwards, you get use PUT to modify the new objects contents, and the DELETE endpoint to delete it from the list. 
  During intervening endpoint requests, you can check the success/failure of the requests by using the GET endpoint to check the status of your object (check if its been added/modified/deleted). 
  
