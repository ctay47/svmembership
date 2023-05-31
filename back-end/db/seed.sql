\c streetverse_membership;

INSERT INTO users (username, first_name, last_name, city, state, country, profile_pic, occupation,about_me, instagram_handle, facebook_handle, discord_handle) 
VALUES 
('user1', 'Kazi', 'Mizan', 'Los Angeles', 'CA', 'USA', 'https://images.unsplash.com/photo-1532332248682-206cc786359f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80&w=800&h=800', 'Designer', 'About me', 'john_insta', 'john_fb', 'john_discord'),
('user2', 'Romina', 'Hadid', 'San Francisco', 'CA', 'USA', 'https://images.unsplash.com/photo-1568184602824-55092fcb6497?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2ZpbGUlMjBwaWN0dXJlJTIwdHJlbmR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', 'stylist', 'About me', 'jane_insta', 'jane_fb', 'jane_discord'),
('user3', 'Aioni', 'Haust', 'San Francisco', 'CA', 'USA', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80&h=800&w=800', 'stylist', 'About me', 'jane_insta', 'jane_fb', 'jane_discord'),
('user4', 'Tracy', 'Morgan', 'San Francisco', 'CA', 'USA', 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', 'Marketing', 'About me', 'jane_insta', 'jane_fb', 'jane_discord');



INSERT INTO events (title, pic, description, date) 
VALUES 
('London', 'London Fashion Week', 'https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', '2023-06-01 10:00:00'),
('New York', 'New York Fashion Week', 'https://images.unsplash.com/photo-1587088155172-e9355df99c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80', '2023-12-31 20:00:00');

INSERT INTO messages (id, user_id, content)
VALUES 
(1, 2, 'Hello, everyone!'),
(2, 2,'Looking forward to the first meeting!');

INSERT INTO comments (user_id, message_id, content)
VALUES 
(1, 1, 'Hello John!'),
(2, 2, 'Same here, Jane!');

INSERT INTO nfts (user_id, token_id, metadata)
VALUES 
(1, '0x123...', '{"name": "Cool NFT", "description": "This is a cool NFT.", "image": "https://example.com/image.jpg"}'),
(2, '0x456...', '{"name": "Awesome NFT", "description": "This is an awesome NFT.", "image": "https://example.com/image2.jpg"}');
