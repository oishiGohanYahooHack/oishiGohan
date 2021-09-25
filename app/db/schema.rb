# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_25_051348) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actions", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "pref_id"
    t.bigint "pin_color_id", null: false
    t.decimal "latitude", precision: 28, scale: 25
    t.decimal "longitude", precision: 28, scale: 25
    t.datetime "start_at", null: false
    t.datetime "end_at"
    t.boolean "auto_close", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pin_color_id"], name: "index_actions_on_pin_color_id"
    t.index ["pref_id"], name: "index_actions_on_pref_id"
    t.index ["user_id"], name: "index_actions_on_user_id"
  end

  create_table "pin_colors", force: :cascade do |t|
    t.string "name", null: false
    t.string "color", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "prefs", force: :cascade do |t|
    t.string "name", null: false
    t.decimal "latitude", precision: 28, scale: 25, null: false
    t.decimal "longitude", precision: 28, scale: 25, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "nickname", default: "ななしさん", null: false
    t.string "provider"
    t.string "uid"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "actions", "pin_colors"
  add_foreign_key "actions", "prefs"
  add_foreign_key "actions", "users"
end
