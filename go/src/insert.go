package main

import (
	"net/http"
	"strconv"
	"time"

	"github.com/labstack/echo"
)

func Post_link(c echo.Context) error {
	db := Connection()

	teacher_name := c.FormValue("teacher_name")
	teacher_sex_string := c.FormValue("teacher_sex")
	subject_name := c.FormValue("subject_name")
	subject_explanation := c.FormValue("subject_explanation")
	teacher_sex, _ := strconv.Atoi(teacher_sex_string)

	teacher := Teacher{
		Teacher_name: teacher_name,
		Teacher_sex:  teacher_sex,
	}
	db.Create(&teacher)

	subject := Subject{
		Subject_name:        subject_name,
		Subject_explanation: subject_explanation,
	}
	db.Create(&subject)

	var tid, sid int
	var Find_tid = Teacher{}
	db.Where("Teacher_name = ?", teacher_name).First(&Find_tid)
	tid = int(Find_tid.ID)
	var Find_sid = Subject{}
	db.Where("Subject_name = ?", subject_name).First(&Find_sid)
	sid = int(Find_sid.ID)
	link := Link{
		Teacher_id: tid,
		Subject_id: sid,
	}
	db.Create(&link)

	return c.String(http.StatusOK, "Write DB")
}

func Post_news(c echo.Context) error {
	db := Connection()

	news_data := c.FormValue("news_data")
	news := News{
		News_data: news_data,
	}
	db.Create(&news)

	return c.String(http.StatusOK, "Write DB")
}

func Post_company(c echo.Context) error {
	var layout = "2006-01-02 15:04:05"
	db := Connection()

	company_name := c.FormValue("company_name")
	date := c.FormValue("company_date")
	company_date, _ := time.Parse(layout, date)
	company := Company{
		Company_name: company_name,
		Company_date: company_date,
	}
	db.Create(&company)

	return c.String(http.StatusOK, "Write DB")
}

func Post_Continue_company(c echo.Context) error {
	db := Connection()
	company_name := c.FormValue("company_name")
	continue_company := Continue_company{
		Company_name: company_name,
	}
	db.Create(&continue_company)

	return c.String(http.StatusOK, "Write DB")
}

func Post_Continue_school(c echo.Context) error {
	db := Connection()
	school_name := c.FormValue("school_name")
	continue_school := Continue_school{
		School_name: school_name,
	}
	db.Create(&continue_school)

	return c.String(http.StatusOK, "Write DB")
}
