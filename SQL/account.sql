create DATABASE Lokaverkefni (
       CREATE TABLE Accounts (
            AccountId int,
            Username varchar(20),
           Password varchar(30),
           FirstName varchar(40),
           LastName varchar(40)
       );
       create TABLE Messages (
            MessageSenderUsername int,
            MessageSenderMessage varchar(255),
            MessageRecieverUsername int,
            MessageRecieverMessage varchar(255)
       )
        select * from Accounts; (

        )
       select * from Messages; (
            where MessageSenderUsername < MessageRecieverUsername or not exists (
                select 1
                from Messages Mesg
                where Mesg.MessageRecieverUsername = Messages.MessageSenderUsername and
                    Mesg.MessageSenderUsername = Messages.MessagerRecieverUsername (

                )
            )
       )
);