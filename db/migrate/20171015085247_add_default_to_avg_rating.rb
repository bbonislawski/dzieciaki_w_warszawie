class AddDefaultToAvgRating < ActiveRecord::Migration[5.1]
  def change
    change_column :places, :avg_rating, :decimal, default: 0
  end
end
