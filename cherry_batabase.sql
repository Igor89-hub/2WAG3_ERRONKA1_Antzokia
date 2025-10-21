drop database if exists antzokia;
create schema antzokia;
use antzokia;

create table erabiltzailea(
id_erabiltzailea int auto_increment,
izena varchar (40),
abizena varchar (40),
emaila varchar (40),
pasahitza varchar (50),
mota varchar(50),
CONSTRAINT pk_id_erabiltzailea PRIMARY KEY (id_erabiltzailea)
);

create table ekitaldiak(
id_ekitaldia int auto_increment,
izena varchar (40),
noiz varchar (40),
ordua datetime,
lekua varchar (50),
deskribapena varchar(500),
CONSTRAINT pk_id_ekitaldia PRIMARY KEY (id_ekitaldia)
);

create table sarrerak(
id_sarrerak int auto_increment,
fk_id_ekitaldia int,
prezioa int,
eserleku_kopuru int,
CONSTRAINT pk_id_sarrerak PRIMARY KEY (id_sarrerak),
FOREIGN KEY (fk_id_ekitaldia) REFERENCES ekitaldiak(id_ekitaldia)
);

create table ikusi(
id_erabiltzailea int,
id_ekitaldia int,
CONSTRAINT pk_id_erabiltzailea PRIMARY KEY (id_erabiltzailea,id_ekitaldia),
FOREIGN KEY (id_ekitaldia) REFERENCES ekitaldiak(id_ekitaldia),
FOREIGN KEY (id_erabiltzailea) REFERENCES erabiltzailea(id_erabiltzailea)
);
