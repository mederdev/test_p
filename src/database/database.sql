create table Cars(
	id SERIAL PRIMARY KEY,
	carName varchar(20),
	carAvailable BOOLEAN,
	lastOrderDay DATE,
);


create table Orders(
	id SERIAL PRIMARY KEY,
	carID INTEGER,
	carName varchar(20),
	startDate DATE,
	endDate DATE,
	price INTEGER,
	FOREIGN KEY (carID) REFERENCES Cars(id)
);

