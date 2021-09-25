# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "csv"

CSV.foreach('db/seeds/csv/prefs.csv', headers: false) do |row|
  content = Pref.create(
    name: row[0],
    latitude: row[1],
    longitude: row[2]
  )
end

CSV.foreach('db/seeds/csv/colors.csv', headers: false) do |row|
  content = PinColor.create(
    name: row[0],
    color: row[1]
  )
end