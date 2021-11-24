package main

import (
	"net/http"

	"github.com/labstack/echo"
)

func Get_teacher(c echo.Context) error {
	db := Connection()
	teacher := []Teacher{}
	db.Find(&teacher)

	return c.JSON(http.StatusOK, teacher)
}

func Get_subject(c echo.Context) error {
	db := Connection()
	subject := []Subject{}
	db.Find(&subject)

	return c.JSON(http.StatusOK, subject)
}

func Get_link(c echo.Context) error {
	db := Connection()
	link := []Link{}
	db.Find(&link)

	return c.JSON(http.StatusOK, link)
}

func Get_news(c echo.Context) error {
	db := Connection()
	news := []News{}
	db.Find(&news)

	return c.JSON(http.StatusOK, news)
}

func Get_company(c echo.Context) error {
	db := Connection()
	company := []Company{}
	db.Find(&company)

	return c.JSON(http.StatusOK, company)
}

func Get_Continue_company(c echo.Context) error {
	db := Connection()
	continue_company := []Continue_company{}
	db.Find(&continue_company)

	return c.JSON(http.StatusOK, continue_company)
}

func Get_Continue_school(c echo.Context) error {
	db := Connection()
	continue_school := []Continue_school{}
	db.Find(&continue_school)

	return c.JSON(http.StatusOK, continue_school)
}
