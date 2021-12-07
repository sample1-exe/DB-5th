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

## 終了方法

1. 以下のコマンドを実行する
```sh
$ docker-compose down
```