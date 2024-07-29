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


insert into posts values(10, "Kumar", "Kumar@gmail.com", "Kumar", "2023-12-1", 1);