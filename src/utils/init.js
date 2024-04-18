// Kết nối tới cơ sở dữ liệu admin để tạo cơ sở dữ liệu mới
db = db.getSiblingDB("admin");

// Tạo cơ sở dữ liệu mới
db.createCollection("shopdev");

// Chuyển sang cơ sở dữ liệu mới tạo
db = db.getSiblingDB("shopdev");
