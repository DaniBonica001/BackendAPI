CREATE TABLE user (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(15) UNIQUE NOT NULL,
    profilePicture BYTEA
);

INSERT INTO user (id, name, phone) VALUES (1, "Jhon Doe", "+573154620529");