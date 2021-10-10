<img src="/Readme_assets/top_img.png" alt="ログインページ">
<img src="/Readme_assets/map_img.png" alt="マップ">

<h2 align="center">美味しいご飯パワー</h2>

## :mortar_board: Overview
リアルタイムでご飯を食べている人を表示させるアプリケーション
For [Yahoo!JAPAN DigitalHackDay]("https://hackday.yahoo.co.jp/")

発表シーンは[こちら]("https://youtu.be/D04R7zEfDG0?t=6495")

## :chart_with_upwards_trend: Purpose
- コロナ禍でのひとりご飯の孤独感をなくすため
- 日本のデジタル化を楽しく推進するため

## :pencil2: Description
- リアルタイムにご飯を食べている人を表示  
- Google認証
- 時間によって表示するご飯の背景を変更
- GPSによる位置の取得+現在位置の特定を避けるランダム化
- Mapbox APIの利用

## :skull: App URL

**heorkuのURLを載せる予定** 
　
## 💬 Usage

### 1.リアルタイムにご飯を食べている人を表示  
アプリのいただきますボタンを押すと、日本地図上にご飯マークが表示されます。自分の他にも表示されているご飯マークを見ることで、他に一緒に食事をしている誰かを感じることができます。 

### 2.Google認証
GCPを利用して、Googleのアカウントを使用して登録も可能です。

### 3.時間によって表示するご飯の背景を変更
アプリの背景をリアルな自国に基づいて変更するように工夫しました。朝ごはん・昼ごはん・夕ご飯の違いを意識しています。

### 4.GPSによる位置の取得+現在位置の特定を避けるランダム化
GPSを利用して、食事をしている人の位置を取得しています。同時に、セキュリティやプライバシーの観点から、ある程度位置をランダム化して個人情報の特定を防いでいます。

### 5.Mapbox APIの利用
ハッカソンのために提供いただいたMapboxさんのAPIを使用しております。
https://docs.mapbox.com/api/overview/


<br><br>

## 🔧 Setting

* Ruby version
    * ruby-2.7.3


* システム構成
    * Docker
        * 開発環境
            * App_Rails
            * PostgreSQL
            * Redis
        * 本番環境
            * App_Rails (Heroku_予定)
            * PostgreSQL (Heroku_予定)
            * Redis (Heroku_予定)


* 設定変更項目
    * 環境変数ファイル(Docker使用時は、DATABASE情報は以下が初期値)
    * productionはHerokuのConfig Varsから自動取得に設定済み
```dotenv
DATABASE_HOST=postgres
DATABASE_USER=postgres
DATABASE_PASSWORD=password
REDIS_URL=redis://redis:6379/1
```

## 🍙 Start

自動的にPostgresSQL/Redisなども起動します。  
初回起動時は、`docker-compose up`後にデータベース/テーブル作成を先に実施して`docker-compose`を再起動してください。
```bash
docker-compose up
```

* データベース作成
```bash
docker-compose run --rm app rails db:create
```

* テーブル作成
```bash
docker-compose run --rm app rails db:migrate
```

## Bundle Install
```bash
docker-compose run --rm app bundle install
```

### Gemの確認
ruby gem、gemsとしてVolumeに保持されます。

以下でVolume内のGemを確認可能
```bash
docker-compose run --rm app ls /usr/local/bundle/gems
```

## node_modules
```bash
# package.json install
docker-compose run --rm app yarn install

# Add package
docker-compose run --rm app yarn add package_name

# Remove package
docker-compose run --rm app yarn remove package_name
```

# Heroku Config Vars
```
RACK_ENV : production
RAILS_ENV : production
RAILS_MASTER_KEY : ~~~
RAILS_SERVE_STATIC_FILES : true
```
