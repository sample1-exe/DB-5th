package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()

	// CORSの設定
	e.Use(middleware.CORS())

	e.POST("/insert/teacher", POST_teacher)
	e.POST("/insert/subject", POST_subject)
	e.POST("/insert/link", Post_link)
	e.POST("/insert/news", Post_news)
	e.POST("/insert/company", Post_company)
	e.POST("/insert/continue_company", Post_Continue_company)
	e.POST("/insert/continue_school", Post_Continue_school)

	e.GET("/select/teacher", Get_teacher)
	e.GET("/select/subject", Get_subject)
	e.GET("/select/link", Get_link)
	e.GET("/select/news", Get_news)
	e.GET("/select/company", Get_company)
	e.GET("/select/continue_company", Get_Continue_company)
	e.GET("/select/continue_school", Get_Continue_school)

	e.Logger.Fatal(e.Start(":8080"))
}
