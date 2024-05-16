Games Global Full Stack Assessment - Jamie Paterson

The repository is divided into three folders labelled with their intended use case. The backend program should be installed and activated first, followed by the frontend program.

The first step is to clone the repository using git clone.

Running the postgres database
1) Install postgres.app at https://postgresapp.com/downloads.html
2) Once the app has downloaded, Click "Initialize" on the Postgres UI to create a new server
3) Double click on the database titled "postgres", which loads your PostgreSQL terminal window
4) Copy the SQL script found in the konbert... file in the backend folder, and paste the code into the PostgreSQL terminal window

Getting started with the Backend 
1) Open terminal
2) Point your terminal location to the backend folder (cd backend)
3) dotnet run --launch-profile https
4) Check if the backend is live by loading the URL https://localhost:7126/swagger/index.html in your browser

Getting started with the Frontend
1) Open new terminal window
2) cd into frontend
3) npm install
4) npm start
