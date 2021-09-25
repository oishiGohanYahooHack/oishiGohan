class CreateActions < ActiveRecord::Migration[6.1]
  def change
    create_table :actions do |t|
      t.references :user, null: false, foreign_key: true
      t.references :pref, foreign_key: true
      t.references :pin_color, null: false, foreign_key: true
      t.decimal :latitude, precision: 28, scale: 25
      t.decimal :longitude, precision: 28, scale: 25
      t.datetime :start_at, null: false
      t.datetime :end_at
      t.boolean :auto_close, default: false

      t.timestamps
    end
  end
end
