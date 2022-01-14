# DB-5th

## port

|コンテナ名|ポート番号|
|---|---|
|go|8080|
|next|80|
|db|3306|

## 起動方法

1. 以下のコマンドを実行する
```sh
$ docker-compose build
$ docker-compose up -d
$ chmod +x run.sh
$ ./run.sh
```
2. ブラウザで `http://localhost` に接続する

## 操作
### 入力のリスト
```
/insert/teacher：教員の入力
/insert/subject：科目の入力
/insert/link：教員ID、科目IDの紐付けの入力
/insert/news：ニュースの入力
/insert/company：連携先の入力
/insert/continue_company：就職先の入力
/insert/continue_school：進学先の入力
```
### 出力のリスト
```
/select/teacher：教員の出力
/select/subject：科目の出力
/select/link：教員ID、科目IDの紐付けの出力
/select/news：ニュースの出力
/select/company：連携先の出力
/select/continue_company：就職先の出力
/select/continue_school：進学先の出力
```
### DBへの書き込み
科目、教員（性別は0が男性、1が女性）
```
curl -F "teacher_name=aaa" -F "teacher_sex=0" -F "subject_name=ddd" -F "subject_explanation=ccc" localhost:8080/insert/link
```
ニュース
```
curl -F "news_data=aaa" localhost:8080/insert/news
```
提携企業
```
curl -F "company_name=aaa" -F "company_date=YYYY-MM-DD HH:MM:SS" localhost:8080/insert/company
```
進学先（企業）
```
curl -F "company_name" localhost:8080/insert/continue_company
```
進学先（学校）
```
curl -F"school_name=aaa" localhost:8080/insert/continue_school