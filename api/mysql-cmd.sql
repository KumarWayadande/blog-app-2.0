create table user (
    id INT not null AUTO_INCREMENT,
    username varchar(2555),
    email varchar(255),
    password varchar(255),
    img varchar(2555),
    primary key (id)
)


create table posts (
    id int not null AUTO_INCREMENT,
    title varchar(4555),
    descr varchar(4555),
    img varchar(4555),
    postDate datetime,
    postUid int,
    primary key (id),
    foreign key (postUid) REFERENCES users(id) on delete cascade
)


ALTER TABLE posts
ADD FOREIGN KEY (postUid) REFERENCES users(id);

insert into users values(1, "Kumar", "Kumar@gmail.com", "Kumar", "msjkmemk.com");


insert into posts values(10, "Introduction to Javascript arrow function - art cat", "lorem dkej ednjend jknd njdknejd njwnd kjn dn wkjdn jknd kjnw ndkjnw dkjn wdn jkn wkjdn jknd kjnw ndkjnw dkjn wdn jkn", "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "2023-12-1", 1);
insert into posts values(11, "Introduction to Basic science of human - science cat", "lorem dkej ednjend jknd njdknejd njwnd kjn dn wkjdn jknd kjnw ndkjnw dkjn wdn jkn wkjdn jknd kjnw ndkjnw dkjn wdn jkn", "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "2023-12-1", 1);
insert into posts values(12, "Introduction to Basic science of human - science cat - By Kumar", "lorem dkej ednjend jknd njdknejd njwnd kjn dn wkjdn jknd kjnw ndkjnw dkjn wdn jkn wkjdn jknd kjnw ndkjnw dkjn wdn jkn", "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "2023-12-1", 11, "food");

alter table posts
add cat varchar(1000)

update posts
set cat = "art"
where id = 10;


SELECT username, title, descr, p.img, u.img, cat, postDate FROM users u JOIN posts p ON u.id = p.postUid WHERE p.postUid = 1;