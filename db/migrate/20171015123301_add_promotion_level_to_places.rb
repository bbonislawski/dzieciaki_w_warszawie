class AddPromotionLevelToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :promotion_level, :integer, default: 0
  end
end
