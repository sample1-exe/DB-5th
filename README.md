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

<<<<<<< HEAD
## 操作
### APIパラメータ

#### /select/hostlist [GET]
HostListテーブルのすべての要素を取得

#### /select/hoststatus/one/<HostList_id>[GET]
idはint系
HostListテーブルのIDを指定してHostStatusテーブルの最新一個のカラムを取得する

#### /select/hoststatus/some/<HostList_id> [GET]
HostListテーブルのIDを用いてHostStatusテーブルの最新n個のカラムを取得する

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
=======
## 終了方法

1. 以下のコマンドを実行する
```sh
$ docker-compose down
>>>>>>> 9552e0da93c63c67cbb6bc3fb02f11edc475a7da
```