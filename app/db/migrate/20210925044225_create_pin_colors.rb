class CreatePinColors < ActiveRecord::Migration[6.1]
  def change
    create_table :pin_colors do |t|
      t.string :name, null: false
      t.string :color, null: false

      t.timestamps
    end
  end
end
