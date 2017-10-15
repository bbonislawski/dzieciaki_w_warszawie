class AddPromotedToPlaces < ActiveRecord::Migration[5.1]
  def change
    add_column :places, :promoted, :boolean, default: false
  end
end
