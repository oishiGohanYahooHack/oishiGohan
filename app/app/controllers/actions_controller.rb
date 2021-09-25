class ActionsController < ApplicationController
  def create
    # いただきます!!!!!!!!!!!
    p "=============================================================="
    p params

    # 緯度経度をランダムにずらす
    random = Random.new(Time.now.to_i)
    rand_seed_lat = random.rand(200) - 100
    rand_seed_lng = random.rand(200) - 100

    lat = params[:lat].to_f + rand_seed_lat * 0.01
    lng = params[:lng].to_f + rand_seed_lng * 0.01

    # action情報をDBに保存
    new_action = Action.new()
    new_action.user_id = current_user.id
    new_action.pref_id = params[:pref_id] if params[:pref_id]
    new_action.pin_color_id = params[:pin_color_id].to_i
    new_action.latitude = lat
    new_action.longitude = lng
    new_action.start_at = Time.now
    new_action.save

    # 緯度経度をCookieに保存
    cookies[:lat_lng] = [lat, lng]

    # ピンを立てる？
  end

  def update
    # ごちそうさまでした!!!!!!!!!!!

    # Cookieから緯度経度を取得

    # ピンを立てる?

    # Cookie情報の削除
    cookies.delete :lat_lng

  end

end