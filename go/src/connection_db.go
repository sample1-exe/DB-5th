package main

import (
	"fmt"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connection() *gorm.DB {
	dsn := "user:P@ssw0rd@tcp(db5th_db:3306)/db5th?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Println(err) //エラー発生時
	}
	db.AutoMigrate(&Teacher{}, &Subject{}, &Link{}, &News{}, &Company{}, &Continue_school{}, &Continue_company{})

	return db
}
