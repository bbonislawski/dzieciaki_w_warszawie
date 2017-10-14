class AddAvgRatingToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :avg_rating, :decimal
  end
end
