CREATE TABLE Accounts
(
    AccountId int,
    Username varchar(255),
    FirstName varchar(255),
    LastName varchar(255),
    EmailAddress varchar(255),
    country varchar(255) NULL,
    -- Optional
    PhoneNumberCountry int NULL,
    -- Optional
    PhoneNumber int NULL,
    -- Optional
    -- You can edit this table if you want to.
);

INSERT INTO Accounts [0, gummi, Hannes, Hallgrímsson, leoaustmannbaldursson@gmail.com, Canada]