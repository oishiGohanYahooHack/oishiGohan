# 美味しいご飯

## 概要
ご飯を1人で食べるととても寂しさがある。  
いただきます。ごちそうさまでしたを呟くと日本地図にポップアップが出て一緒に食べてる感覚がするWebアプリ

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

## 起動

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