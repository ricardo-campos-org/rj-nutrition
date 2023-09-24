create table if not exists user (
    id int auto_increment,
    name varchar(40) not null,
    hight int not null,
    birthdate date not null,
    is_admin boolean not null,
    created_at timestamp not null default current_timestamp(),
    updated_at timestamp null default null,
    constraint user_pk
      primary key(id)
);

create table if not exists user_checkin (
    user_id int not null,
    created_at timestamp not null default current_timestamp(),
    weight decimal(4,2) not null,
    bmi decimal(4,2) not null, -- (imc -> body mass index)
    body_fat_perc decimal(4,2) not null, -- percentual de gordura
    body_fat_weight decimal(5,2) not null, -- massa de gordura
    body_weight_left decimal(5,2) not null, -- massa residual
    weight_fat_free decimal(5,2) not null, -- massa livre de gordura
    right_arm decimal(3,1) null,
    weist decimal(4,1) null, -- cintura
    medial_thigh decimal(4,1) null, -- coxa medial
    proximal_thigh decimal(4,1) null, -- coxa proximal
    thorax decimal(4,1) null,
    abdomen decimal(4,1) null,
    hip decimal(4,1) null, -- quadril
    constraint user_checkin_pk
      primary key(user_id, created_at),
    constraint user_checkin_fk
      foreign key(user_id) references user(id)
);

create table if not exists  user_objective (
    user_id int not null,
    name varchar(100) not null,
    type char(1) not null, -- one of (D-Daily, W-Weekly)
    repetion int not null, -- repetition number on the month
    created_at timestamp not null default current_timestamp(),
    updated_at timestamp null default null,
    constraint user_objective_pk
      primary key(user_id, name),
    constraint user_objective_fk
      foreign key(user_id) references user(id)
);

-- cardápio
create table if not exists diet (
    id int auto_increment,
    user_id int not null,
    name varchar(20) not null,
    created_at timestamp not null default current_timestamp(),
    updated_at timestamp null default null,
    constraint diet_pk
      primary key(id),
    constraint diet_fk
      foreign key(user_id) references user(id)
);

-- cada item, ex: arroz, feijão, ovo
create table if not exists item (
    id int auto_increment,
    name varchar(30) not null,
    energy_kcal int not null,
    protein int not null,
    lipid int not null,
    colesterol int not null,
    carbohydrate int not null,
    fibre int not null,
    calcium int not null,
    iron int not null,
    sodium int not null,
    source varchar(20) not null,
    created_at timestamp not null default current_timestamp(),
    updated_at timestamp null default null,
    constraint item_pk
      primary key(id)
);

-- cada item do cardápio, ex. almoço, café da tarde -- reviws ID from here ...
create table if not exists diet_detail (
    id int auto_increment,
    diet_id int not null,
    item_id int not null,
    quantity int not null,
    unity varchar(5) not null,
    name varchar(20) not null, -- ex: desjejum
    time char(5) not null, -- ex: 07:00
    comment varchar(500) null,
    created_at timestamp not null default current_timestamp(),
    updated_at timestamp null default null,
    constraint diet_detail_pk
      primary key(id, diet_id, item_id),
    constraint diet_detail_diet_fk
      foreign key(diet_id) references diet(id),
    constraint diet_detail_item_fk
      foreign key(item_id) references item(id)
);

-- should be created when finished creating all diets to an user
create table if not exists diet_summary (
    id int auto_increment,
    diet_id int not null,
    user_id int not null,
    protein_amount_gkg decimal(3,2) not null, -- amount of protein in grams for quilogram
    protein_amount_perc decimal(4,2) not null, -- amount of protein in percentage
    carbohydrate_amount_gkg decimal(3,2) not null,
    carbohydrate_amount_perc decimal(4,2) not null,
    fat_amount_gkg decimal(3,2) not null,
    fat_amount_perc decimal(4,2) not null,
    energy_amount int not null,
    constraint diet_summary_pk
      primary key(id),
    constraint diet_summary_user_fk
      foreign key(user_id) references user(id),
    constraint diet_summary_diet_fk
      foreign key(diet_id) references diet(id)
);
