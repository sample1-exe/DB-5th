package main

import (
	"time"

	"gorm.io/gorm"
)

type Teacher struct {
	gorm.Model
	Teacher_name string `gorm:"primaryKey"`
	Teacher_sex  int    //men=0,women=1
}

type Subject struct {
	gorm.Model
	Subject_name        string
	Subject_explanation string
	Subject_syllabus    []byte
}

type Link struct {
	Teacher_id int
	Subject_id int
}

type News struct {
	gorm.Model
	News_data string
}

type Company struct {
	gorm.Model
	Company_name string
	Company_date time.Time
}

type Continue_company struct {
	gorm.Model
	Company_name string
}

type Continue_school struct {
	gorm.Model
	School_name string
}
