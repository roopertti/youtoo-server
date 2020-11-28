docker build -t youtoo-db-image .
docker run -itd --name youtoo-db -p 5432:5432 postgres youtoo-db-image