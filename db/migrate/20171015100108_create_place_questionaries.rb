class CreatePlaceQuestionaries < ActiveRecord::Migration[5.1]
  def change
    create_table :place_questionaries do |t|
      t.references :place, foreign_key: true
      t.json :data

      t.timestamps
    end
  end
end
