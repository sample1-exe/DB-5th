curl -F "company_name=株式会社FFFF" localhost:8080/insert/continue_company
curl -F "company_name=株式会社GGGG" localhost:8080/insert/continue_company
curl -F "company_name=株式会社HHHH" localhost:8080/insert/continue_company
curl -F "company_name=株式会社IIII" localhost:8080/insert/continue_company

curl -F"school_name=AAA大学" localhost:8080/insert/continue_school
curl -F"school_name=BBB大学" localhost:8080/insert/continue_school
curl -F"school_name=CCC大学" localhost:8080/insert/continue_school
curl -F"school_name=DDD大学" localhost:8080/insert/continue_school
curl -F"school_name=EEE大学" localhost:8080/insert/continue_school

curl -F "company_name=株式会社AAAA" -F "company_date=2021-7-20 7:10:11" localhost:8080/insert/company
curl -F "company_name=株式会社BBBB" -F "company_date=2021-8-22 7:10:12" localhost:8080/insert/company
curl -F "company_name=株式会社CCCC" -F "company_date=2021-9-24 7:10:13" localhost:8080/insert/company
curl -F "company_name=株式会社DDDD" -F "company_date=2021-10-26 7:10:14" localhost:8080/insert/company
curl -F "company_name=株式会社EEEE" -F "company_date=2021-11-28 7:10:16" localhost:8080/insert/company
curl -F "company_name=国立大学法人 ABC大学" -F "company_date=2021-11-28 7:10:16" localhost:8080/insert/company
curl -F "company_name=公立大学法人 DEF大学" -F "company_date=2021-11-28 7:10:16" localhost:8080/insert/company
curl -F "company_name=〇〇県公立大学法人　GHI大学" -F "company_date=2021-11-28 7:10:16" localhost:8080/insert/company

curl -F "news_data=AIスマート工学コースのHPを開設しました" localhost:8080/insert/news
curl -F "news_data=教員ページを更新しました" localhost:8080/insert/news
curl -F "news_data=コース説明会が開催されます" localhost:8080/insert/news
curl -F "news_data=****開催されました" localhost:8080/insert/news
curl -F "news_data=「〇〇講座」の受講受付を開始しました" localhost:8080/insert/news
curl -F "news_data=本コースの学生が〇〇コンテストで受賞しました" localhost:8080/insert/news

curl -F "teacher_name=柴﨑 年彦" -F "teacher_sex=0" localhost:8080/insert/continue_school
curl -F "teacher_name=柴﨑 年彦" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=富永 一利" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=浅川 澄人" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=伊藤 聡史" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=大野 学" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=鈴木 宏昌" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=横井 健" -F "teacher_sex=0" localhost:8080/insert/teacher
curl -F "teacher_name=伊藤 敦" -F "teacher_sex=0" localhost:8080/insert/teacher

curl -F "subject_name=AIスマート工学実験実習" localhost:8080/insert/subject
curl -F "subject_name=データサイエンス" localhost:8080/insert/subject
curl -F "subject_name=コンピュータネットワーク" localhost:8080/insert/subject
curl -F "subject_name=AIスマート工学概論" localhost:8080/insert/subject
curl -F "subject_name=スマート制御" localhost:8080/insert/subject
curl -F "subject_name=情報処理" localhost:8080/insert/subject
curl -F "subject_name=工業力学" localhost:8080/insert/subject
curl -F "subject_name=インターフェース工学" localhost:8080/insert/subject
curl -F "subject_name=未定" localhost:8080/insert/subject

curl -F "teacher_id=1" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=2" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=3" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=4" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=5" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=6" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=7" -F "subject_id=9" localhost:8080/insert/link
curl -F "teacher_id=8" -F "subject_id=9" localhost:8080/insert/link