# โฟลเดอร์รูปภาพ

โฟลเดอร์นี้สำหรับเก็บรูปภาพที่ใช้ในเว็บไซต์ Portfolio

## โครงสร้างโฟลเดอร์

```
images/
├── profile/          # รูปภาพโปรไฟล์ (รูปส่วนตัว)
├── projects/         # รูปภาพผลงานโปรเจกต์
└── README.md         # ไฟล์นี้
```

## วิธีใช้งาน

### รูปภาพโปรไฟล์
- เพิ่มรูปภาพโปรไฟล์ของคุณในโฟลเดอร์ `profile/`
- ชื่อไฟล์แนะนำ: `profile.jpg`, `avatar.png`, `me.jpg`
- ขนาดแนะนำ: 400x400 pixels หรือมากกว่า (สัดส่วน 1:1)
- รูปแบบไฟล์: JPG, PNG, WebP

### รูปภาพผลงาน
- เพิ่มรูปภาพของแต่ละโปรเจกต์ในโฟลเดอร์ `projects/`
- ชื่อไฟล์แนะนำ: 
  - `project1.jpg`, `project1-1.jpg`, `project1-2.jpg`
  - `webapp.png`
  - `mobile-app.jpg`
- ขนาดแนะนำ: 1200x800 pixels หรือมากกว่า (สัดส่วน 16:9 หรือ 4:3)
- รูปแบบไฟล์: JPG, PNG, WebP

## การเพิ่มรูปภาพใน HTML

### สำหรับรูปภาพโปรไฟล์ (Hero/About Section)

แทนที่ `<div class="image-placeholder">` ด้วย:

```html
<img src="images/profile/your-profile-image.jpg" alt="โปรไฟล์" class="profile-img">
```

### สำหรับรูปภาพผลงาน (Projects Section)

แทนที่ `<div class="image-placeholder">` ด้วย:

```html
<img src="images/projects/project1.jpg" alt="ชื่อโปรเจกต์">
```

## ตัวอย่างโครงสร้าง

```
images/
├── profile/
│   ├── profile.jpg
│   └── avatar.png
└── projects/
    ├── webapp.jpg
    ├── mobile-app.jpg
    ├── ai-project.jpg
    ├── game.jpg
    ├── security.jpg
    └── cloud-app.jpg
```

## หมายเหตุ

- ควรบีบอัดรูปภาพก่อนใช้งานเพื่อให้เว็บไซต์โหลดเร็วขึ้น
- ใช้ชื่อไฟล์ภาษาอังกฤษและไม่มีช่องว่าง
- แนะนำใช้ lowercase และใช้เครื่องหมาย `-` แทนช่องว่าง

