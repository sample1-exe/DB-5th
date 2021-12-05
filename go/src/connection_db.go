package main

import (
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var count = 0

func Connection() *gorm.DB {
	dsn := "user:P@ssw0rd@tcp(db5th_db:3306)/db5th?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		fmt.Fprintln(os.Stderr, "Not ready..., Retyr Connecting...")
		time.Sleep(time.Second)
		count++
		log.Println(count)
		if count > 30 {
			return Connection()
		}
		return nil
	}

	db.AutoMigrate(&Teacher{}, &Subject{}, &Link{}, &News{}, &Company{}, &Continue_school{}, &Continue_company{})

	return db
}
