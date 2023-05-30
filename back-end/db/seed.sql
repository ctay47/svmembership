\c streetverse_membership;

INSERT INTO users (username, first_name, last_name, city, state, country, profile_pic, instagram_handle, facebook_handle, discord_handle) 
VALUES 
('user1', 'John', 'Doe', 'Los Angeles', 'CA', 'USA', 'image.jpg', 'john_insta', 'john_fb', 'john_discord'),
('user2', 'Jane', 'Doe', 'San Francisco', 'CA', 'USA', 'image2.jpg', 'jane_insta', 'jane_fb', 'jane_discord');

INSERT INTO events (title, description, date) 
VALUES 
('First Meeting', 'Our first meeting of the year.', '2023-06-01 10:00:00'),
('Annual Gala', 'Our annual gala event.', '2023-12-31 20:00:00');

INSERT INTO messages (user_id, content)
VALUES 
(1, 'Hello, everyone!'),
(2, 'Looking forward to the first meeting!');

INSERT INTO comments (user_id, message_id, content)
VALUES 
(2, 1, 'Hello John!'),
(1, 2, 'Same here, Jane!');

INSERT INTO nfts (user_id, token_id, metadata)
VALUES 
(1, '0x123...', '{"name": "Cool NFT", "description": "This is a cool NFT.", "image": "https://example.com/image.jpg"}'),
(2, '0x456...', '{"name": "Awesome NFT", "description": "This is an awesome NFT.", "image": "https://example.com/image2.jpg"}');
