-- LOCK TABLES `post` WRITE;

INSERT INTO `post` (`admin_id`, `status`, `image`, `comment_status`, `password`, `parent`, `sort_order`, `type`, `template`, `comment_count`, `created_at`, `updated_at`)  VALUES 

(1,'publish','noimage-post.jpg','open','',0,0,'post','',0,'2022-05-01 00:00:00','2022-05-01 00:00:00'),
(1,'publish','noimage-post.jpg','open','',0,0,'post','',0,'2022-05-02 00:00:00','2022-05-02 00:00:00'),
(1,'publish','noimage-post.jpg','open','',0,0,'post','',0,'2022-05-03 00:00:00','2022-05-03 00:00:00'),
(1,'publish','noimage-post.jpg','open','',0,0,'post','',0,'2022-06-01 00:00:00','2022-06-01 00:00:00'),
(1,'publish','','open','',0,0,'page','tentang-kami.html',0,'2022-05-01 00:00:00','2022-05-01 00:00:00'),
(1,'publish','','open','',0,0,'page','produk.html',0,'2022-05-01 00:00:00','2022-05-01 00:00:00'),
(1,'publish','','open','',0,0,'page','kontak.html',0,'2022-05-01 00:00:00','2022-05-01 00:00:00');

-- UNLOCK TABLES
