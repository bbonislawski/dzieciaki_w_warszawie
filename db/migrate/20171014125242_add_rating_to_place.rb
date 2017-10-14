class AddRatingToPlace < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :rating, :decimal, default: 0
    add_column :places, :ratings_count, :integer, default: 0
  end
end
