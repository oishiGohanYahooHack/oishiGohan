class CreatePrefs < ActiveRecord::Migration[6.1]
  def change
    create_table :prefs do |t|
      t.string :name, null: false
      t.decimal :latitude,  precision: 28, scale: 25, null: false
      t.decimal :longitude, precision: 28, scale: 25, null: false

      t.timestamps
    end
  end
end
