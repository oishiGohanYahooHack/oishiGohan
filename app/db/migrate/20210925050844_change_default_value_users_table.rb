class ChangeDefaultValueUsersTable < ActiveRecord::Migration[6.1]
  def change
    change_column_default :users, :name, from: nil, to: "ななしさん"
    change_column_default :users, :nickname, from: nil, to: "ななしさん"
  end
end
